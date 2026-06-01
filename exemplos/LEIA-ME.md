# 🎓 Exemplos didáticos — Radar, Osborn e SCAMPER

Exemplos prontos para demonstrar as ferramentas em sala. Todos giram em torno de **um caso coerente** — a startup fictícia **GeadaZero** — para os alunos verem o funil: **achar o problema → atacar atributos → reinventar a ideia**.

## Como carregar
1. Abra o widget (ex.: `widgets/02_radar_oportunidades.html`).
2. Clique em **📂 Carregar** (canto superior direito).
3. Escolha o arquivo `.json` correspondente desta pasta. Pronto — vem tudo preenchido.

> ⚠️ Carregar **substitui** o conteúdo atual daquele navegador. Para demonstração, use um navegador/aba limpos (ou faça antes de os grupos começarem). Depois é só recarregar a página para zerar, ou os grupos carregam o próprio trabalho.

---

## 1) Radar de Oportunidades — `radar_geadazero.json`
**Caso:** uma dupla de enólogos quer empreender em tecnologia para a viticultura do interior de SP. Mapearam 7 dores do setor.

O que mostrar: ao plotar na matriz **frequência × intensidade**, a dor *"geada destrói até 30% da safra e o produtor não tem previsão local confiável"* salta para o canto superior direito (5×5) — **alta frequência e alta gravidade**. É a candidata óbvia a virar projeto. As demais (turismo na baixa temporada, desperdício de água) ficam em quadrantes menos urgentes.

**Lição:** nem toda dor merece um projeto. A matriz transforma "achismo" em critério visual.

> Extra: `radar_clinica.json` traz o mesmo exercício noutro domínio (clínica popular) — útil para mostrar que a ferramenta não depende do setor.

## 2) Listagem de Osborn — `osborn_geadazero.json`
**Caso:** escolhida a dor da geada, o grupo define o foco — *"sensor de previsão de geada para vinhedos"* — e ataca **atributo por atributo** (energia, conectividade, forma, sensores, alerta, cobrança, visibilidade).

O que mostrar: nenhuma ideia nasce do nada. Trocar a **fonte de energia** (bateria → solar) ou a **conectividade** (Wi-Fi → LoRa) já muda o produto. Mudar o **modelo de cobrança** (vender hardware → assinatura por hectare) muda o *negócio*.

**Lição:** inovação mora nos atributos. Pequenas variações geram muitas ideias.

## 3) SCAMPER — `scamper_geadazero.json`
**Caso:** partindo do conceito *"sensor-estaca que prevê geada e alerta por SMS"*, o grupo passa pelas sete lentes.

O que mostrar: as lentes **Eliminar** ("tira o app, usa ligação de voz") e **Reverter** ("em vez de alertar o produtor, integrar à irrigação que liga sozinha") costumam gerar os saltos mais disruptivos — e levam direto a uma pergunta de pesquisa com **risco tecnológico**, exatamente o que o PIPE valoriza.

**Lição:** SCAMPER força a sair do incremental óbvio.

---

## Sugestão de roteiro (15 min em sala)
1. Abra o **Radar** com o exemplo → discuta por que a geada vence (2–3 min).
2. Abra o **Osborn** → mostre como o foco vira muitas ideias (5 min).
3. Abra o **SCAMPER** → destaque Eliminar/Reverter e conecte ao "caráter inovador" (5 min).
4. Peça que cada grupo repita o ciclo com a própria dor.

---
*Jornada PIPE FAPESP · Estratégias de Fomento à Inovação · exemplos didáticos*

---

## Caso completo (todas as etapas do GeadaZero)
Além de Radar, Osborn e SCAMPER, o caso segue até a proposta PIPE inteira:

- `vpc_geadazero.json` — Value Proposition Canvas (encaixe cliente × solução)
- `bmc_geadazero.json` — Business Model Canvas (9 blocos)
- `trl_geadazero.json` — TRL 3 + caráter inovador (6 itens)
- `crono_geadazero.json` — cronograma de 9 meses + 4 riscos com mitigação
- `orc_geadazero.json` — orçamento por rubricas (fecha em R$300 mil) + equipe

Tudo também aparece renderizado e com botão "Carregar no widget" em **`exemplos.html`** (raiz do projeto).
