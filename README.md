# 🚀 Jornada PIPE — Estratégias de Fomento à Inovação

Disciplina de MBA reformulada como uma **jornada baseada em projeto**: ao longo de **12 encontros de 2 a 3 horas**, cada grupo vira uma startup fictícia e constrói, peça por peça, uma **proposta de pesquisa para inovação no formato PIPE FAPESP (Fase 1)** — defendida em um pitch na última aula.

Tudo roda no navegador, sem instalação. Os widgets salvam o progresso e exportam o conteúdo para compor a proposta.

---

## 🧭 Como usar

Abra **[`index_jornada_pipe.html`](index_jornada_pipe.html)** — é o painel da disciplina. De lá você acessa, para cada aula:

- 🖥️ **Slides** (web-deck) do encontro
- 🧰 **Widget(s)** interativos
- 📖 **Guia** de uso de cada widget

### 🎮 Modo game

- **[`apresentacao_game.html`](apresentacao_game.html)** — deck de abertura para mostrar na 1ª aula (setas/espaço para navegar, `F` para tela cheia). Apresenta o jogo aos alunos.
- **[`mapa_jornada.html`](mapa_jornada.html)** — o Mapa da Jornada: travessia do Vale da Morte em 5 fases, com XP, níveis, conquistas, Capital Semente e cartas de evento. Sincronizado com o hub.
- **[`guia_do_jogador.html`](guia_do_jogador.html)** — guia visual para apresentar aos alunos (regras, como pontuar, como jogar aula a aula).
- **[`painel_professor.html`](painel_professor.html)** — o professor importa os boletins (.json) dos grupos e vê o placar, o progresso e exporta CSV.

**Registro dos resultados — duas formas:**

1. **Sem servidor (arquivos):** cada grupo clica em **📤 Exportar boletim** no Mapa (um `.json` com tudo) e entrega ao professor, que arrasta os arquivos no **Painel do Professor**.
2. **Na nuvem (Google Sheets) — recomendado:** com a integração configurada (ver `google_sheets/COMO_CONFIGURAR.md`), o progresso sobe sozinho para uma planilha a cada missão concluída. O grupo recupera em qualquer computador com **⬇️ Restaurar desta startup**, e o professor vê o placar ao vivo com **☁️ Carregar da nuvem**. Resolve o caso de trocar de máquina ou limpar o navegador.

> ℹ️ Importante: fechar o navegador **não** apaga o progresso (o `localStorage` é persistente). A perda só ocorre ao limpar o cache, usar outro computador/navegador ou janela anônima — exatamente os casos que a nuvem cobre.

> Dica: hospede no **GitHub Pages** (Settings → Pages → branch `main`) e compartilhe um único link com a turma. Não há back-end — é tudo HTML estático.

---

## 🗂️ Estrutura do repositório

```
Jornada PIPE 2026/
├── index_jornada_pipe.html      ← painel principal (comece aqui)
├── Plano_Jornada_PIPE.docx      ← plano de ensino completo
├── README.md
├── slides/                      ← 12 web-decks (um por encontro)
│   ├── aula01_ecossistema.html
│   └── ... aula12_pitch.html
├── widgets/                     ← 19 ferramentas interativas
│   ├── 01_mapa_ecossistema_fomento.html
│   ├── ... 13_termo_abertura_startup.html
│   └── 14–19 (Biblioteca de Conceitos)
├── guias/                       ← 19 guias de uso (.md)
│   ├── 01_mapa_ecossistema_fomento.md
│   └── ... 19_tutorial_pipe_faq.md
├── mapa_jornada.html            ← modo game (mapa, XP, badges, nuvem)
├── guia_do_jogador.html         ← guia visual para os alunos
├── painel_professor.html        ← placar consolidado da turma
└── google_sheets/               ← integração na nuvem (opcional)
    ├── apps_script.gs
    └── COMO_CONFIGURAR.md
```

---

## 🧱 A jornada em 5 blocos

| Bloco | Aulas | Foco |
|------|------|------|
| 1 · Descobrir | 1–2 | Ecossistema de fomento e descoberta do problema |
| 2 · Idear | 3–5 | Geração (Osborn, SCAMPER) e seleção de ideias |
| 3 · Validar | 6–8 | Caráter inovador/TRL, proposta de valor, modelo de negócio |
| 4 · Financiar | 9–11 | Edital certo, plano de pesquisa, riscos, orçamento |
| 5 · Defender | 12 | Pitch e checklist de submissão |

---

## 🧰 Os 19 widgets

**Ferramentas de construção do projeto:**

| # | Widget | Aula |
|---|--------|------|
| 01 | Mapa do Ecossistema de Fomento | 1 |
| 13 | Termo de Abertura da Startup | 1 |
| 02 | Radar de Oportunidades | 2 |
| 03 | Listagem de Atributos de Osborn | 3 |
| 04 | Painel SCAMPER | 4 |
| 05 | Matriz de Priorização Ponderada | 5 |
| 06 | Avaliador de TRL & Caráter Inovador | 6 |
| 07 | Value Proposition Canvas | 7 |
| 08 | Business Model Canvas | 8 |
| 09 | Seletor de Edital | 9 |
| 10 | Cronograma & Matriz de Riscos | 10 |
| 11 | Orçamento PIPE & Equipe | 11 |
| 12 | Rubrica de Pitch & Checklist | 12 |

**Biblioteca de Conceitos (referência teórica):**

| # | Widget | Apoio à aula |
|---|--------|------|
| 14 | Sistema Nacional de Inovação (Tríplice/Quádrupla Hélice) | 1 |
| 15 | Manual de Oslo — o que é inovação | 6 |
| 16 | Taxonomia da Inovação (Henderson-Clark, Christensen…) | 5–6 |
| 17 | Indicadores de Inovação (GII, PINTEC, KPIs) | 1 |
| 18 | Propriedade Intelectual & Marco Legal | 6 |
| 19 | Tutorial Interativo PIPE FAPESP & FAQ | 9 |

---

## 💾 Como os alunos salvam o trabalho

Os widgets de preenchimento têm, no canto superior direito, dois botões:

- **💾 Salvar** — baixa um arquivo `.json` com tudo que o grupo preencheu.
- **📂 Carregar** — recarrega um `.json` salvo antes (em qualquer computador).

Além disso, cada widget tem **⬇ Exportar** (gera `.txt`) e alguns têm **🖨️ Imprimir/PDF**. O progresso também fica salvo automaticamente no navegador (localStorage), mas o `.json` é a forma segura de **guardar, retomar e entregar** o trabalho.

> Fluxo sugerido de entrega: cada grupo salva o `.json` de cada widget e envia tudo junto com a proposta final.

---

## 🎓 Trabalho final

Uma **Proposta PIPE FAPESP — Fase 1** (até 9 meses, teto de R$300 mil) + pitch de 8 minutos. Cada aula entrega um "sprint" que vira uma seção da proposta. Detalhes, roteiro de cada encontro e rubrica de avaliação estão em **`Plano_Jornada_PIPE.docx`**.

---

## 📌 Sobre o PIPE FAPESP (dados de 2025)

- **Fase 1:** até 9 meses · até R$300 mil (viabilidade técnico-científica)
- **Fase 2:** até 24 meses · até R$1,5 milhão (desenvolvimento)
- **Elegibilidade:** empresas com até 250 funcionários e P&D no Estado de São Paulo
- **Submissão:** contínua, pelo sistema SAGe
- Fontes: <https://fapesp.br/pipe/> · <https://fapesp.br/58/programa-fapesp-pesquisa-inovativa-em-pequenas-empresas-pipe>

---

*Jornada PIPE · Estratégias de Fomento à Inovação · material didático.*
