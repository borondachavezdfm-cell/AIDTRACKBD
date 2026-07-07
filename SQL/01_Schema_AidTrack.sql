CREATE DATABASE AidTrackDB
GO

USE AidTrackDB
GO

CREATE TABLE Regions (
    id_region INT IDENTITY(1,1) NOT NULL,
    region_name VARCHAR(50) NOT NULL,
    CONSTRAINT PK_Regions PRIMARY KEY (id_region),
    CONSTRAINT UQ_Regions_region_name UNIQUE (region_name)
)
GO

CREATE TABLE Provinces (
    id_province INT IDENTITY(1,1) NOT NULL,
    province_name VARCHAR(50) NOT NULL,
    id_region INT NOT NULL,
    CONSTRAINT PK_Provinces PRIMARY KEY (id_province),
    CONSTRAINT UQ_Provinces_region_name UNIQUE (id_region, province_name),
    CONSTRAINT FK_Regions_Provinces FOREIGN KEY (id_region)
        REFERENCES Regions(id_region)
)
GO

CREATE TABLE Districts (
    id_district INT IDENTITY(1,1) NOT NULL,
    district_name VARCHAR(50) NOT NULL,
    id_province INT NOT NULL,
    CONSTRAINT PK_Districts PRIMARY KEY (id_district),
    CONSTRAINT UQ_Districts_province_name UNIQUE (id_province, district_name),
    CONSTRAINT FK_Provinces_Districts FOREIGN KEY (id_province)
        REFERENCES Provinces(id_province)
)
GO

CREATE TABLE Locations (
    id_location INT IDENTITY(1,1) NOT NULL,
    address VARCHAR(100) NOT NULL,
    reference VARCHAR(100) NULL,
    id_district INT NOT NULL,
    CONSTRAINT PK_Locations PRIMARY KEY (id_location),
    CONSTRAINT UQ_Locations_address_district UNIQUE (id_district, address),
    CONSTRAINT FK_Districts_Locations FOREIGN KEY (id_district)
        REFERENCES Districts(id_district)
)
GO

CREATE TABLE User_status (
    id_user_status INT IDENTITY(1,1) NOT NULL,
    user_status_name VARCHAR(20) NOT NULL,
    CONSTRAINT PK_User_status PRIMARY KEY (id_user_status),
    CONSTRAINT UQ_User_status_name UNIQUE (user_status_name)
)
GO

CREATE TABLE Users (
    id_user INT IDENTITY(1,1) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    user_email VARCHAR(80) NOT NULL,
    user_phone CHAR(9) NOT NULL,
    user_dni CHAR(8) NOT NULL,
    registration_date DATETIME NOT NULL DEFAULT GETDATE(),
    updated_at DATETIME NULL,
    id_user_status INT NOT NULL,
    CONSTRAINT PK_Users PRIMARY KEY (id_user),
    CONSTRAINT UQ_Users_email UNIQUE (user_email),
    CONSTRAINT UQ_Users_phone UNIQUE (user_phone),
    CONSTRAINT UQ_Users_dni UNIQUE (user_dni),
    CONSTRAINT FK_User_status_Users FOREIGN KEY (id_user_status)
        REFERENCES User_status(id_user_status),
    CONSTRAINT CK_Users_phone CHECK (user_phone NOT LIKE '%[^0-9]%'),
    CONSTRAINT CK_Users_dni CHECK (user_dni NOT LIKE '%[^0-9]%')
)
GO

CREATE TABLE Roles (
    id_role INT IDENTITY(1,1) NOT NULL,
    name_role VARCHAR(50) NOT NULL,
    CONSTRAINT PK_Roles PRIMARY KEY (id_role),
    CONSTRAINT UQ_Roles_name UNIQUE (name_role)
)
GO

CREATE TABLE User_role (
    id_user INT NOT NULL,
    id_role INT NOT NULL,
    assigned_date DATETIME NOT NULL DEFAULT GETDATE(),
    CONSTRAINT PK_User_role PRIMARY KEY (id_user, id_role),
    CONSTRAINT FK_Users_User_role FOREIGN KEY (id_user)
        REFERENCES Users(id_user),
    CONSTRAINT FK_Roles_User_role FOREIGN KEY (id_role)
        REFERENCES Roles(id_role)
)
GO

CREATE TABLE Organizations (
    id_organization INT IDENTITY(1,1) NOT NULL,
    name_organization VARCHAR(50) NOT NULL,
    description VARCHAR(200) NOT NULL,
    organization_email VARCHAR(80) NOT NULL,
    organization_phone CHAR(9) NOT NULL,
    creation_date DATETIME NOT NULL DEFAULT GETDATE(),
    updated_at DATETIME NULL,
    id_location INT NOT NULL,
    CONSTRAINT PK_Organizations PRIMARY KEY (id_organization),
    CONSTRAINT UQ_Organizations_email UNIQUE (organization_email),
    CONSTRAINT UQ_Organizations_phone UNIQUE (organization_phone),
    CONSTRAINT FK_Locations_Organizations FOREIGN KEY (id_location)
        REFERENCES Locations(id_location),
    CONSTRAINT CK_Organizations_phone CHECK (organization_phone NOT LIKE '%[^0-9]%')
)
GO

CREATE TABLE Organization_member (
    id_user INT NOT NULL,
    id_organization INT NOT NULL,
    position VARCHAR(30) NOT NULL,
    join_date DATETIME NOT NULL DEFAULT GETDATE(),
    CONSTRAINT PK_Organization_member PRIMARY KEY (id_user, id_organization),
    CONSTRAINT FK_Users_Organization_member FOREIGN KEY (id_user)
        REFERENCES Users(id_user),
    CONSTRAINT FK_Organizations_Organization_member FOREIGN KEY (id_organization)
        REFERENCES Organizations(id_organization)
)
GO

CREATE TABLE Volunteers (
    id_volunteer INT IDENTITY(1,1) NOT NULL,
    availability VARCHAR(15) NOT NULL,
    specialization VARCHAR(30) NOT NULL,
    active_since DATETIME NOT NULL DEFAULT GETDATE(),
    id_user INT NOT NULL,
    CONSTRAINT PK_Volunteers PRIMARY KEY (id_volunteer),
    CONSTRAINT UQ_Volunteers_user UNIQUE (id_user),
    CONSTRAINT FK_Users_Volunteers FOREIGN KEY (id_user)
        REFERENCES Users(id_user)
)
GO

CREATE TABLE Campaign_categories (
    id_category INT IDENTITY(1,1) NOT NULL,
    category_name VARCHAR(50) NOT NULL,
    description VARCHAR(200) NOT NULL,
    CONSTRAINT PK_Campaign_categories PRIMARY KEY (id_category),
    CONSTRAINT UQ_Campaign_categories_name UNIQUE (category_name)
)
GO

CREATE TABLE Campaign_status (
    id_campaign_status INT IDENTITY(1,1) NOT NULL,
    campaign_status_name VARCHAR(20) NOT NULL,
    CONSTRAINT PK_Campaign_status PRIMARY KEY (id_campaign_status),
    CONSTRAINT UQ_Campaign_status_name UNIQUE (campaign_status_name)
)
GO

CREATE TABLE Campaigns (
    id_campaign INT IDENTITY(1,1) NOT NULL,
    title VARCHAR(50) NOT NULL,
    description VARCHAR(200) NOT NULL,
    start_date DATETIME NOT NULL,
    end_date DATETIME NOT NULL,
    funding_goal DECIMAL(10,2) NOT NULL,
    goal_description VARCHAR(200) NULL,
    updated_at DATETIME NULL,
    id_organization INT NOT NULL,
    id_category INT NOT NULL,
    id_campaign_status INT NOT NULL,
    CONSTRAINT PK_Campaigns PRIMARY KEY (id_campaign),
    CONSTRAINT FK_Organizations_Campaigns FOREIGN KEY (id_organization)
        REFERENCES Organizations(id_organization),
    CONSTRAINT FK_Campaign_categories_Campaigns FOREIGN KEY (id_category)
        REFERENCES Campaign_categories(id_category),
    CONSTRAINT FK_Campaign_status_Campaigns FOREIGN KEY (id_campaign_status)
        REFERENCES Campaign_status(id_campaign_status),
    CONSTRAINT CK_Campaigns_dates CHECK (end_date >= start_date),
    CONSTRAINT CK_Campaigns_funding_goal CHECK (funding_goal >= 0)
)
GO

CREATE TABLE Donation_types (
    id_donation_type INT IDENTITY(1,1) NOT NULL,
    donation_type_name VARCHAR(50) NOT NULL,
    CONSTRAINT PK_Donation_types PRIMARY KEY (id_donation_type),
    CONSTRAINT UQ_Donation_types_name UNIQUE (donation_type_name)
)
GO

CREATE TABLE Donation_status (
    id_donation_status INT IDENTITY(1,1) NOT NULL,
    donation_status_name VARCHAR(20) NOT NULL,
    CONSTRAINT PK_Donation_status PRIMARY KEY (id_donation_status),
    CONSTRAINT UQ_Donation_status_name UNIQUE (donation_status_name)
)
GO

CREATE TABLE Donations (
    id_donation INT IDENTITY(1,1) NOT NULL,
    donation_date DATETIME NOT NULL DEFAULT GETDATE(),
    quantity DECIMAL(10,2) NULL,
    monetary_amount DECIMAL(10,2) NULL,
    description VARCHAR(200) NOT NULL,
    updated_at DATETIME NULL,
    id_user INT NOT NULL,
    id_campaign INT NOT NULL,
    id_donation_type INT NOT NULL,
    id_donation_status INT NOT NULL,
    CONSTRAINT PK_Donations PRIMARY KEY (id_donation),
    CONSTRAINT FK_Users_Donations FOREIGN KEY (id_user)
        REFERENCES Users(id_user),
    CONSTRAINT FK_Campaigns_Donations FOREIGN KEY (id_campaign)
        REFERENCES Campaigns(id_campaign),
    CONSTRAINT FK_Donation_types_Donations FOREIGN KEY (id_donation_type)
        REFERENCES Donation_types(id_donation_type),
    CONSTRAINT FK_Donation_status_Donations FOREIGN KEY (id_donation_status)
        REFERENCES Donation_status(id_donation_status),
    CONSTRAINT CK_Donations_value_required CHECK (
        quantity IS NOT NULL OR monetary_amount IS NOT NULL
    ),
    CONSTRAINT CK_Donations_positive_values CHECK (
        (quantity IS NULL OR quantity > 0)
        AND
        (monetary_amount IS NULL OR monetary_amount > 0)
    )
)
GO

CREATE TABLE Tracking_status (
    id_tracking_status INT IDENTITY(1,1) NOT NULL,
    tracking_status_name VARCHAR(30) NOT NULL,
    CONSTRAINT PK_Tracking_status PRIMARY KEY (id_tracking_status),
    CONSTRAINT UQ_Tracking_status_name UNIQUE (tracking_status_name)
)
GO

CREATE TABLE Donation_tracking (
    id_donation_tracking INT IDENTITY(1,1) NOT NULL,
    update_date DATETIME NOT NULL DEFAULT GETDATE(),
    comments VARCHAR(200) NULL,
    id_donation INT NOT NULL,
    id_location INT NOT NULL,
    id_tracking_status INT NOT NULL,
    id_user INT NOT NULL,
    CONSTRAINT PK_Donation_tracking PRIMARY KEY (id_donation_tracking),
    CONSTRAINT FK_Donations_Donation_tracking FOREIGN KEY (id_donation)
        REFERENCES Donations(id_donation),
    CONSTRAINT FK_Locations_Donation_tracking FOREIGN KEY (id_location)
        REFERENCES Locations(id_location),
    CONSTRAINT FK_Tracking_status_Donation_tracking FOREIGN KEY (id_tracking_status)
        REFERENCES Tracking_status(id_tracking_status),
    CONSTRAINT FK_Users_Donation_tracking FOREIGN KEY (id_user)
        REFERENCES Users(id_user)
)
GO

CREATE TABLE Beneficiary_types (
    id_beneficiary_type INT IDENTITY(1,1) NOT NULL,
    beneficiary_type_name VARCHAR(50) NOT NULL,
    description VARCHAR(100) NOT NULL,
    CONSTRAINT PK_Beneficiary_types PRIMARY KEY (id_beneficiary_type),
    CONSTRAINT UQ_Beneficiary_types_name UNIQUE (beneficiary_type_name)
)
GO

CREATE TABLE Beneficiaries (
    id_beneficiary INT IDENTITY(1,1) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    beneficiary_phone CHAR(9) NULL,
    observations VARCHAR(150) NULL,
    id_beneficiary_type INT NOT NULL,
    id_location INT NOT NULL,
    CONSTRAINT PK_Beneficiaries PRIMARY KEY (id_beneficiary),
    CONSTRAINT FK_Beneficiary_types_Beneficiaries FOREIGN KEY (id_beneficiary_type)
        REFERENCES Beneficiary_types(id_beneficiary_type),
    CONSTRAINT FK_Locations_Beneficiaries FOREIGN KEY (id_location)
        REFERENCES Locations(id_location),
    CONSTRAINT CK_Beneficiaries_phone CHECK (
        beneficiary_phone IS NULL OR beneficiary_phone NOT LIKE '%[^0-9]%'
    )
)
GO

CREATE TABLE Delivery_status (
    id_delivery_status INT IDENTITY(1,1) NOT NULL,
    delivery_status_name VARCHAR(20) NOT NULL,
    CONSTRAINT PK_Delivery_status PRIMARY KEY (id_delivery_status),
    CONSTRAINT UQ_Delivery_status_name UNIQUE (delivery_status_name)
)
GO

CREATE TABLE Deliveries (
    id_delivery INT IDENTITY(1,1) NOT NULL,
    delivery_date DATETIME NOT NULL,
    updated_at DATETIME NULL,
    id_delivery_status INT NOT NULL,
    id_donation INT NOT NULL,
    id_beneficiary INT NOT NULL,
    CONSTRAINT PK_Deliveries PRIMARY KEY (id_delivery),
    CONSTRAINT FK_Delivery_status_Deliveries FOREIGN KEY (id_delivery_status)
        REFERENCES Delivery_status(id_delivery_status),
    CONSTRAINT FK_Donations_Deliveries FOREIGN KEY (id_donation)
        REFERENCES Donations(id_donation),
    CONSTRAINT FK_Beneficiaries_Deliveries FOREIGN KEY (id_beneficiary)
        REFERENCES Beneficiaries(id_beneficiary)
)
GO

CREATE TABLE Delivery_volunteer (
    id_delivery INT NOT NULL,
    id_volunteer INT NOT NULL,
    assigned_role VARCHAR(20) NOT NULL,
    CONSTRAINT PK_Delivery_volunteer PRIMARY KEY (id_delivery, id_volunteer),
    CONSTRAINT FK_Deliveries_Delivery_volunteer FOREIGN KEY (id_delivery)
        REFERENCES Deliveries(id_delivery),
    CONSTRAINT FK_Volunteers_Delivery_volunteer FOREIGN KEY (id_volunteer)
        REFERENCES Volunteers(id_volunteer)
)
GO

CREATE TABLE Evidences (
    id_evidence INT IDENTITY(1,1) NOT NULL,
    file_url VARCHAR(255) NOT NULL,
    file_type VARCHAR(50) NOT NULL,
    description VARCHAR(100) NULL,
    upload_date DATETIME NOT NULL DEFAULT GETDATE(),
    id_delivery INT NOT NULL,
    CONSTRAINT PK_Evidences PRIMARY KEY (id_evidence),
    CONSTRAINT FK_Deliveries_Evidences FOREIGN KEY (id_delivery)
        REFERENCES Deliveries(id_delivery)
)
GO

CREATE TABLE Transport_status (
    id_transport_status INT IDENTITY(1,1) NOT NULL,
    transport_status_name VARCHAR(20) NOT NULL,
    CONSTRAINT PK_Transport_status PRIMARY KEY (id_transport_status),
    CONSTRAINT UQ_Transport_status_name UNIQUE (transport_status_name)
)
GO

CREATE TABLE Transports (
    id_transport INT IDENTITY(1,1) NOT NULL,
    vehicle_plate VARCHAR(10) NOT NULL,
    vehicle_type VARCHAR(30) NOT NULL,
    capacity INT NOT NULL,
    id_transport_status INT NOT NULL,
    CONSTRAINT PK_Transports PRIMARY KEY (id_transport),
    CONSTRAINT UQ_Transports_vehicle_plate UNIQUE (vehicle_plate),
    CONSTRAINT FK_Transport_status_Transports FOREIGN KEY (id_transport_status)
        REFERENCES Transport_status(id_transport_status),
    CONSTRAINT CK_Transports_capacity CHECK (capacity > 0)
)
GO

CREATE TABLE Shipment_status (
    id_shipment_status INT IDENTITY(1,1) NOT NULL,
    shipment_status_name VARCHAR(20) NOT NULL,
    CONSTRAINT PK_Shipment_status PRIMARY KEY (id_shipment_status),
    CONSTRAINT UQ_Shipment_status_name UNIQUE (shipment_status_name)
)
GO

CREATE TABLE Shipments (
    id_shipment INT IDENTITY(1,1) NOT NULL,
    departure_date DATETIME NOT NULL,
    arrival_date DATETIME NULL,
    id_shipment_status INT NOT NULL,
    id_delivery INT NOT NULL,
    id_transport INT NOT NULL,
    id_location INT NOT NULL,
    CONSTRAINT PK_Shipments PRIMARY KEY (id_shipment),
    CONSTRAINT FK_Shipment_status_Shipments FOREIGN KEY (id_shipment_status)
        REFERENCES Shipment_status(id_shipment_status),
    CONSTRAINT FK_Deliveries_Shipments FOREIGN KEY (id_delivery)
        REFERENCES Deliveries(id_delivery),
    CONSTRAINT FK_Transports_Shipments FOREIGN KEY (id_transport)
        REFERENCES Transports(id_transport),
    CONSTRAINT FK_Locations_Shipments FOREIGN KEY (id_location)
        REFERENCES Locations(id_location),
    CONSTRAINT CK_Shipments_dates CHECK (
        arrival_date IS NULL OR arrival_date >= departure_date
    )
)
GO

CREATE TABLE Impact_reports (
    id_report INT IDENTITY(1,1) NOT NULL,
    total_donations INT NOT NULL,
    total_beneficiaries INT NOT NULL,
    total_amount_raised DECIMAL(10,2) NULL,
    total_items_donated DECIMAL(10,2) NULL,
    description VARCHAR(200) NOT NULL,
    generated_date DATETIME NOT NULL DEFAULT GETDATE(),
    id_campaign INT NOT NULL,
    CONSTRAINT PK_Impact_reports PRIMARY KEY (id_report),
    CONSTRAINT FK_Campaigns_Impact_reports FOREIGN KEY (id_campaign)
        REFERENCES Campaigns(id_campaign),
    CONSTRAINT CK_Impact_reports_totals CHECK (
        total_donations >= 0
        AND total_beneficiaries >= 0
        AND (total_amount_raised IS NULL OR total_amount_raised >= 0)
        AND (total_items_donated IS NULL OR total_items_donated >= 0)
    )
)
GO

SELECT 'AidTrackDB creada correctamente.' AS mensaje
GO
