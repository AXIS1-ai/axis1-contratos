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
    ]
  },
  estrategico: {
    name: "Plano Estratégico",
    value: 549.90,
    groups: [
      {
        title: "Conteúdo estratégico ampliado",
        items: [
          "Conteúdos planejados para atração, autoridade, posicionamento e conversão."
        ]
      },
      {
        title: "Gestão dos canais contratados",
        items: [
          "Criação de textos e copies estratégicas.",
          "Padronização e otimização dos canais selecionados.",
          "Publicação, organização e acompanhamento dos conteúdos."
        ]
      },
      {
        title: "Planejamento e acompanhamento",
        items: [
          "Planejamento estratégico e calendário mensal de conteúdo.",
          "Definição de ações orgânicas e análise estratégica dos conteúdos.",
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
          "Gestão de tráfego pago na Meta Ads, quando contratada.",
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
          "Reuniões estratégicas mensais e acompanhamento contínuo."
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

const channelLabels = {
  meta: "Meta — Facebook e Instagram",
  google: "Google — Google Meu Negócio",
  tiktok: "TikTok",
  linkedin: "LinkedIn"
};

function selectedChannels() {
  return [...document.querySelectorAll('input[name="channels"]:checked')].map(input => input.value);
}

function creativeCount(channels) {
  if (!channels.includes("meta")) return null;
  return channels.some(channel => channel !== "meta") ? 12 : 16;
}

function renderStrategicScope() {
  const scope = $("planScope");
  scope.replaceChildren();
  const channels = selectedChannels();
  const count = creativeCount(channels);
  const groups = [
    {
      title: "Conteúdo estratégico ampliado",
      items: [
        ...(count ? [`${count} criativos mensais.`] : []),
        "Conteúdos planejados para atração, autoridade, posicionamento e conversão."
      ]
    },
    {
      title: "Gestão dos canais contratados",
      items: [
        ...channels.map(channel => channelLabels[channel]),
        "Criação de textos e copies estratégicas.",
        "Padronização, otimização, publicação e organização dos conteúdos nos canais selecionados."
      ]
    },
    {
      title: "Planejamento e acompanhamento",
      items: [
        "Planejamento estratégico e calendário mensal de conteúdo.",
        "Definição de ações orgânicas e análise estratégica dos conteúdos.",
        "1 reunião estratégica mensal."
      ]
    }
  ];

  if (channels.includes("google")) {
    groups[1].items.push("Gestão e otimização do Perfil da Empresa no Google (Google Meu Negócio).");
  }
  if (document.querySelector('input[name="metaAds"]:checked')?.value === "yes") {
    groups.push({
      title: "Tráfego pago na Meta Ads",
      items: [
        "Direcionamento e gestão de campanhas de tráfego pago na Meta Ads. A verba de mídia não está inclusa no valor mensal.",
        "Serão disponibilizados relatórios de desempenho referentes às campanhas de tráfego pago veiculadas na Meta Ads."
      ]
    });
  }
  groups.forEach(group => {
    const title = document.createElement("h3");
    title.textContent = group.title;
    const list = document.createElement("ul");
    group.items.forEach(item => {
      const listItem = document.createElement("li");
      listItem.textContent = item.trim();
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

  if ($("plan").value === "estrategico") renderStrategicScope();
  else renderPlanScope($("plan").value);
  updateCreativeIndicator();
  saveForm();
}

function updateCreativeIndicator() {
  const count = creativeCount(selectedChannels());
  $("creativeQuantity").textContent = count
    ? `Quantidade de criativos: ${count}/mês`
    : "Quantidade de criativos: selecione Meta para calcular";
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
    .forEach(input => {
      data[input.id] = input.type === "checkbox" || input.type === "radio"
        ? input.checked
        : input.value;
    });
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
    if (!$(id)) return;
    if ($(id).type === "checkbox" || $(id).type === "radio") $(id).checked = value === true;
    else $(id).value = value;
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

document.querySelectorAll('input[name="channels"], input[name="metaAds"]')
  .forEach(input => input.addEventListener("change", updateContract));

loadForm();
setDefaultDates();

if (!$("contractNumber").value) $("contractNumber").value = generateContractNumber();
setPlan($("plan").value, !$("monthlyValue").value);
