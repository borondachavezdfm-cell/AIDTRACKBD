use("AidTrackDB");

db.Campaigns.deleteMany({});

const org_01 = ObjectId("669100000000000000000001");
const org_02 = ObjectId("669100000000000000000002");
const org_03 = ObjectId("669100000000000000000003");
const org_04 = ObjectId("669100000000000000000004");

const camp_01 = ObjectId("669200000000000000000001");
const camp_02 = ObjectId("669200000000000000000002");
const camp_03 = ObjectId("669200000000000000000003");
const camp_04 = ObjectId("669200000000000000000004");
const camp_05 = ObjectId("669200000000000000000005");

db.Campaigns.insertMany([
  {
    _id: camp_01,
    title: "Abrigo para el Sur",
    description: "Campaña de recolección de frazadas, casacas y ropa de invierno para comunidades altoandinas.",
    start_date: new Date("2026-05-01"),
    end_date: new Date("2026-06-30"),
    funding_goal: 15000.00,
    category: {
      category_name: "Ropa y abrigo",
      description: "Donaciones de prendas, frazadas y artículos de protección contra el frío."
    },
    status: "Activa",
    organization: {
      organization_id: org_03,
      name: "Solidaridad Andina"
    }
  },
  {
    _id: camp_02,
    title: "Alimentos para Familias",
    description: "Campaña de apoyo alimentario para familias en situación de vulnerabilidad.",
    start_date: new Date("2026-04-10"),
    end_date: new Date("2026-07-10"),
    funding_goal: 20000.00,
    category: {
      category_name: "Alimentos",
      description: "Productos de primera necesidad, víveres y alimentos no perecibles."
    },
    status: "Activa",
    organization: {
      organization_id: org_01,
      name: "Ayuda Perú Solidario"
    }
  },
  {
    _id: camp_03,
    title: "Útiles para Todos",
    description: "Campaña de recolección de útiles escolares para estudiantes de bajos recursos.",
    start_date: new Date("2026-02-15"),
    end_date: new Date("2026-04-30"),
    funding_goal: 8000.00,
    category: {
      category_name: "Educación",
      description: "Materiales educativos, mochilas, cuadernos y útiles escolares."
    },
    status: "Finalizada",
    organization: {
      organization_id: org_02,
      name: "Manos Unidas Lima"
    }
  },
  {
    _id: camp_04,
    title: "Emergencia por Lluvias",
    description: "Campaña de ayuda inmediata para familias afectadas por lluvias intensas e inundaciones.",
    start_date: new Date("2026-06-01"),
    end_date: new Date("2026-08-15"),
    funding_goal: 30000.00,
    category: {
      category_name: "Emergencia",
      description: "Apoyo urgente mediante alimentos, agua, ropa, medicinas y ayuda monetaria."
    },
    status: "Activa",
    organization: {
      organization_id: org_04,
      name: "Puentes de Esperanza"
    }
  },
  {
    _id: camp_05,
    title: "Salud Comunitaria",
    description: "Campaña para recolectar insumos básicos de salud y apoyo monetario para campañas médicas.",
    start_date: new Date("2026-03-20"),
    end_date: new Date("2026-06-20"),
    funding_goal: 12000.00,
    category: {
      category_name: "Salud",
      description: "Medicamentos básicos, botiquines, insumos médicos y apoyo para atención primaria."
    },
    status: "Activa",
    organization: {
      organization_id: org_01,
      name: "Ayuda Perú Solidario"
    }
  }
]);

db.Campaigns.find();
