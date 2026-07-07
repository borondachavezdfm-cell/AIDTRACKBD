use("AidTrackDB");

db.Shipments.deleteMany({});

const del_01 = ObjectId("669400000000000000000001");
const del_02 = ObjectId("669400000000000000000002");
const del_03 = ObjectId("669400000000000000000003");
const del_04 = ObjectId("669400000000000000000004");
const del_05 = ObjectId("669400000000000000000005");
const del_06 = ObjectId("669400000000000000000006");

db.Shipments.insertMany([
  {
    departure_date: new Date("2026-06-19"),
    arrival_date: new Date("2026-06-20"),
    status: "Completado",
    transport: {
      plate: "ABC123",
      transport_type: "Camioneta"
    },
    location: {
      region: "Lima",
      province: "Lima",
      district: "Miraflores"
    },
    delivery: {
      delivery_id: del_01
    }
  },
  {
    departure_date: new Date("2026-06-21"),
    arrival_date: new Date("2026-06-22"),
    status: "Completado",
    transport: {
      plate: "DEF456",
      transport_type: "Furgón"
    },
    location: {
      region: "Lima",
      province: "Lima",
      district: "San Juan de Lurigancho"
    },
    delivery: {
      delivery_id: del_02
    }
  },
  {
    departure_date: new Date("2026-06-24"),
    arrival_date: new Date("2026-06-25"),
    status: "En ruta",
    transport: {
      plate: "GHI789",
      transport_type: "Camión"
    },
    location: {
      region: "Cusco",
      province: "Cusco",
      district: "Santiago"
    },
    delivery: {
      delivery_id: del_03
    }
  },
  {
    departure_date: new Date("2026-06-26"),
    status: "Programado",
    transport: {
      plate: "JKL321",
      transport_type: "Camioneta"
    },
    location: {
      region: "Lima",
      province: "Lima",
      district: "Ate"
    },
    delivery: {
      delivery_id: del_04
    }
  },
  {
    departure_date: new Date("2026-06-28"),
    arrival_date: new Date("2026-06-29"),
    status: "Completado",
    transport: {
      plate: "MNO654",
      transport_type: "Furgón"
    },
    location: {
      region: "Puno",
      province: "Puno",
      district: "Puno"
    },
    delivery: {
      delivery_id: del_05
    }
  },
  {
    departure_date: new Date("2026-06-30"),
    status: "Programado",
    transport: {
      plate: "PQR987",
      transport_type: "Camión"
    },
    location: {
      region: "Lima",
      province: "Lima",
      district: "Chosica"
    },
    delivery: {
      delivery_id: del_06
    }
  }
]);

db.Shipments.find();
