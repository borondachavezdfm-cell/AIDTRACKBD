use("AidTrackDB");
db.Donations.find(
{
    donation_type: "Monetaria",
    amount: { $ne: null }
},
{
    _id: 0,
    "donor.full_name": 1,
    "campaign.title": 1,
    donation_type: 1,
    amount: 1,
    status: 1,
    donation_date: 1
}).sort({ amount: -1 }).limit(10)

db.Campaigns.find(
{
    status: "Activa",
    funding_goal: { $gte: 5000 }
},
{
    _id: 0,
    title: 1,
    "category.category_name": 1,
    "organization.name": 1,
    funding_goal: 1,
    status: 1
}).sort({ funding_goal: -1 })

db.Users.find(
{
    "volunteer.specialization": "Logística"
},
{
    _id: 0,
    First_name: 1,
    Last_name: 1,
    Email: 1,
    Status: 1,
    "volunteer.availability": 1,
    "volunteer.specialization": 1
}).sort({ Last_name: 1 })


db.Deliveries.aggregate([
    {
        $group:
        {
            _id: "$beneficiary.beneficiary_type",
            total_entregas: { $sum: 1 }
        }
    },
    {
        $sort:
        {
            total_entregas: -1
        }
    }
])


db.Donations.aggregate([
    {
        $match:
        {
            donation_type: "Monetaria",
            amount: { $ne: null }
        }
    },
    {
        $group:
        {
            _id: "$campaign.title",
            total_recaudado: { $sum: "$amount" },
            cantidad_donaciones: { $sum: 1 }
        }
    },
    {
        $sort:
        {
            total_recaudado: -1
        }
    }
])

db.Donations.aggregate([
    {
        $group:
        {
            _id:
            {
                tipo_donacion: "$donation_type",
                estado: "$status"
            },
            cantidad_donaciones: { $sum: 1 }
        }
    },
    {
        $sort:
        {
            "_id.tipo_donacion": 1,
            cantidad_donaciones: -1
        }
    }
])


db.Donations.aggregate([
    {
        $match:
        {
            donation_type: "Monetaria",
            amount: { $ne: null }
        }
    },
    {
        $group:
        {
            _id: "$campaign.title",
            monto_promedio: { $avg: "$amount" },
            cantidad_donaciones: { $sum: 1 }
        }
    },
    {
        $sort:
        {
            monto_promedio: -1
        }
    }
])


db.Campaigns.aggregate([
    {
        $group:
        {
            _id: "$category.category_name",
            total_campanias: { $sum: 1 }
        }
    },
    {
        $sort:
        {
            total_campanias: -1
        }
    }
])


db.Impact_reports.find(
{
    "summary.total_amount_raised": { $gte: 500 }
},
{
    _id: 0,
    "campaign.title": 1,
    "summary.total_donations": 1,
    "summary.total_beneficiaries": 1,
    "summary.total_amount_raised": 1,
    generated_date: 1
}).sort({ "summary.total_amount_raised": -1 })


db.Shipments.aggregate([
    {
        $group:
        {
            _id: "$location.region",
            total_envios: { $sum: 1 }
        }
    },
    {
        $sort:
        {
            total_envios: -1
        }
    }
])
