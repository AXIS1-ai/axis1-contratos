# AXIS 1 — Gerador de Contratos

Projeto estático em HTML, CSS e JavaScript para gerar contratos de prestação de serviços de marketing digital.

## Planos incluídos

- Plano Essencial — R$ 349,90
- Plano Estratégico — R$ 549,90
- Plano Autoridade — valor editável no formulário

O Plano Autoridade deixa expresso que landing pages e sites incluem somente gestão, acompanhamento e otimizações na estrutura existente. Criação, desenvolvimento, redesign e alterações estruturais são cobrados separadamente.

## Como executar

1. Extraia o arquivo ZIP.
2. Abra `index.html` no navegador.
3. Preencha os dados.
4. Clique em **Atualizar contrato**.
5. Clique em **Salvar em PDF** e selecione “Salvar como PDF” na janela de impressão.

## Como publicar no GitHub Pages

1. Crie um repositório.
2. Envie `index.html`, `styles.css` e `app.js`.
3. Acesse **Settings > Pages**.
4. Em **Source**, selecione a branch principal e a pasta raiz.
5. Salve.

## Personalização

Os planos e valores ficam no início do arquivo `app.js`, no objeto `plans`.

Para definir um valor padrão para o Plano Autoridade, altere:

```js
autoridade: {
  name: "Plano Autoridade",
  value: 0,
```

Exemplo para R$ 899,90:

```js
value: 899.90,
```

## Observação jurídica

O sistema gera uma minuta contratual operacional. Recomenda-se revisão por advogado antes do uso definitivo, especialmente nas cláusulas de multa, juros, propriedade intelectual, responsabilidade e foro.
