select houser_user.username, property_name, property_description,
address, city, state, zip, imgurl, loan, monthly_mort, desired_rent
from houser_user
right join houser on houser_user.username = houser.username
where houser_user.username = ($1) and houser_user.pw = ($2);