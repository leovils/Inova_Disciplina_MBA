/**
 * Jornada PIPE - backend Google Sheets (Apps Script)
 * Identificador de cada grupo: turma + startup + PIN (blinda contra colisao).
 * Instalacao: veja COMO_CONFIGURAR.md (mesma pasta).
 *
 * Endpoints:
 *   POST  body JSON {action:"save", turma, startup, pin, boletim}   -> grava
 *   GET   ?action=load&turma=..&startup=..&pin=..[&callback=cb]      -> 1 boletim
 *   GET   ?action=list&turma=..[&callback=cb]                        -> todos da turma
 */

var SHEET_PLACAR = "Placar";
var SHEET_HIST   = "Historico";
var HEADERS = ["timestamp","turma","startup","pin","xp","missoes","capital","conquistas","boletim_json"];
var COL_JSON = 8;

function doPost(e){
  try{
    var body = JSON.parse(e.postData.contents);
    if(body.action === "save") return out_(save_(body));
    return out_({ok:false, error:"acao desconhecida"});
  }catch(err){
    return out_({ok:false, error:String(err)});
  }
}

function doGet(e){
  var p = (e && e.parameter) ? e.parameter : {};
  var res;
  if(p.action === "load")      res = load_(p.turma, p.startup, p.pin);
  else if(p.action === "list") res = list_(p.turma);
  else                         res = {ok:true, msg:"Jornada PIPE API online"};
  return out_(res, p.callback);
}

function out_(obj, callback){
  var json = JSON.stringify(obj);
  if(callback){
    return ContentService.createTextOutput(callback + "(" + json + ")")
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(json)
    .setMimeType(ContentService.MimeType.JSON);
}

function sheet_(name){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(name);
  if(!sh){ sh = ss.insertSheet(name); sh.appendRow(HEADERS); }
  return sh;
}

function rowFrom_(turma, pin, b){
  var r = b.resumo || {};
  return [ new Date(), turma, (b.startup||""), pin, (r.xp||0), (r.missoes||""),
           (r.capitalSemente||0), ((r.conquistas||[]).join(" | ")), JSON.stringify(b) ];
}

function match_(rowVals, turma, startupLower, pin){
  return String(rowVals[1]).trim()===turma &&
         String(rowVals[2]).trim().toLowerCase()===startupLower &&
         String(rowVals[3]).trim()===pin;
}

function save_(body){
  var lock = LockService.getScriptLock();
  try{ lock.waitLock(20000); }catch(e){ return {ok:false, error:"sistema ocupado, tente de novo"}; }
  try{
    var b = body.boletim || {};
    var turma   = (body.turma || "").toString().trim();
    var startup = ((b.startup || body.startup || "")).toString().trim();
    var pin     = (body.pin || "").toString().trim();
    if(!startup) return {ok:false, error:"startup sem nome"};
    if(!pin)     return {ok:false, error:"informe o PIN do grupo"};
    b.startup = startup;
    var row = rowFrom_(turma, pin, b);
    sheet_(SHEET_HIST).appendRow(row);
    var pl = sheet_(SHEET_PLACAR);
    var data = pl.getDataRange().getValues();
    var found = -1;
    for(var i=1;i<data.length;i++){
      if(match_(data[i], turma, startup.toLowerCase(), pin)){ found = i+1; break; }
    }
    if(found>0) pl.getRange(found,1,1,row.length).setValues([row]);
    else        pl.appendRow(row);
    return {ok:true, startup:startup, savedAt:new Date().toISOString()};
  } finally { lock.releaseLock(); }
}

function load_(turma, startup, pin){
  turma   = (turma||"").toString().trim();
  startup = (startup||"").toString().trim().toLowerCase();
  pin     = (pin||"").toString().trim();
  var pl = sheet_(SHEET_PLACAR);
  var data = pl.getDataRange().getValues();
  for(var i=1;i<data.length;i++){
    if(match_(data[i], turma, startup, pin)){
      try{ return {ok:true, boletim: JSON.parse(data[i][COL_JSON])}; }
      catch(e){ return {ok:false, error:"json invalido"}; }
    }
  }
  return {ok:false, error:"nao encontrado (confira nome da startup e PIN)"};
}

function list_(turma){
  turma = (turma||"").toString().trim();
  var pl = sheet_(SHEET_PLACAR);
  var data = pl.getDataRange().getValues();
  var arr = [];
  for(var i=1;i<data.length;i++){
    if(!turma || String(data[i][1]).trim()===turma){
      try{ arr.push(JSON.parse(data[i][COL_JSON])); }catch(e){}
    }
  }
  return {ok:true, boletins: arr};
}
