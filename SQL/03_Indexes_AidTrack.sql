USE AidTrackDB
GO

CREATE INDEX IX_Provinces_id_region
ON Provinces(id_region)
GO

CREATE INDEX IX_Districts_id_province
ON Districts(id_province)
GO

CREATE INDEX IX_Locations_id_district
ON Locations(id_district)
GO

CREATE INDEX IX_Users_id_user_status
ON Users(id_user_status)
GO

CREATE INDEX IX_User_role_id_user
ON User_role(id_user)
GO

CREATE INDEX IX_User_role_id_role
ON User_role(id_role)
GO

CREATE INDEX IX_Organizations_id_location
ON Organizations(id_location)
GO

CREATE INDEX IX_Organization_member_id_user
ON Organization_member(id_user)
GO

CREATE INDEX IX_Organization_member_id_organization
ON Organization_member(id_organization)
GO

CREATE INDEX IX_Volunteers_id_user
ON Volunteers(id_user)
GO

CREATE INDEX IX_Campaigns_id_organization
ON Campaigns(id_organization)
GO

CREATE INDEX IX_Campaigns_id_category
ON Campaigns(id_category)
GO

CREATE INDEX IX_Campaigns_id_campaign_status
ON Campaigns(id_campaign_status)
GO

CREATE INDEX IX_Donations_id_user
ON Donations(id_user)
GO

CREATE INDEX IX_Donations_id_campaign
ON Donations(id_campaign)
GO

CREATE INDEX IX_Donations_id_donation_type
ON Donations(id_donation_type)
GO

CREATE INDEX IX_Donations_id_donation_status
ON Donations(id_donation_status)
GO

CREATE INDEX IX_Donations_donation_date
ON Donations(donation_date)
GO

CREATE INDEX IX_Donation_tracking_id_donation
ON Donation_tracking(id_donation)
GO

CREATE INDEX IX_Donation_tracking_id_location
ON Donation_tracking(id_location)
GO

CREATE INDEX IX_Donation_tracking_id_tracking_status
ON Donation_tracking(id_tracking_status)
GO

CREATE INDEX IX_Donation_tracking_id_user
ON Donation_tracking(id_user)
GO

CREATE INDEX IX_Beneficiaries_id_beneficiary_type
ON Beneficiaries(id_beneficiary_type)
GO

CREATE INDEX IX_Beneficiaries_id_location
ON Beneficiaries(id_location)
GO

CREATE INDEX IX_Deliveries_id_delivery_status
ON Deliveries(id_delivery_status)
GO

CREATE INDEX IX_Deliveries_id_donation
ON Deliveries(id_donation)
GO

CREATE INDEX IX_Deliveries_id_beneficiary
ON Deliveries(id_beneficiary)
GO

CREATE INDEX IX_Delivery_volunteer_id_delivery
ON Delivery_volunteer(id_delivery)
GO

CREATE INDEX IX_Delivery_volunteer_id_volunteer
ON Delivery_volunteer(id_volunteer)
GO

CREATE INDEX IX_Evidences_id_delivery
ON Evidences(id_delivery)
GO

CREATE INDEX IX_Transports_id_transport_status
ON Transports(id_transport_status)
GO

CREATE INDEX IX_Shipments_id_shipment_status
ON Shipments(id_shipment_status)
GO

CREATE INDEX IX_Shipments_id_delivery
ON Shipments(id_delivery)
GO

CREATE INDEX IX_Shipments_id_transport
ON Shipments(id_transport)
GO

CREATE INDEX IX_Shipments_id_location
ON Shipments(id_location)
GO

CREATE INDEX IX_Impact_reports_id_campaign
ON Impact_reports(id_campaign)
GO
