const plans = {
  essencial: {
    name: "Plano Essencial",
    value: 349.90,
    groups: [
      {
        title: "Conteúdo com padrão profissional",
        items: [
          "8 conteúdos mensais.",
          "Artes alinhadas à identidade da marca.",
          "Conteúdo para consistência, presença e organização digital."
        ]
      },
      {
        title: "Gestão essencial do perfil",
        items: [
          "Copy estratégica.",
          "Publicação e organização dos conteúdos.",
          "Padronização visual do perfil."
        ]
      },
      {
        title: "Ajuste de perfil",
        items: [
          "Bio otimizada.",
          "Direcionamento estratégico para WhatsApp."
        ]
      },
      {
        title: "Acompanhamento básico",
        items: [
          "Relatório simples e objetivo."
        ]
      }
    ]
  },
  estrategico: {
    name: "Plano Estratégico",
    value: 549.90,
    groups: [
      {
        title: "Conteúdo estratégico ampliado",
        items: [
          "12 conteúdos mensais, incluindo até 4 vídeos.",
          "Conteúdos planejados para atração, autoridade, posicionamento e conversão."
        ]
      },
      {
        title: "Gestão completa das redes sociais",
        items: [
          "Criação de textos e copies estratégicas.",
          "Padronização e otimização do perfil.",
          "Publicação, organização e acompanhamento dos conteúdos."
        ]
      },
      {
        title: "Presença no Google ou LinkedIn",
        items: [
          "Configuração e otimização do perfil.",
          "Estratégias para melhor posicionamento e descoberta por novos clientes."
        ]
      },
      {
        title: "Tráfego pago estratégico",
        items: [
          "Direcionamento e gestão de campanhas no Google Ads e Meta Ads.",
          "Gestão de anúncios com foco em geração de oportunidades e clientes.",
          "A verba de mídia não está inclusa no valor mensal."
        ]
      },
      {
        title: "Planejamento, análise e crescimento",
        items: [
          "Planejamento estratégico e calendário mensal de conteúdo.",
          "Definição de ações e campanhas.",
          "Análise de métricas e desempenho.",
          "Relatórios claros e objetivos.",
          "1 reunião estratégica mensal."
        ]
      }
    ]
  },
  autoridade: {
    name: "Plano Autoridade",
    value: 0,
    groups: [
      {
        title: "Conteúdo de autoridade",
        items: [
          "Até 25 conteúdos mensais, entre artes e vídeos.",
          "Conteúdos com foco em autoridade, engajamento, posicionamento e conversão.",
          "Roteiros estratégicos para vídeos e Reels."
        ]
      },
      {
        title: "Gestão completa e posicionamento",
        items: [
          "Gestão completa do Instagram.",
          "Posicionamento estratégico da marca.",
          "Organização do perfil, incluindo bio, destaques e feed.",
          "Planejamento estratégico e calendário de conteúdo."
        ]
      },
      {
        title: "Aquisição e presença digital",
        items: [
          "Gestão de tráfego pago no Google Ads e Meta Ads.",
          "Gestão e otimização do Google Meu Negócio.",
          "A verba de mídia não está inclusa no valor mensal."
        ]
      },
      {
        title: "Gestão de landing pages e sites",
        items: [
          "Gestão, acompanhamento e otimizações dentro da estrutura existente.",
          "A criação, o desenvolvimento, o redesign ou alterações estruturais de landing pages e sites não estão inclusos e deverão ser contratados separadamente."
        ]
      },
      {
        title: "Materiais e acompanhamento",
        items: [
          "Criação de materiais digitais e peças para impressão, como cartão, flyer, outdoor e cardápio, dentro do planejamento contratado.",
          "Impressão, produção gráfica e custos de fornecedores não estão inclusos.",
          "Relatórios completos, reuniões estratégicas mensais e acompanhamento contínuo."
        ]
      }
    ]
  }
};

const $ = (id) => document.getElementById(id);

const fields = [
  "clientName", "clientDocument", "clientAddress", "clientPhone", "clientEmail",
  "revisionLimit", "approvalHours", "silenceDays", "cancelNoticeDays",
  "lateFee", "monthlyInterest", "dueDay"
];

function getStoredItem(key, fallback = "") {
  try {
    return localStorage.getItem(key) ?? fallback;
  } catch {
    return fallback;
  }
}

function setStoredItem(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // O contrato continua funcionando mesmo se o navegador bloquear localStorage.
  }
}

function removeStoredItem(key) {
  try {
    localStorage.removeItem(key);
  } catch {
    // Sem ação necessária.
  }
}

function formatCurrency(value) {
  const number = Number(String(value).replace(/[^\d,.-]/g, "").replace(",", ".")) || 0;
  return number.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function parseCurrency(value) {
  return Number(String(value).replace(/[^\d,.-]/g, "").replace(",", ".")) || 0;
}

function formatDate(dateString) {
  if (!dateString) return "___/___/______";
  const date = new Date(`${dateString}T12:00:00`);
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });
}

function generateContractNumber() {
  const now = new Date();
  const year = now.getFullYear();
  const saved = Number(getStoredItem("axis1ContractSequence", "0")) + 1;
  setStoredItem("axis1ContractSequence", String(saved));
  return `AXIS1-${year}-${String(saved).padStart(4, "0")}`;
}

function renderPlanScope(planKey) {
  const plan = plans[planKey];
  const scope = $("planScope");
  scope.replaceChildren();

  plan.groups.forEach(group => {
    const title = document.createElement("h3");
    title.textContent = group.title;

    const list = document.createElement("ul");
    group.items.forEach(item => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      list.appendChild(listItem);
    });

    scope.append(title, list);
  });
}

function updateTextViews(key, value) {
  document.querySelectorAll(`[data-view="${key}"]`).forEach(element => {
    element.textContent = value || "________________";
  });
}

function updateContract() {
  const selectedPlan = plans[$("plan").value];
  if (!selectedPlan) return;

  fields.forEach(field => {
    updateTextViews(field, $(field).value.trim());
  });

  updateTextViews("planName", selectedPlan.name);
  updateTextViews("monthlyValue", formatCurrency($("monthlyValue").value));
  updateTextViews("startDate", formatDate($("startDate").value));
  updateTextViews("contractDate", formatDate($("contractDate").value));

  $("viewContractNumber").textContent = `Contrato nº ${$("contractNumber").value}`;
  $("viewAdditionalNotes").textContent =
    $("additionalNotes").value.trim() || "Não há observações adicionais.";

  renderPlanScope($("plan").value);
  saveForm();
}

function setPlan(planKey, forceValue = true) {
  const plan = plans[planKey];
  if (forceValue) {
    $("monthlyValue").value = plan.value
      ? plan.value.toLocaleString("pt-BR", { minimumFractionDigits: 2 })
      : "";
  }
  updateContract();
}

function saveForm() {
  const data = {};
  document.querySelectorAll("#contractForm input, #contractForm select, #contractForm textarea")
    .forEach(input => data[input.id] = input.value);
  setStoredItem("axis1ContractDraft", JSON.stringify(data));
}

function loadForm() {
  let saved = {};
  try {
    saved = JSON.parse(getStoredItem("axis1ContractDraft", "{}"));
  } catch {
    saved = {};
  }

  Object.entries(saved).forEach(([id, value]) => {
    if ($(id)) $(id).value = value;
  });
}

function setDefaultDates() {
  const today = new Date();
  const isoToday = today.toISOString().split("T")[0];
  if (!$("contractDate").value) $("contractDate").value = isoToday;
  if (!$("startDate").value) $("startDate").value = isoToday;
}

function resetForm() {
  removeStoredItem("axis1ContractDraft");
  $("contractForm").reset();
  $("contractNumber").value = generateContractNumber();
  setDefaultDates();
  $("plan").value = "essencial";
  setPlan("essencial");
}

$("plan").addEventListener("change", event => setPlan(event.target.value, true));
$("generateBtn").addEventListener("click", updateContract);
$("printBtn").addEventListener("click", () => {
  updateContract();
  window.print();
});
$("resetBtn").addEventListener("click", resetForm);

$("monthlyValue").addEventListener("blur", event => {
  event.target.value = parseCurrency(event.target.value)
    .toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  updateContract();
});

document.querySelectorAll("#contractForm input, #contractForm select, #contractForm textarea")
  .forEach(input => input.addEventListener("input", updateContract));

loadForm();
setDefaultDates();

if (!$("contractNumber").value) $("contractNumber").value = generateContractNumber();
setPlan($("plan").value, !$("monthlyValue").value);
