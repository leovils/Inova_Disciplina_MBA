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
1. Abra o **Mapa da Jornada** (`mapa_jornada.html`).
2. No painel **"☁️ Sincronizar com a nuvem"**, cole a **URL `/exec`** e defina o **Código da turma** (ex.: `MBA-2026-1`).
3. Faça o mesmo no **Painel do Professor** (`painel_professor.html`).

> 💡 Atalho: você pode distribuir um link já configurado para os alunos, assim:
> `mapa_jornada.html?api=SUA_URL_EXEC&turma=MBA-2026-1`
> Os campos vêm preenchidos automaticamente.

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
