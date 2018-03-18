INSERT INTO houser
(username, property_name, property_description, address, city, stateUSA, zip,
imgurl, loan, monthly_mort, recommend_rent, desired_rent)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12);

SELECT * FROM houser
WHERE username = ($1);