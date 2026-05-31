# ☁️ Integração com Google Sheets — passo a passo

Com isto, o progresso de cada startup é salvo na nuvem automaticamente. O grupo recupera tudo em qualquer computador, e o professor vê o placar ao vivo. Não exige login dos alunos.

## 1. Criar a planilha
1. Acesse [sheets.new](https://sheets.new) e crie uma planilha (ex.: "Jornada PIPE — Turma 2026").
2. Não precisa criar abas nem cabeçalhos — o script cria sozinho (`Placar` e `Historico`).

## 2. Colar o código
1. Na planilha: menu **Extensões → Apps Script**.
2. Apague o conteúdo de exemplo e **cole todo o código** do arquivo [`apps_script.gs`](apps_script.gs).
3. Clique em **Salvar** (ícone do disquete).

## 3. Publicar como aplicativo web
1. No editor do Apps Script, clique em **Implantar → Nova implantação**.
2. Em "Selecionar tipo" (engrenagem), escolha **App da Web**.
3. Configure:
   - **Executar como:** *Eu* (sua conta).
   - **Quem pode acessar:** **Qualquer pessoa**. ⚠️ Isto é necessário para os alunos conseguirem salvar sem login.
4. Clique em **Implantar** e **autorize** o acesso (vai pedir permissão para a sua conta — é normal; é o seu próprio script acessando a sua planilha).
5. Copie a **URL do app da Web** (termina em **`/exec`**). É essa URL que você vai colar na Jornada.

## 4. Ligar a Jornada à planilha
A URL `/exec` e o código da turma já podem ficar **embutidos no arquivo** (recomendado):
1. Abra `mapa_jornada.html` num editor de texto e, no topo do `<script>`, ajuste as duas linhas:
   - `const API_FIXA="...sua URL /exec...";`
   - `const TURMA_FIXA="MBA-2026-1";`
2. Pronto: ao abrir o mapa, os campos de URL e turma ficam **ocultos**; o aluno só preenche **nome da startup** e **PIN do grupo**.
3. No **Painel do Professor** (`painel_professor.html`), cole a mesma URL `/exec` e a turma uma vez (ou use `?api=...&turma=...` no link).

> 💡 Alternativa sem editar o arquivo: distribua um link já configurado —
> `mapa_jornada.html?api=SUA_URL_EXEC&turma=MBA-2026-1`

### PIN por grupo (anti-colisão)
Cada grupo escolhe um **PIN** (ex.: `4729`) na primeira aula e o guarda. O identificador na planilha é **turma + nome da startup + PIN** — assim dois grupos nunca sobrescrevem o boletim um do outro, e só recupera quem souber o PIN.

### Ao atualizar o código do script
Se você trocar o `apps_script.gs` (como na versão com PIN), **apague as abas `Placar` e `Historico`** antigas (elas têm o layout anterior) — o script recria com as colunas novas — e **republique**: Implantar → Gerenciar implantações → ✏️ → Versão: **Nova versão** → Implantar (a URL `/exec` não muda).

## 5. Usar no dia a dia
- **Aluno:** marca o "Salvar automático" no painel da nuvem. A cada missão concluída, o boletim sobe para a planilha. Em outro computador, ele clica em **"⬇️ Restaurar desta startup"** e recupera tudo.
- **Professor:** no Painel do Professor, clique em **"☁️ Carregar da nuvem"** para puxar todos os boletins da turma e ver o placar atualizado.

## Dúvidas comuns
- **Editei o código, e agora?** Vá em **Implantar → Gerenciar implantações → (lápis) → Nova versão → Implantar**. A URL `/exec` continua a mesma.
- **Deu erro de permissão para os alunos?** Confirme que "Quem pode acessar" está como **Qualquer pessoa**.
- **Os dados são privados?** A planilha é sua. A URL permite gravar/ler boletins, mas não dá acesso à planilha em si. Use um **código de turma** pouco óbvio se quiser mais discrição.
- **Cada gravação apaga a anterior?** No `Placar`, fica sempre a versão mais recente de cada startup. No `Historico`, ficam todas as gravações (bom para auditoria e recuperação).

---
*Jornada PIPE FAPESP · Estratégias de Fomento à Inovação*
