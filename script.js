const planos = {
  essencial: {
    nome: "Essencial",
    valor: 399.90,
    fidelizacao: false,
    descricao: `
      <p><strong>Criação de Conteúdo</strong></p>
      <ul>
        <li>8 posts mensais, sendo imagens ou vídeos.</li>
        <li>Artes profissionais alinhadas à identidade da marca.</li>
      </ul>
      <p><strong>Gestão Completa do Perfil</strong></p>
      <ul>
        <li>Criação dos textos com copy estratégica.</li>
        <li>Padronização visual do perfil.</li>
        <li>Publicação e organização do conteúdo.</li>
      </ul>
      <p><strong>Tráfego Pago</strong></p>
      <ul>
        <li>Criação e gestão de anúncios.</li>
        <li>Estratégias focadas em atrair novos clientes.</li>
      </ul>
      <p><strong>Relatórios de Resultados</strong></p>
      <ul>
        <li>Relatórios simples, claros e objetivos.</li>
        <li>Acompanhamento da evolução do perfil e campanhas.</li>
      </ul>`
  },
  estrategico: {
    nome: "Estratégico",
    valor: 549.90,
    fidelizacao: false,
    descricao: `
      <p><strong>Conteúdo Estratégico Ampliado</strong></p>
      <ul>
        <li>12 posts mensais.</li>
        <li>Conteúdos planejados para alcance, autoridade e conversão.</li>
      </ul>
      <p><strong>Gestão Completa das Redes Sociais</strong></p>
      <ul>
        <li>Criação de textos estratégicos.</li>
        <li>Padronização e otimização do perfil.</li>
        <li>Publicação e organização dos conteúdos.</li>
      </ul>
      <p><strong>Presença no Google ou LinkedIn</strong></p>
      <ul>
        <li>Configuração e otimização do perfil.</li>
        <li>Melhor posicionamento para ser encontrado por novos clientes.</li>
      </ul>
      <p><strong>Tráfego Pago Estratégico</strong></p>
      <ul>
        <li>Direcionamento de campanhas.</li>
        <li>Gestão de anúncios focada em geração de clientes.</li>
      </ul>
      <p><strong>Planejamento Estratégico</strong></p>
      <ul>
        <li>Calendário mensal de conteúdo.</li>
        <li>Definição estratégica das ações e campanhas.</li>
      </ul>
      <p><strong>Análise e Crescimento</strong></p>
      <ul>
        <li>Análise de métricas e desempenho.</li>
        <li>Relatórios claros e objetivos.</li>
        <li>1 reunião estratégica mensal para ajustes e evolução.</li>
      </ul>`
  },
  autoridade: {
    nome: "Autoridade",
    valor: 969.90,
    fidelizacao: false,
    descricao: `
      <p><strong>Conteúdo que posiciona e vende</strong></p>
      <ul>
        <li>Mais de 16 conteúdos por mês, entre imagens e vídeos.</li>
        <li>Foco em autoridade, engajamento e conversão.</li>
        <li>Limite máximo de 25 artes no mês.</li>
        <li>Planejamento, roteiros e ajustes constantes.</li>
      </ul>
      <p><strong>Gestão completa do Instagram</strong></p>
      <ul>
        <li>Gestão do perfil no dia a dia.</li>
        <li>Organização do feed, otimização de bio, destaques e identidade visual.</li>
      </ul>
      <p><strong>Posicionamento de marca</strong></p>
      <ul>
        <li>Estruturação da presença digital com estratégia.</li>
        <li>Construção de autoridade no segmento.</li>
      </ul>
      <p><strong>Site e páginas estratégicas</strong></p>
      <ul>
        <li>Administração do site e suporte em páginas estratégicas voltadas à captação e campanhas.</li>
      </ul>
      <p><strong>Crescimento e escala</strong></p>
      <ul>
        <li>Estratégias para atrair clientes, direcionamento de anúncios e otimizações baseadas em dados.</li>
      </ul>
      <p><strong>Acompanhamento estratégico</strong></p>
      <ul>
        <li>Reuniões, análises e direcionamento contínuo.</li>
      </ul>`
  },
  autoridadeLanding: {
    nome: "Autoridade + Landing Page",
    valor: 1119.99,
    fidelizacao: true,
    descricao: `
      <p><strong>Conteúdo que posiciona e vende</strong></p>
      <ul>
        <li>Mais de 16 conteúdos por mês, entre imagens e vídeos.</li>
        <li>Foco em autoridade, engajamento e conversão.</li>
        <li>Limite máximo de 25 artes por mês.</li>
        <li>Planejamento, roteiros e ajustes constantes.</li>
      </ul>
      <p><strong>Gestão completa do Instagram</strong></p>
      <ul>
        <li>Gestão do perfil no dia a dia, organização do feed, bio, destaques e identidade visual.</li>
      </ul>
      <p><strong>Posicionamento de marca</strong></p>
      <ul>
        <li>Estruturação da presença digital com estratégia e autoridade.</li>
      </ul>
      <p><strong>Landing pages estratégicas</strong></p>
      <ul>
        <li>Criação e administração de landing pages voltadas à captação de leads e campanhas, com foco em conversão.</li>
      </ul>
      <p><strong>Crescimento, escala e acompanhamento</strong></p>
      <ul>
        <li>Estratégias para atrair clientes, anúncios, otimizações, reuniões, análises e direcionamento contínuo.</li>
      </ul>`
  },
  autoridadeSite: {
    nome: "Autoridade + Site",
    valor: 1219.90,
    fidelizacao: true,
    descricao: `
      <p><strong>Conteúdo que posiciona e vende</strong></p>
      <ul>
        <li>Mais de 16 conteúdos por mês, entre imagens e vídeos.</li>
        <li>Foco em autoridade, engajamento e conversão.</li>
        <li>Limite máximo de 25 artes no mês.</li>
        <li>Planejamento, roteiros e ajustes constantes.</li>
      </ul>
      <p><strong>Gestão completa do Instagram</strong></p>
      <ul>
        <li>Gestão do perfil no dia a dia, organização do feed, bio, destaques e identidade visual.</li>
      </ul>
      <p><strong>Posicionamento de marca</strong></p>
      <ul>
        <li>Estruturação da presença digital com estratégia e autoridade.</li>
      </ul>
      <p><strong>Site e páginas estratégicas</strong></p>
      <ul>
        <li>Administração e criação de site e páginas voltadas à captação de leads e campanhas, com foco em conversão.</li>
      </ul>
      <p><strong>Crescimento, escala e acompanhamento</strong></p>
      <ul>
        <li>Estratégias para atrair clientes, anúncios, otimizações, reuniões, análises e direcionamento contínuo.</li>
      </ul>`
  }
};

const $ = (id) => document.getElementById(id);
const storageKeys = { clientes: "axis1_clientes", contratoSeq: "axis1_contrato_seq" };

function moeda(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function dataExtenso(dateStr) {
  if (!dateStr) return "____/____/________";
  const [ano, mes, dia] = dateStr.split("-");
  const data = new Date(Number(ano), Number(mes) - 1, Number(dia));
  return data.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}

function getNumeroAtual() {
  const ano = new Date().getFullYear();
  const seq = Number(localStorage.getItem(storageKeys.contratoSeq) || "1");
  return `AXIS1-${ano}-${String(seq).padStart(4, "0")}`;
}

function atualizarNumero() {
  $("numeroContrato").textContent = getNumeroAtual();
}

function proximoNumero() {
  const seq = Number(localStorage.getItem(storageKeys.contratoSeq) || "1");
  localStorage.setItem(storageKeys.contratoSeq, String(seq + 1));
  atualizarNumero();
  gerarContrato(false);
}

function vencimentoTexto(selectId, inputId) {
  const valor = $(selectId).value;
  if (valor === "personalizado") return $(inputId).value || "data personalizada não informada";
  return `todo dia ${valor}`;
}

function popularPlanos() {
  const select = $("plano");
  select.innerHTML = Object.entries(planos).map(([key, p]) =>
    `<option value="${key}">${p.nome} — ${moeda(p.valor)}</option>`
  ).join("");
}

function popularClientes() {
  const clientes = JSON.parse(localStorage.getItem(storageKeys.clientes) || "[]");
  const select = $("clienteSalvo");
  select.innerHTML = `<option value="">Nenhum cliente selecionado</option>` + clientes.map((c, i) =>
    `<option value="${i}">${c.nomeCliente} — ${c.cpfCnpj || "sem documento"}</option>`
  ).join("");
}

function salvarCliente() {
  const nomeCliente = $("nomeCliente").value.trim();
  if (!nomeCliente) {
    alert("Preencha o nome/razão social antes de salvar o cliente.");
    return;
  }
  const cliente = coletarDadosCliente();
  const clientes = JSON.parse(localStorage.getItem(storageKeys.clientes) || "[]");
  const existente = clientes.findIndex(c => c.cpfCnpj && c.cpfCnpj === cliente.cpfCnpj);
  if (existente >= 0) clientes[existente] = cliente;
  else clientes.push(cliente);
  localStorage.setItem(storageKeys.clientes, JSON.stringify(clientes));
  popularClientes();
  alert("Cliente salvo neste navegador.");
}

function carregarCliente() {
  const index = $("clienteSalvo").value;
  if (index === "") return;
  const clientes = JSON.parse(localStorage.getItem(storageKeys.clientes) || "[]");
  const c = clientes[Number(index)];
  if (!c) return;
  Object.keys(c).forEach(k => { if ($(k)) $(k).value = c[k] || ""; });
  gerarContrato(false);
}

function excluirCliente() {
  const index = $("clienteSalvo").value;
  if (index === "") return alert("Selecione um cliente salvo para excluir.");
  const clientes = JSON.parse(localStorage.getItem(storageKeys.clientes) || "[]");
  clientes.splice(Number(index), 1);
  localStorage.setItem(storageKeys.clientes, JSON.stringify(clientes));
  popularClientes();
  alert("Cliente removido do histórico local.");
}

function coletarDadosCliente() {
  return {
    nomeCliente: $("nomeCliente").value.trim(),
    cpfCnpj: $("cpfCnpj").value.trim(),
    endereco: $("endereco").value.trim(),
    cidadeUf: $("cidadeUf").value.trim(),
    cep: $("cep").value.trim(),
    telefone: $("telefone").value.trim(),
    email: $("email").value.trim()
  };
}

function formaPagamentoHtml(plano) {
  const forma = $("formaPagamento").value;
  if (forma === "cheio") {
    const venc = vencimentoTexto("vencimentoCheio", "vencimentoPersonalizado");
    return `<p>O pagamento mensal será realizado no valor de <strong>${moeda(plano.valor)}</strong>, com vencimento ${venc}, via PIX (Chave CNPJ: 39.385.385/0001-98), salvo acordo diverso entre as partes.</p>`;
  }
  const p1 = Math.round((plano.valor * 0.60) * 100) / 100;
  const p2 = Math.round((plano.valor - p1) * 100) / 100;
  const v1 = vencimentoTexto("vencimentoParcela1", "vencimentoParcela1Personalizado");
  const v2 = vencimentoTexto("vencimentoParcela2", "vencimentoParcela2Personalizado");
  return `<p>O pagamento mensal será dividido em duas parcelas dentro do mesmo mês, via PIX (Chave CNPJ: 39.385.385/0001-98), da seguinte forma:</p>
    <ul>
      <li>1ª parcela: <strong>${moeda(p1)}</strong>, com vencimento ${v1}.</li>
      <li>2ª parcela: <strong>${moeda(p2)}</strong>, com vencimento ${v2}.</li>
    </ul>`;
}

function fidelizacaoHtml(plano) {
  if (!plano.fidelizacao) {
    return `<p>O presente contrato é firmado por prazo indeterminado, sem contrato de fidelização, sem carência e livre de multa por fidelidade.</p>
    <p>Qualquer das partes poderá solicitar o cancelamento mediante aviso prévio por escrito com antecedência mínima de 10 (dez) dias da data do próximo vencimento.</p>`;
  }
  return `<p>O presente contrato possui fidelização mínima de 12 (doze) meses, contados a partir da data de início dos serviços.</p>
  <p>Em caso de cancelamento antecipado pela CONTRATANTE, poderá ser aplicada multa proporcional ao período restante, conforme negociação entre as partes e limites legais aplicáveis.</p>`;
}

function gerarContrato(alertar = true) {
  const d = coletarDadosCliente();
  const plano = planos[$("plano").value];
  const observacoes = $("observacoes").value.trim();
  const inicio = dataExtenso($("dataInicio").value);
  const dataContrato = dataExtenso($("dataContrato").value);
  const cidadeAssinatura = $("cidadeAssinatura").value.trim() || "Araraquara/SP";

  const html = `
    <p class="contract-number"><strong>Contrato nº ${getNumeroAtual()}</strong></p>
    <h1>CONTRATO DE PRESTAÇÃO DE SERVIÇOS DE MARKETING DIGITAL</h1>

    <h2>1. Qualificação das partes</h2>
    <p><strong>CONTRATADA:</strong> AXIS 1 MARKETING ESTRATÉGICO, pessoa jurídica de direito privado, inscrita no CNPJ sob o nº 39.385.385/0001-98, com sede em Araraquara/SP, e-mail: falecom.axis1@gmail.com, telefone/WhatsApp: (16) 99742-4912, doravante denominada simplesmente CONTRATADA.</p>
    <p><strong>CONTRATANTE:</strong> ${d.nomeCliente || "[NOME DO CLIENTE]"}, inscrita no CPF/CNPJ sob o nº ${d.cpfCnpj || "[CPF/CNPJ]"}, com sede/endereço em ${d.endereco || "[ENDEREÇO]"}, ${d.cidadeUf || "[CIDADE/UF]"}, CEP: ${d.cep || "[CEP]"}, telefone/WhatsApp: ${d.telefone || "[TELEFONE]"}, e-mail: ${d.email || "[E-MAIL]"}, doravante denominada simplesmente CONTRATANTE.</p>

    <h2>2. Do objeto</h2>
    <p>O presente contrato tem como objeto a prestação de serviços de marketing digital por parte da CONTRATADA à CONTRATANTE, conforme plano abaixo:</p>
    <p><strong>Plano contratado:</strong> ${plano.nome}</p>
    <p><strong>Data de início dos serviços:</strong> ${inicio}</p>
    ${plano.descricao}

    <h2>3. Das responsabilidades</h2>
    <p><strong>3.1.</strong> A CONTRATADA compromete-se a executar os serviços com zelo, ética e profissionalismo, respeitando a identidade visual, o posicionamento e as informações fornecidas pela CONTRATANTE.</p>
    <p><strong>3.2.</strong> A CONTRATANTE compromete-se a fornecer todas as informações necessárias para execução dos serviços, sendo responsável pela veracidade dos dados, aprovações e direitos de uso de materiais, imagens, marcas, acessos e conteúdos enviados.</p>

    <h2>4. Da propriedade intelectual e portfólio</h2>
    <p>Os materiais finais entregues e devidamente quitados serão de propriedade da CONTRATANTE. A CONTRATADA poderá utilizar os materiais produzidos em seu portfólio e canais de divulgação, salvo oposição expressa da CONTRATANTE.</p>

    <h2>5. Da confidencialidade</h2>
    <p>As partes comprometem-se a manter sigilo sobre dados, estratégias, acessos, senhas, informações comerciais e quaisquer materiais compartilhados durante a execução deste contrato. A obrigação de confidencialidade permanecerá vigente por 2 (dois) anos após o encerramento da prestação dos serviços.</p>

    <h2>6. Do valor e forma de pagamento</h2>
    <p>Pela prestação dos serviços, a CONTRATANTE pagará à CONTRATADA o valor mensal de <strong>${moeda(plano.valor)}</strong>.</p>
    ${formaPagamentoHtml(plano)}
    <p>Custos de mídia, impulsionamentos, taxas, impostos, plataformas, domínios, hospedagens, ferramentas externas e demais despesas de terceiros não estão inclusos no valor mensal, salvo quando expressamente descrito em observações contratuais.</p>

    <h2>7. Do prazo e cancelamento</h2>
    ${fidelizacaoHtml(plano)}

    ${observacoes ? `<h2>8. Observações adicionais</h2><p class="obs">${observacoes.replace(/\n/g, "<br>")}</p>` : ""}

    <h2>${observacoes ? "9" : "8"}. Do foro</h2>
    <p>As partes elegem o foro da Comarca de Araraquara/SP para dirimir quaisquer controvérsias oriundas deste contrato, com renúncia expressa a qualquer outro, por mais privilegiado que seja.</p>

    <p style="margin-top: 34px;">${cidadeAssinatura}, ${dataContrato}</p>

    <div class="assinaturas">
      <div class="linha">AXIS 1 MARKETING ESTRATÉGICO</div>
      <div class="linha">${d.nomeCliente || "CONTRATANTE"}${d.cpfCnpj ? `<br>CNPJ/CPF: ${d.cpfCnpj}` : ""}</div>
    </div>
  `;
  $("contratoPreview").innerHTML = html;
  if (alertar) alert("Contrato gerado. Revise a prévia antes de salvar em PDF.");
}

function salvarPdf() {
  gerarContrato(false);
  window.print();
}

function abrirWhatsapp() {
  const tel = $("telefone").value.replace(/\D/g, "");
  const nome = $("nomeCliente").value.trim() || "cliente";
  const msg = encodeURIComponent(`Olá, ${nome}! Segue o contrato de prestação de serviços da AXIS 1 conforme combinado. Qualquer dúvida, estou à disposição.`);
  const numero = tel ? `55${tel}` : "";
  window.open(`https://wa.me/${numero}?text=${msg}`, "_blank");
}

function limparCampos() {
  if (!confirm("Deseja limpar os campos da tela?")) return;
  document.querySelectorAll("input, textarea").forEach(el => {
    if (el.id === "cidadeAssinatura") el.value = "Araraquara/SP";
    else el.value = "";
  });
  $("formaPagamento").value = "cheio";
  $("vencimentoCheio").value = "20";
  $("plano").value = "essencial";
  alternarPagamento();
  gerarContrato(false);
}

function alternarPagamento() {
  const parcelado = $("formaPagamento").value === "parcelado";
  $("parcelasBox").classList.toggle("hidden", !parcelado);
  $("vencimentoCheio").parentElement.classList.toggle("hidden", parcelado);
  $("vencimentoPersonalizadoBox").classList.toggle("hidden", parcelado || $("vencimentoCheio").value !== "personalizado");
}

function alternarPersonalizados() {
  $("vencimentoPersonalizadoBox").classList.toggle("hidden", $("formaPagamento").value !== "cheio" || $("vencimentoCheio").value !== "personalizado");
  $("vencimentoParcela1Personalizado").classList.toggle("hidden", $("vencimentoParcela1").value !== "personalizado");
  $("vencimentoParcela2Personalizado").classList.toggle("hidden", $("vencimentoParcela2").value !== "personalizado");
}

function inicializarDatas() {
  const hoje = new Date();
  const iso = new Date(hoje.getTime() - hoje.getTimezoneOffset() * 60000).toISOString().slice(0,10);
  $("dataContrato").value = iso;
  $("dataInicio").value = iso;
}

function iniciar() {
  popularPlanos();
  popularClientes();
  inicializarDatas();
  atualizarNumero();
  alternarPagamento();
  gerarContrato(false);

  ["plano", "formaPagamento", "vencimentoCheio", "vencimentoParcela1", "vencimentoParcela2"].forEach(id => {
    $(id).addEventListener("change", () => { alternarPagamento(); alternarPersonalizados(); gerarContrato(false); });
  });
  document.querySelectorAll("input, textarea, select").forEach(el => el.addEventListener("input", () => gerarContrato(false)));

  $("gerarContrato").addEventListener("click", () => gerarContrato(true));
  $("salvarPdf").addEventListener("click", salvarPdf);
  $("whatsapp").addEventListener("click", abrirWhatsapp);
  $("limpar").addEventListener("click", limparCampos);
  $("salvarCliente").addEventListener("click", salvarCliente);
  $("carregarCliente").addEventListener("click", carregarCliente);
  $("excluirCliente").addEventListener("click", excluirCliente);
  $("novoNumero").addEventListener("click", proximoNumero);
}

document.addEventListener("DOMContentLoaded", iniciar);
