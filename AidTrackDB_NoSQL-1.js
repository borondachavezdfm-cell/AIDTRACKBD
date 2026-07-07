use("AidTrackDB");

db.createCollection("Users", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "Users",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "First_name": {
                    "bsonType": "string"
                },
                "Last_name": {
                    "bsonType": "string"
                },
                "Email": {
                    "bsonType": "string"
                },
                "Phone": {
                    "bsonType": "string"
                },
                "Dni": {
                    "bsonType": "string"
                },
                "Status": {
                    "bsonType": "string"
                },
                "roles": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "role_name": {
                                "bsonType": "string"
                            }
                        },
                        "additionalProperties": false
                    }
                },
                "volunteer": {
                    "bsonType": "object",
                    "properties": {
                        "availability": {
                            "bsonType": "string"
                        },
                        "specialization": {
                            "bsonType": "string"
                        },
                        "start_date": {
                            "bsonType": "date"
                        }
                    },
                    "additionalProperties": false
                }
            },
            "additionalProperties": false
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});

db.createCollection("Campaigns", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "campaigns",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "title": {
                    "bsonType": "string"
                },
                "description": {
                    "bsonType": "string"
                },
                "start_date": {
                    "bsonType": "date"
                },
                "end_date": {
                    "bsonType": "date"
                },
                "funding_goal": {
                    "bsonType": "double"
                },
                "category": {
                    "bsonType": "object",
                    "properties": {
                        "category_name": {
                            "bsonType": "string"
                        },
                        "description": {
                            "bsonType": "string"
                        }
                    },
                    "additionalProperties": false
                },
                "status": {
                    "bsonType": "string"
                },
                "organization": {
                    "bsonType": "object",
                    "properties": {
                        "organization_id": {
                            "bsonType": "objectId"
                        },
                        "name": {
                            "bsonType": "string"
                        }
                    },
                    "additionalProperties": false
                }
            },
            "additionalProperties": false
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});

db.createCollection("Organizations", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "Organizations",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "name": {
                    "bsonType": "string"
                },
                "description": {
                    "bsonType": "string"
                },
                "email": {
                    "bsonType": "string"
                },
                "phone": {
                    "bsonType": "string"
                },
                "creation_date": {
                    "bsonType": "date"
                },
                "location": {
                    "bsonType": "object",
                    "properties": {
                        "region": {
                            "bsonType": "string"
                        },
                        "province": {
                            "bsonType": "string"
                        },
                        "district": {
                            "bsonType": "string"
                        },
                        "address": {
                            "bsonType": "string"
                        },
                        "reference": {
                            "bsonType": "string"
                        }
                    },
                    "additionalProperties": false
                },
                "members": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "user_id": {
                                "bsonType": "objectId"
                            },
                            "user_name": {
                                "bsonType": "string"
                            },
                            "position": {
                                "bsonType": "string"
                            },
                            "join_date": {
                                "bsonType": "date"
                            }
                        },
                        "additionalProperties": false
                    }
                }
            },
            "additionalProperties": false
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});

db.createCollection("Deliveries", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "Deliveries",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "delivery_date": {
                    "bsonType": "date"
                },
                "status": {
                    "bsonType": "string"
                },
                "beneficiary": {
                    "bsonType": "object",
                    "properties": {
                        "beneficiary_name": {
                            "bsonType": "string"
                        },
                        "beneficiary_type": {
                            "bsonType": "string"
                        }
                    },
                    "additionalProperties": false
                },
                "donation": {
                    "bsonType": "object",
                    "properties": {
                        "donation_id": {
                            "bsonType": "objectId"
                        }
                    },
                    "additionalProperties": false
                },
                "volunteers": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "user_id": {
                                "bsonType": "objectId"
                            },
                            "full_name": {
                                "bsonType": "string"
                            }
                        },
                        "additionalProperties": false
                    }
                },
                "evidences": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "image_url": {
                                "bsonType": "string"
                            },
                            "description": {
                                "bsonType": "string"
                            },
                            "upload_date": {
                                "bsonType": "date"
                            }
                        },
                        "additionalProperties": false
                    }
                }
            },
            "additionalProperties": false
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});

db.createCollection("Impact_reports", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "impact_reports",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "generated_date": {
                    "bsonType": "date"
                },
                "campaign": {
                    "bsonType": "object",
                    "properties": {
                        "campaign_id": {
                            "bsonType": "objectId"
                        },
                        "title": {
                            "bsonType": "string"
                        }
                    },
                    "additionalProperties": false
                },
                "summary": {
                    "bsonType": "object",
                    "properties": {
                        "total_donations": {
                            "bsonType": "int"
                        },
                        "total_beneficiaries": {
                            "bsonType": "int"
                        },
                        "total_amount_raised": {
                            "bsonType": "double"
                        },
                        "total_items_donated": {
                            "bsonType": "int"
                        }
                    },
                    "additionalProperties": false
                },
                "observations": {
                    "bsonType": "string"
                }
            },
            "additionalProperties": false
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});

db.createCollection("Shipments", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "shipments",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "departure_date": {
                    "bsonType": "date"
                },
                "arrival_date": {
                    "bsonType": "date"
                },
                "status": {
                    "bsonType": "string"
                },
                "transport": {
                    "bsonType": "object",
                    "properties": {
                        "plate": {
                            "bsonType": "string"
                        },
                        "transport_type": {
                            "bsonType": "string"
                        }
                    },
                    "additionalProperties": false
                },
                "location": {
                    "bsonType": "object",
                    "properties": {
                        "region": {
                            "bsonType": "string"
                        },
                        "province": {
                            "bsonType": "string"
                        },
                        "district": {
                            "bsonType": "string"
                        }
                    },
                    "additionalProperties": false
                },
                "delivery": {
                    "bsonType": "object",
                    "properties": {
                        "delivery_id": {
                            "bsonType": "objectId"
                        }
                    },
                    "additionalProperties": false
                }
            },
            "additionalProperties": false
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});

db.createCollection("Donations", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "Donations",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "donation_type": {
                    "bsonType": "string"
                },
                "amount": {
                    "bsonType": "double"
                },
                "quantity": {
                    "bsonType": "int"
                },
                "donation_date": {
                    "bsonType": "date"
                },
                "status": {
                    "bsonType": "string"
                },
                "campaign": {
                    "bsonType": "object",
                    "properties": {
                        "campaign_id": {
                            "bsonType": "objectId"
                        },
                        "title": {
                            "bsonType": "string"
                        }
                    },
                    "additionalProperties": false
                },
                "donor": {
                    "bsonType": "object",
                    "properties": {
                        "user_id": {
                            "bsonType": "objectId"
                        },
                        "full_name": {
                            "bsonType": "string"
                        }
                    },
                    "additionalProperties": false
                },
                "tracking": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "tracking_status": {
                                "bsonType": "string"
                            },
                            "location": {
                                "bsonType": "string"
                            },
                            "updated_at": {
                                "bsonType": "date"
                            }
                        },
                        "additionalProperties": false
                    }
                }
            },
            "additionalProperties": false
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});