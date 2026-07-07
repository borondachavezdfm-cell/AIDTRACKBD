use("AidTrackDB");

db.Impact_reports.deleteMany({});

const camp_01 = ObjectId("669200000000000000000001");
const camp_02 = ObjectId("669200000000000000000002");
const camp_03 = ObjectId("669200000000000000000003");
const camp_04 = ObjectId("669200000000000000000004");
const camp_05 = ObjectId("669200000000000000000005");

db.Impact_reports.insertMany([
  {
    generated_date: new Date("2026-06-30"),
    campaign: {
      campaign_id: camp_01,
      title: "Abrigo para el Sur"
    },
    summary: {
      total_donations: 2,
      total_beneficiaries: 2,
      total_amount_raised: 0.00,
      total_items_donated: 65
    },
    observations: "La campaña registra donaciones en especie orientadas a comunidades vulnerables del sur."
  },
  {
    generated_date: new Date("2026-06-30"),
    campaign: {
      campaign_id: camp_02,
      title: "Alimentos para Familias"
    },
    summary: {
      total_donations: 3,
      total_beneficiaries: 2,
      total_amount_raised: 350.00,
      total_items_donated: 160
    },
    observations: "La campaña presenta avances en recolección monetaria y alimentos."
  },
  {
    generated_date: new Date("2026-04-30"),
    campaign: {
      campaign_id: camp_03,
      title: "Útiles para Todos"
    },
    summary: {
      total_donations: 1,
      total_beneficiaries: 1,
      total_amount_raised: 500.00,
      total_items_donated: 0
    },
    observations: "Campaña finalizada con entrega confirmada a centro educativo."
  },
  {
    generated_date: new Date("2026-06-30"),
    campaign: {
      campaign_id: camp_04,
      title: "Emergencia por Lluvias"
    },
    summary: {
      total_donations: 2,
      total_beneficiaries: 2,
      total_amount_raised: 3200.00,
      total_items_donated: 0
    },
    observations: "Campaña activa con ayuda asignada a familias afectadas por lluvias."
  },
  {
    generated_date: new Date("2026-06-20"),
    campaign: {
      campaign_id: camp_05,
      title: "Salud Comunitaria"
    },
    summary: {
      total_donations: 2,
      total_beneficiaries: 1,
      total_amount_raised: 750.00,
      total_items_donated: 15
    },
    observations: "La campaña logró recolectar insumos médicos y aportes económicos para atención primaria."
  }
]);

db.Impact_reports.find();
