use("AidTrackDB");

db.Organizations.deleteMany({});

const user_admin_01 = ObjectId("669000000000000000000001");
const user_coord_01 = ObjectId("669000000000000000000002");
const user_vol_01 = ObjectId("669000000000000000000003");
const user_vol_02 = ObjectId("669000000000000000000004");
const user_donor_04 = ObjectId("669000000000000000000008");
const user_coord_02 = ObjectId("669000000000000000000009");

const org_01 = ObjectId("669100000000000000000001");
const org_02 = ObjectId("669100000000000000000002");
const org_03 = ObjectId("669100000000000000000003");
const org_04 = ObjectId("669100000000000000000004");

db.Organizations.insertMany([
  {
    _id: org_01,
    name: "Ayuda Perú Solidario",
    description: "Organización dedicada a gestionar donaciones para familias vulnerables en Lima y provincias.",
    email: "contacto@ayudaperusolidario.pe",
    phone: "912345678",
    creation_date: new Date("2025-08-15"),
    location: {
      region: "Lima",
      province: "Lima",
      district: "Miraflores",
      address: "Av. Benavides 1200",
      reference: "Cerca al parque central"
    },
    members: [
      {
        user_id: user_admin_01,
        user_name: "Carlos Ramirez",
        position: "Administrador general",
        join_date: new Date("2025-08-15")
      },
      {
        user_id: user_coord_01,
        user_name: "Lucia Fernandez",
        position: "Coordinadora de logística",
        join_date: new Date("2025-09-01")
      }
    ]
  },
  {
    _id: org_02,
    name: "Manos Unidas Lima",
    description: "Red comunitaria orientada a la recolección y distribución de alimentos, ropa y útiles escolares.",
    email: "info@manosunidaslima.pe",
    phone: "923456789",
    creation_date: new Date("2025-10-20"),
    location: {
      region: "Lima",
      province: "Lima",
      district: "San Juan de Lurigancho",
      address: "Jr. Los Pinos 450",
      reference: "Frente al mercado principal"
    },
    members: [
      {
        user_id: user_donor_04,
        user_name: "Diego Castro",
        position: "Coordinador de campañas",
        join_date: new Date("2025-11-02")
      },
      {
        user_id: user_vol_01,
        user_name: "Miguel Torres",
        position: "Voluntario líder",
        join_date: new Date("2026-02-05")
      }
    ]
  },
  {
    _id: org_03,
    name: "Solidaridad Andina",
    description: "Organización enfocada en campañas de abrigo, alimentos y apoyo a comunidades altoandinas.",
    email: "contacto@solidaridadandina.pe",
    phone: "934567890",
    creation_date: new Date("2026-01-05"),
    location: {
      region: "Cusco",
      province: "Cusco",
      district: "Santiago",
      address: "Av. Cultura 880",
      reference: "A dos cuadras del terminal terrestre"
    },
    members: [
      {
        user_id: user_vol_02,
        user_name: "Patricia Salazar",
        position: "Responsable de beneficiarios",
        join_date: new Date("2026-03-12")
      },
      {
        user_id: user_coord_02,
        user_name: "Sofia Mejia",
        position: "Coordinadora regional",
        join_date: new Date("2026-03-20")
      }
    ]
  },
  {
    _id: org_04,
    name: "Puentes de Esperanza",
    description: "Entidad social dedicada a canalizar donaciones monetarias y en especie para emergencias locales.",
    email: "contacto@puentesesperanza.pe",
    phone: "945678901",
    creation_date: new Date("2026-02-18"),
    location: {
      region: "La Libertad",
      province: "Trujillo",
      district: "Víctor Larco Herrera",
      address: "Av. Larco 560",
      reference: "Cerca a la municipalidad distrital"
    },
    members: [
      {
        user_id: user_admin_01,
        user_name: "Carlos Ramirez",
        position: "Asesor administrativo",
        join_date: new Date("2026-02-20")
      },
      {
        user_id: user_coord_01,
        user_name: "Lucia Fernandez",
        position: "Supervisora de operaciones",
        join_date: new Date("2026-03-01")
      }
    ]
  }
]);

db.Organizations.find();
