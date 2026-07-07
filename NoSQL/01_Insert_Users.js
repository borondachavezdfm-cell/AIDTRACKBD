use("AidTrackDB");

db.Users.deleteMany({});

const user_admin_01 = ObjectId("669000000000000000000001");
const user_coord_01 = ObjectId("669000000000000000000002");
const user_vol_01 = ObjectId("669000000000000000000003");
const user_vol_02 = ObjectId("669000000000000000000004");
const user_donor_01 = ObjectId("669000000000000000000005");
const user_donor_02 = ObjectId("669000000000000000000006");
const user_donor_03 = ObjectId("669000000000000000000007");
const user_donor_04 = ObjectId("669000000000000000000008");
const user_coord_02 = ObjectId("669000000000000000000009");
const user_vol_03 = ObjectId("669000000000000000000010");

db.Users.insertMany([
  {
    _id: user_admin_01,
    first_name: "Carlos",
    last_name: "Ramirez",
    email: "carlos.ramirez@aidtrack.pe",
    phone: "987654321",
    dni: "71234567",
    status: "Activo",
    roles: [
      { role_name: "Administrador" },
      { role_name: "Donante" }
    ]
  },
  {
    _id: user_coord_01,
    first_name: "Lucia",
    last_name: "Fernandez",
    email: "lucia.fernandez@aidtrack.pe",
    phone: "987654322",
    dni: "72345678",
    status: "Activo",
    roles: [
      { role_name: "Coordinador" },
      { role_name: "Voluntario" }
    ],
    volunteer: {
      availability: "Lunes a viernes",
      specialization: "Logística",
      start_date: new Date("2026-01-10")
    }
  },
  {
    _id: user_vol_01,
    first_name: "Miguel",
    last_name: "Torres",
    email: "miguel.torres@aidtrack.pe",
    phone: "987654323",
    dni: "73456789",
    status: "Activo",
    roles: [
      { role_name: "Voluntario" }
    ],
    volunteer: {
      availability: "Fines de semana",
      specialization: "Distribución de donaciones",
      start_date: new Date("2026-02-05")
    }
  },
  {
    _id: user_vol_02,
    first_name: "Patricia",
    last_name: "Salazar",
    email: "patricia.salazar@aidtrack.pe",
    phone: "987654324",
    dni: "74567890",
    status: "Activo",
    roles: [
      { role_name: "Voluntario" }
    ],
    volunteer: {
      availability: "Sábados",
      specialization: "Atención a beneficiarios",
      start_date: new Date("2026-03-12")
    }
  },
  {
    _id: user_donor_01,
    first_name: "Ana",
    last_name: "Vargas",
    email: "ana.vargas@aidtrack.pe",
    phone: "987654325",
    dni: "75678901",
    status: "Activo",
    roles: [
      { role_name: "Donante" }
    ]
  },
  {
    _id: user_donor_02,
    first_name: "Jorge",
    last_name: "Lopez",
    email: "jorge.lopez@aidtrack.pe",
    phone: "987654326",
    dni: "76789012",
    status: "Activo",
    roles: [
      { role_name: "Donante" }
    ]
  },
  {
    _id: user_donor_03,
    first_name: "Mariana",
    last_name: "Rojas",
    email: "mariana.rojas@aidtrack.pe",
    phone: "987654327",
    dni: "77890123",
    status: "Activo",
    roles: [
      { role_name: "Donante" }
    ]
  },
  {
    _id: user_donor_04,
    first_name: "Diego",
    last_name: "Castro",
    email: "diego.castro@aidtrack.pe",
    phone: "987654328",
    dni: "78901234",
    status: "Activo",
    roles: [
      { role_name: "Donante" },
      { role_name: "Coordinador" }
    ]
  },
  {
    _id: user_coord_02,
    first_name: "Sofia",
    last_name: "Mejia",
    email: "sofia.mejia@aidtrack.pe",
    phone: "987654329",
    dni: "79012345",
    status: "Activo",
    roles: [
      { role_name: "Coordinador" }
    ]
  },
  {
    _id: user_vol_03,
    first_name: "Fernando",
    last_name: "Quispe",
    email: "fernando.quispe@aidtrack.pe",
    phone: "987654330",
    dni: "70123456",
    status: "Inactivo",
    roles: [
      { role_name: "Voluntario" }
    ],
    volunteer: {
      availability: "Domingos",
      specialization: "Transporte",
      start_date: new Date("2026-01-25")
    }
  }
]);

db.Users.find();
