use("AidTrackDB");

db.Donations.deleteMany({});

const user_admin_01 = ObjectId("669000000000000000000001");
const user_donor_01 = ObjectId("669000000000000000000005");
const user_donor_02 = ObjectId("669000000000000000000006");
const user_donor_03 = ObjectId("669000000000000000000007");
const user_donor_04 = ObjectId("669000000000000000000008");

const camp_01 = ObjectId("669200000000000000000001");
const camp_02 = ObjectId("669200000000000000000002");
const camp_03 = ObjectId("669200000000000000000003");
const camp_04 = ObjectId("669200000000000000000004");
const camp_05 = ObjectId("669200000000000000000005");

const don_01 = ObjectId("669300000000000000000001");
const don_02 = ObjectId("669300000000000000000002");
const don_03 = ObjectId("669300000000000000000003");
const don_04 = ObjectId("669300000000000000000004");
const don_05 = ObjectId("669300000000000000000005");
const don_06 = ObjectId("669300000000000000000006");
const don_07 = ObjectId("669300000000000000000007");
const don_08 = ObjectId("669300000000000000000008");
const don_09 = ObjectId("669300000000000000000009");
const don_10 = ObjectId("669300000000000000000010");

db.Donations.insertMany([
  {
    _id: don_01,
    donation_type: "Monetaria",
    amount: 350.00,
    donation_date: new Date("2026-05-05"),
    status: "Recibida",
    campaign: {
      campaign_id: camp_02,
      title: "Alimentos para Familias"
    },
    donor: {
      user_id: user_donor_01,
      full_name: "Ana Vargas"
    },
    tracking: [
      {
        tracking_status: "Registrada",
        location: "Lima - Miraflores",
        updated_at: new Date("2026-05-05")
      },
      {
        tracking_status: "Validada",
        location: "Centro administrativo",
        updated_at: new Date("2026-05-06")
      }
    ]
  },
  {
    _id: don_02,
    donation_type: "Especie",
    quantity: 25,
    donation_date: new Date("2026-05-08"),
    status: "En clasificación",
    campaign: {
      campaign_id: camp_01,
      title: "Abrigo para el Sur"
    },
    donor: {
      user_id: user_donor_02,
      full_name: "Jorge Lopez"
    },
    tracking: [
      {
        tracking_status: "Registrada",
        location: "Lima - San Isidro",
        updated_at: new Date("2026-05-08")
      },
      {
        tracking_status: "Clasificada",
        location: "Almacén central",
        updated_at: new Date("2026-05-10")
      }
    ]
  },
  {
    _id: don_03,
    donation_type: "Monetaria",
    amount: 1200.00,
    donation_date: new Date("2026-06-02"),
    status: "Asignada",
    campaign: {
      campaign_id: camp_04,
      title: "Emergencia por Lluvias"
    },
    donor: {
      user_id: user_admin_01,
      full_name: "Carlos Ramirez"
    },
    tracking: [
      {
        tracking_status: "Registrada",
        location: "Lima - Miraflores",
        updated_at: new Date("2026-06-02")
      },
      {
        tracking_status: "Asignada a entrega",
        location: "Centro logístico",
        updated_at: new Date("2026-06-04")
      }
    ]
  },
  {
    _id: don_04,
    donation_type: "Especie",
    quantity: 60,
    donation_date: new Date("2026-06-06"),
    status: "En traslado",
    campaign: {
      campaign_id: camp_02,
      title: "Alimentos para Familias"
    },
    donor: {
      user_id: user_donor_01,
      full_name: "Ana Vargas"
    },
    tracking: [
      {
        tracking_status: "Registrada",
        location: "Lima",
        updated_at: new Date("2026-06-06")
      },
      {
        tracking_status: "En ruta",
        location: "Lima Norte",
        updated_at: new Date("2026-06-08")
      }
    ]
  },
  {
    _id: don_05,
    donation_type: "Monetaria",
    amount: 500.00,
    donation_date: new Date("2026-03-01"),
    status: "Entregada",
    campaign: {
      campaign_id: camp_03,
      title: "Útiles para Todos"
    },
    donor: {
      user_id: user_donor_02,
      full_name: "Jorge Lopez"
    },
    tracking: [
      {
        tracking_status: "Registrada",
        location: "Lima",
        updated_at: new Date("2026-03-01")
      },
      {
        tracking_status: "Entregada",
        location: "San Juan de Lurigancho",
        updated_at: new Date("2026-03-15")
      }
    ]
  },
  {
    _id: don_06,
    donation_type: "Especie",
    quantity: 40,
    donation_date: new Date("2026-06-10"),
    status: "Pendiente",
    campaign: {
      campaign_id: camp_01,
      title: "Abrigo para el Sur"
    },
    donor: {
      user_id: user_donor_03,
      full_name: "Mariana Rojas"
    },
    tracking: [
      {
        tracking_status: "Registrada",
        location: "Cusco",
        updated_at: new Date("2026-06-10")
      }
    ]
  },
  {
    _id: don_07,
    donation_type: "Monetaria",
    amount: 750.00,
    donation_date: new Date("2026-04-18"),
    status: "Recibida",
    campaign: {
      campaign_id: camp_05,
      title: "Salud Comunitaria"
    },
    donor: {
      user_id: user_donor_04,
      full_name: "Diego Castro"
    },
    tracking: [
      {
        tracking_status: "Registrada",
        location: "Lima - San Borja",
        updated_at: new Date("2026-04-18")
      },
      {
        tracking_status: "Validada",
        location: "Centro administrativo",
        updated_at: new Date("2026-04-19")
      }
    ]
  },
  {
    _id: don_08,
    donation_type: "Especie",
    quantity: 15,
    donation_date: new Date("2026-04-22"),
    status: "Clasificada",
    campaign: {
      campaign_id: camp_05,
      title: "Salud Comunitaria"
    },
    donor: {
      user_id: user_donor_01,
      full_name: "Ana Vargas"
    },
    tracking: [
      {
        tracking_status: "Registrada",
        location: "Lima - Surco",
        updated_at: new Date("2026-04-22")
      },
      {
        tracking_status: "Clasificada",
        location: "Almacén médico",
        updated_at: new Date("2026-04-24")
      }
    ]
  },
  {
    _id: don_09,
    donation_type: "Monetaria",
    amount: 2000.00,
    donation_date: new Date("2026-06-12"),
    status: "Asignada",
    campaign: {
      campaign_id: camp_04,
      title: "Emergencia por Lluvias"
    },
    donor: {
      user_id: user_donor_02,
      full_name: "Jorge Lopez"
    },
    tracking: [
      {
        tracking_status: "Registrada",
        location: "Trujillo",
        updated_at: new Date("2026-06-12")
      },
      {
        tracking_status: "Asignada a entrega",
        location: "Centro logístico norte",
        updated_at: new Date("2026-06-13")
      }
    ]
  },
  {
    _id: don_10,
    donation_type: "Especie",
    quantity: 100,
    donation_date: new Date("2026-06-14"),
    status: "En traslado",
    campaign: {
      campaign_id: camp_02,
      title: "Alimentos para Familias"
    },
    donor: {
      user_id: user_donor_04,
      full_name: "Diego Castro"
    },
    tracking: [
      {
        tracking_status: "Registrada",
        location: "Lima - Ate",
        updated_at: new Date("2026-06-14")
      },
      {
        tracking_status: "En ruta",
        location: "Centro de distribución Lima Este",
        updated_at: new Date("2026-06-15")
      }
    ]
  }
]);

db.Donations.find();
