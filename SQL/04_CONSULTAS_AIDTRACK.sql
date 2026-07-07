SELECT TOP 10
    C.title AS Campania,
    O.name_organization AS Organizacion,
    CC.category_name AS Categoria,
    CS.campaign_status_name AS Estado,
    C.funding_goal AS Meta,
    SUM(D.monetary_amount) AS Total_Recaudado,
    CAST((SUM(D.monetary_amount) * 100.0 / NULLIF(C.funding_goal, 0)) AS DECIMAL(10,2)) AS Porcentaje_Avance -- Protegido contra división por cero
FROM Campaigns AS C
INNER JOIN Organizations AS O
    ON C.id_organization = O.id_organization
INNER JOIN Campaign_categories AS CC
    ON C.id_category = CC.id_category
INNER JOIN Campaign_status AS CS
    ON C.id_campaign_status = CS.id_campaign_status
INNER JOIN Donations AS D
    ON C.id_campaign = D.id_campaign
WHERE D.monetary_amount IS NOT NULL
GROUP BY 
    C.title,
    O.name_organization,
    CC.category_name,
    CS.campaign_status_name,
    C.funding_goal
ORDER BY Total_Recaudado DESC
GO

SELECT
    U.id_user,
    CONCAT(U.first_name, ' ', U.last_name) AS Usuario,
    US.user_status_name AS Estado_Usuario,
    COUNT(D.id_donation) AS Cantidad_Donaciones,
    SUM(D.monetary_amount) AS Monto_Total_Donado
FROM Users AS U
INNER JOIN User_status AS US
    ON U.id_user_status = US.id_user_status
INNER JOIN Donations AS D
    ON U.id_user = D.id_user
WHERE D.monetary_amount IS NOT NULL
GROUP BY
    U.id_user,
    U.first_name,
    U.last_name,
    US.user_status_name
ORDER BY Monto_Total_Donado DESC
GO

SELECT
    R.region_name AS Region,
    P.province_name AS Provincia,
    D.district_name AS Distrito,
    DS.delivery_status_name AS Estado_Entrega,
    COUNT(DE.id_delivery) AS Cantidad_Entregas
FROM Deliveries AS DE
INNER JOIN Delivery_status AS DS
    ON DE.id_delivery_status = DS.id_delivery_status
INNER JOIN Beneficiaries AS B
    ON DE.id_beneficiary = B.id_beneficiary
INNER JOIN Locations AS L
    ON B.id_location = L.id_location
INNER JOIN Districts AS D
    ON L.id_district = D.id_district
INNER JOIN Provinces AS P
    ON D.id_province = P.id_province
INNER JOIN Regions AS R
    ON P.id_region = R.id_region
WHERE DS.delivery_status_name IN ('Entregado', 'Realizada')
GROUP BY
    R.region_name,
    P.province_name,
    D.district_name,
    DS.delivery_status_name
ORDER BY Cantidad_Entregas DESC
GO

CREATE VIEW V_RecaudacionPorCampania
AS
SELECT
    C.id_campaign,
    C.title AS Campania,
    O.name_organization AS Organizacion,
    SUM(D.monetary_amount) AS Total_Recaudado
FROM Campaigns AS C
INNER JOIN Organizations AS O
    ON C.id_organization = O.id_organization
INNER JOIN Donations AS D
    ON C.id_campaign = D.id_campaign
WHERE D.monetary_amount IS NOT NULL
GROUP BY
    C.id_campaign,
    C.title,
    O.name_organization
GO

SELECT
    Campania,
    Organizacion,
    Total_Recaudado
FROM V_RecaudacionPorCampania
WHERE Total_Recaudado >
(
    SELECT AVG(Total_Recaudado)
    FROM V_RecaudacionPorCampania
)
ORDER BY Total_Recaudado DESC
GO

SELECT
    DT.donation_type_name AS Tipo_Donacion,
    DS.donation_status_name AS Estado_Donacion,
    COUNT(D.id_donation) AS Cantidad_Donaciones
FROM Donations AS D
INNER JOIN Donation_types AS DT
    ON D.id_donation_type = DT.id_donation_type
INNER JOIN Donation_status AS DS
    ON D.id_donation_status = DS.id_donation_status
GROUP BY
    DT.donation_type_name,
    DS.donation_status_name
ORDER BY
    Tipo_Donacion,
    Cantidad_Donaciones DESC
GO

SELECT
    CONCAT(U.first_name, ' ', U.last_name) AS Voluntario,
    V.specialization AS Especializacion,
    V.availability AS Disponibilidad,
    COUNT(DV.id_delivery) AS Cantidad_Entregas
FROM Volunteers AS V
INNER JOIN Users AS U
    ON V.id_user = U.id_user
INNER JOIN Delivery_volunteer AS DV
    ON V.id_volunteer = DV.id_volunteer
GROUP BY
    U.first_name,
    U.last_name,
    V.specialization,
    V.availability
ORDER BY Cantidad_Entregas DESC
GO

SELECT
    D.id_donation,
    CONCAT(U.first_name, ' ', U.last_name) AS Donante,
    C.title AS Campania,
    DT.donation_type_name AS Tipo_Donacion,
    DS.donation_status_name AS Estado_Donacion,
    D.donation_date AS Fecha_Donacion
FROM Donations AS D
INNER JOIN Users AS U
    ON D.id_user = U.id_user
INNER JOIN Campaigns AS C
    ON D.id_campaign = C.id_campaign
INNER JOIN Donation_types AS DT
    ON D.id_donation_type = DT.id_donation_type
INNER JOIN Donation_status AS DS
    ON D.id_donation_status = DS.id_donation_status
WHERE D.id_donation NOT IN
(
    SELECT DE.id_donation
    FROM Deliveries AS DE
)
ORDER BY D.donation_date DESC
GO

SELECT
    BT.beneficiary_type_name AS Tipo_Beneficiario,
    COUNT(DISTINCT B.id_beneficiary) AS Beneficiarios_Atendidos
FROM Beneficiary_types AS BT
INNER JOIN Beneficiaries AS B
    ON BT.id_beneficiary_type = B.id_beneficiary_type
INNER JOIN Deliveries AS DE
    ON B.id_beneficiary = DE.id_beneficiary
GROUP BY
    BT.beneficiary_type_name
ORDER BY Beneficiarios_Atendidos DESC
GO

SELECT
    T.vehicle_plate AS Placa,
    T.vehicle_type AS Tipo_Vehiculo,
    TS.transport_status_name AS Estado_Transporte,
    COUNT(S.id_shipment) AS Cantidad_Envios
FROM Transports AS T
INNER JOIN Transport_status AS TS
    ON T.id_transport_status = TS.id_transport_status
INNER JOIN Shipments AS S
    ON T.id_transport = S.id_transport
GROUP BY
    T.vehicle_plate,
    T.vehicle_type,
    TS.transport_status_name
ORDER BY Cantidad_Envios DESC
GO

SELECT
    O.name_organization AS Organizacion,
    COUNT(DISTINCT C.id_campaign) AS Total_Campanias,
    COUNT(D.id_donation) AS Total_Donaciones,
    SUM(D.monetary_amount) AS Total_Recaudado
FROM Organizations AS O
INNER JOIN Campaigns AS C
    ON O.id_organization = C.id_organization
LEFT JOIN Donations AS D
    ON C.id_campaign = D.id_campaign
GROUP BY
    O.name_organization
ORDER BY
    Total_Recaudado DESC
GO

SELECT
    C.title AS Campania,
    O.name_organization AS Organizacion,
    CS.campaign_status_name AS Estado
FROM Campaigns AS C
INNER JOIN Organizations AS O
    ON C.id_organization = O.id_organization
INNER JOIN Campaign_status AS CS
    ON C.id_campaign_status = CS.id_campaign_status
WHERE C.id_campaign NOT IN
(
    SELECT id_campaign
    FROM Donations
)
ORDER BY
    Campania
GO

SELECT
    R.region_name AS Region,
    COUNT(D.id_donation) AS Cantidad_Donaciones,
    SUM(D.monetary_amount) AS Total_Recaudado,
    COUNT(DISTINCT C.id_campaign) AS Campanias
FROM Regions AS R
INNER JOIN Provinces AS P
    ON R.id_region = P.id_region
INNER JOIN Districts AS DI
    ON P.id_province = DI.id_province
INNER JOIN Locations AS L
    ON DI.id_district = L.id_district
INNER JOIN Organizations AS O
    ON L.id_location = O.id_location
INNER JOIN Campaigns AS C
    ON O.id_organization = C.id_organization
INNER JOIN Donations AS D
    ON C.id_campaign = D.id_campaign
GROUP BY
    R.region_name
ORDER BY
    Total_Recaudado DESC
GO

SELECT TOP 5
    C.title AS Campania,
    O.name_organization AS Organizacion,
    COUNT(DISTINCT B.id_beneficiary) AS Beneficiarios_Atendidos
FROM Campaigns AS C
INNER JOIN Organizations AS O
    ON C.id_organization = O.id_organization
INNER JOIN Donations AS D
    ON C.id_campaign = D.id_campaign
INNER JOIN Deliveries AS DE
    ON D.id_donation = DE.id_donation
INNER JOIN Beneficiaries AS B
    ON DE.id_beneficiary = B.id_beneficiary
GROUP BY
    C.title,
    O.name_organization
ORDER BY Beneficiarios_Atendidos DESC
GO

SELECT
    DT.donation_type_name AS Tipo_Donacion,
    DS.donation_status_name AS Estado_Donacion,
    COUNT(D.id_donation) AS Cantidad_Donaciones,
    AVG(D.monetary_amount) AS Monto_Promedio
FROM Donations AS D
INNER JOIN Donation_types AS DT
    ON D.id_donation_type = DT.id_donation_type
INNER JOIN Donation_status AS DS
    ON D.id_donation_status = DS.id_donation_status
WHERE D.monetary_amount IS NOT NULL
GROUP BY
    DT.donation_type_name,
    DS.donation_status_name
ORDER BY Monto_Promedio DESC
GO

SELECT
    DE.id_delivery,
    CONCAT(B.first_name, ' ', B.last_name) AS Beneficiario,
    DS.delivery_status_name AS Estado_Entrega,
    T.vehicle_plate AS Placa_Transporte,
    SS.shipment_status_name AS Estado_Envio,
    COUNT(E.id_evidence) AS Cantidad_Evidencias
FROM Deliveries AS DE
INNER JOIN Beneficiaries AS B
    ON DE.id_beneficiary = B.id_beneficiary
INNER JOIN Delivery_status AS DS
    ON DE.id_delivery_status = DS.id_delivery_status
INNER JOIN Shipments AS S
    ON DE.id_delivery = S.id_delivery
INNER JOIN Transports AS T
    ON S.id_transport = T.id_transport
INNER JOIN Shipment_status AS SS
    ON S.id_shipment_status = SS.id_shipment_status
LEFT JOIN Evidences AS E
    ON DE.id_delivery = E.id_delivery
GROUP BY
    DE.id_delivery,
    B.first_name,
    B.last_name,
    DS.delivery_status_name,
    T.vehicle_plate,
    SS.shipment_status_name
ORDER BY Cantidad_Evidencias DESC
GO
