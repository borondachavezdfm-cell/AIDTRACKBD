use("AidTrackDB");

db.Deliveries.deleteMany({});

const don_01 = ObjectId("669300000000000000000001");
const don_02 = ObjectId("669300000000000000000002");
const don_03 = ObjectId("669300000000000000000003");
const don_04 = ObjectId("669300000000000000000004");
const don_05 = ObjectId("669300000000000000000005");
const don_06 = ObjectId("669300000000000000000006");

const user_vol_01 = ObjectId("669000000000000000000003");
const user_vol_02 = ObjectId("669000000000000000000004");
const user_vol_03 = ObjectId("669000000000000000000010");

const del_01 = ObjectId("669400000000000000000001");
const del_02 = ObjectId("669400000000000000000002");
const del_03 = ObjectId("669400000000000000000003");
const del_04 = ObjectId("669400000000000000000004");
const del_05 = ObjectId("669400000000000000000005");
const del_06 = ObjectId("669400000000000000000006");

db.Deliveries.insertMany([
{
    _id: del_01,
    delivery_date: new Date("2026-06-20"),
    status: "Entregada",

    beneficiary:{
        beneficiary_name:"Comedor Popular San Martín",
        beneficiary_type:"Comunidad"
    },

    donation:{
        donation_id:don_01
    },

    volunteers:[
        {
            user_id:user_vol_01,
            full_name:"Miguel Torres"
        }
    ],

    evidences:[
        {
            image_url:"https://aidtrack.pe/evidences/delivery01.jpg",
            description:"Entrega de alimentos",
            upload_date:new Date("2026-06-20")
        }
    ]
},

{
    _id: del_02,
    delivery_date: new Date("2026-06-22"),
    status:"Entregada",

    beneficiary:{
        beneficiary_name:"Colegio Esperanza",
        beneficiary_type:"Institución Educativa"
    },

    donation:{
        donation_id:don_02
    },

    volunteers:[
        {
            user_id:user_vol_02,
            full_name:"Patricia Salazar"
        }
    ],

    evidences:[
        {
            image_url:"https://aidtrack.pe/evidences/delivery02.jpg",
            description:"Entrega de ropa",
            upload_date:new Date("2026-06-22")
        }
    ]
},

{
    _id: del_03,
    delivery_date:new Date("2026-06-25"),
    status:"En proceso",

    beneficiary:{
        beneficiary_name:"Hospital Regional Cusco",
        beneficiary_type:"Hospital"
    },

    donation:{
        donation_id:don_03
    },

    volunteers:[
        {
            user_id:user_vol_01,
            full_name:"Miguel Torres"
        },
        {
            user_id:user_vol_03,
            full_name:"Fernando Quispe"
        }
    ],

    evidences:[]
},

{
    _id: del_04,
    delivery_date:new Date("2026-06-27"),
    status:"Pendiente",

    beneficiary:{
        beneficiary_name:"Asociación Nueva Vida",
        beneficiary_type:"ONG"
    },

    donation:{
        donation_id:don_04
    },

    volunteers:[
        {
            user_id:user_vol_02,
            full_name:"Patricia Salazar"
        }
    ],

    evidences:[]
},

{
    _id: del_05,
    delivery_date:new Date("2026-06-29"),
    status:"Entregada",

    beneficiary:{
        beneficiary_name:"Comunidad Alto Perú",
        beneficiary_type:"Comunidad"
    },

    donation:{
        donation_id:don_05
    },

    volunteers:[
        {
            user_id:user_vol_01,
            full_name:"Miguel Torres"
        }
    ],

    evidences:[
        {
            image_url:"https://aidtrack.pe/evidences/delivery05.jpg",
            description:"Entrega de útiles escolares",
            upload_date:new Date("2026-06-29")
        }
    ]
},

{
    _id: del_06,
    delivery_date:new Date("2026-07-01"),
    status:"Programada",

    beneficiary:{
        beneficiary_name:"Municipalidad de Chosica",
        beneficiary_type:"Gobierno Local"
    },

    donation:{
        donation_id:don_06
    },

    volunteers:[
        {
            user_id:user_vol_03,
            full_name:"Fernando Quispe"
        }
    ],

    evidences:[]
}

]);

db.Deliveries.find();
