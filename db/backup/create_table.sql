CREATE TABLE IF NOT EXISTS houser_user
(username varchar(80), pw varchar(80));

CREATE TABLE IF NOT EXISTS houser
(username varchar(80), property_name varchar(80), 
property_description varchar(160), address varchar(80), city varchar(80), 
state varchar(80), zip integer, imgurl varchar(80), loan integer, 
monthly_mort integer, desired_rent integer);