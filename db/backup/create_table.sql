CREATE TABLE IF NOT EXISTS houser_user
(username varchar(80), pw varchar(80));

CREATE TABLE IF NOT EXISTS houser
(id serial primary key, username varchar(80), property_name varchar(80), 
property_description varchar(160), address varchar(80), city varchar(80), 
stateUSA varchar(80), zip integer, imgurl varchar(80), loan integer, 
monthly_mort integer, recommend_rent integer, desired_rent integer);


--test value
INSERT INTO houser
(username, property_name, property_description, address, city, stateUSA, zip,
imgurl, loan, monthly_mort, recommend_rent, desired_rent)
VALUES ('ben', 'thing', 'test', 'address', 'city', 
'state', 9999, 'img', 999, 999, 911, 912);

