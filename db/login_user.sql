SELECT username pw from houser_user
where username = ($1) and pw = ($2);