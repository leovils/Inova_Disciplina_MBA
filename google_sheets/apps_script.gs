/**
 * Jornada PIPE — backend Google Sheets (Apps Script)
 * Recebe os boletins das startups, grava na planilha e devolve para
 * recuperação (load) e para o Painel do Professor (list).
 *
 * Como instalar: veja COMO_CONFIGURAR.md (mesma pasta).
 *
 * Endpoints:
 *   POST  body JSON {action:"save", turma, startup, boletim}   -> grava
 *   GET   ?action=load&turma=..&startup=..[&callback=cb]        -> 1 boletim
 *   GET   ?action=list&turma=..[&callback=cb]                   -> todos da turma
 */

var SHEET_PLACAR = "Placar";
var SHEET_HIST   = "Historico";
var HEADERS = ["timestamp","turma","startup","xp","missoes","capital","conquistas","boletim_json"];

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
  if(p.action === "load")      res = load_(p.turma, p.startup);
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

function rowFrom_(turma, b){
  var r = b.resumo || {};
  return [ new Date(), turma, (b.startup||""), (r.xp||0), (r.missoes||""),
           (r.capitalSemente||0), ((r.conquistas||[]).join(" | ")), JSON.stringify(b) ];
}

function save_(body){
  var lock = LockService.getScriptLock();
  try{ lock.waitLock(20000); }catch(e){ return {ok:false, error:"sistema ocupado, tente de novo"}; }
  try{
    var b = body.boletim || {};
    var turma = (body.turma || "").toString().trim();
    var startup = ((b.startup || body.startup || "")).toString().trim();
    if(!startup) return {ok:false, error:"startup sem nome"};
    b.startup = startup;
    var row = rowFrom_(turma, b);

    // histórico: registra toda gravação (auditoria / recuperação)
    sheet_(SHEET_HIST).appendRow(row);

    // placar: 1 linha por (turma + startup), sempre a mais recente
    var pl = sheet_(SHEET_PLACAR);
    var data = pl.getDataRange().getValues();
    var found = -1;
    for(var i=1;i<data.length;i++){
      if(String(data[i][1]).trim()===turma &&
         String(data[i][2]).trim().toLowerCase()===startup.toLowerCase()){ found = i+1; break; }
    }
    if(found>0) pl.getRange(found,1,1,row.length).setValues([row]);
    else        pl.appendRow(row);

    return {ok:true, startup:startup, savedAt:new Date().toISOString()};
  } finally { lock.releaseLock(); }
}

function load_(turma, startup){
  turma = (turma||"").toString().trim();
  startup = (startup||"").toString().trim().toLowerCase();
  var pl = sheet_(SHEET_PLACAR);
  var data = pl.getDataRange().getValues();
  for(var i=1;i<data.length;i++){
    if(String(data[i][1]).trim()===turma &&
       String(data[i][2]).trim().toLowerCase()===startup){
      try{ return {ok:true, boletim: JSON.parse(data[i][7])}; }
      catch(e){ return {ok:false, error:"json invalido"}; }
    }
  }
  return {ok:false, error:"nao encontrado"};
}

function list_(turma){
  turma = (turma||"").toString().trim();
  var pl = sheet_(SHEET_PLACAR);
  var data = pl.getDataRange().getValues();
  var arr = [];
  for(var i=1;i<data.length;i++){
    if(!turma || String(data[i][1]).trim()===turma){
      try{ arr.push(JSON.parse(data[i][7])); }catch(e){}
    }
  }
  return {ok:true, boletins: arr};
}
