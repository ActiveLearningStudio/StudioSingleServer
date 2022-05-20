#!/bin/bash

##########################################################
# Start - Change Variables According to your environment #
##########################################################

main_site="terraform_site"
admin_site="terraform_admin_site"
tsugi_site="terraform_tsugi_site"
trax_site="terraform_trax_site"
substitute_app_pexel_api="react_app_pexel_api"
substitute_app_google_captcha="react_app_google_captcha"
substitute_app_gapi_client_id="react_app_gapi_client_id"
substitute_app_hubpot="react_app_hubpot"
substitute_app_h5p_key="react_app_h5p_key"

#App
substitute_app_key="curriki_app_key"
substitute_postgres_db_host="curriki_postgres_db_host"
substitute_postgres_db_port="curriki_postgres_db_port"
substitute_postgres_db="curriki_postgres_db"
substitute_postgres_user="curriki_postgres_user"
substitute_postgres_password="curriki_postgres_password"
substitute_mail_username="curriki_mail_username"
substitute_mail_password="curriki_mail_password"
substitute_mail_from_address="curriki_mail_from_address"
substitute_gapi_credentials="curriki_gapi_credentials"
substitute_gapi_client_id="curriki_gapi_client_id"
substitute_elastic_host="curriki_elastic_host"
substitute_elastic_user="curriki_elastic_user"
substitute_elastic_password="curriki_elastic_password"
substitute_lrs_username="curriki_lrs_username"
substitute_lrs_password="curriki_lrs_password"
substitute_lrs_db_database="curriki_lrs_db_database"

#Tsugi
substitute_mysql_db_host="curriki_mysql_db_host"
substitute_mysql_db_port="curriki_mysql_db_port"
substitute_tsugi_db_dbname="curriki_tsugi_db_dbname"
substitute_mysql_db_user="curriki_mysql_db_user"
substitute_mysql_db_password="curriki_mysql_db_password"
substitute_tsugi_admin_password="curriki_tsugi_admin_password"




#########################################################
# End - Change Variables According to your environment  #
#########################################################

find ./ -type f -not \( -path './api/storage/*' -o -path './api/storagetoclone/*'   \) ! -path "./setup.sh" -exec sed -i -e 's/substitute-terraform-domain.com/'$main_site'/g' {} \;
find ./ -type f -not \( -path './api/storage/*' -o -path './api/storagetoclone/*'   \) ! -path "./setup.sh" -exec sed -i -e 's/substitute-terraform-admin-domain.com/'$admin_site'/g' {} \;
find ./ -type f -not \( -path './api/storage/*' -o -path './api/storagetoclone/*'   \) ! -path "./setup.sh" -exec sed -i -e 's/substitute-terraform-tsugi-domain.com/'$tsugi_site'/g' {} \;
find ./ -type f -not \( -path './api/storage/*' -o -path './api/storagetoclone/*'   \) ! -path "./setup.sh" -exec sed -i -e 's/substitute-terraform-trax-domain.com/'$trax_site'/g' {} \;

#Client
find ./ -type f -not \( -path './api/storage/*' -o -path './api/storagetoclone/*'   \) ! -path "./setup.sh" -exec sed -i -e 's/substitute-react-app-pexel-api/'$substitute_app_pexel_api'/g' {} \;
find ./ -type f -not \( -path './api/storage/*' -o -path './api/storagetoclone/*'   \) ! -path "./setup.sh" -exec sed -i -e 's/substitute-react-app-google-captcha/'$substitute_app_google_captcha'/g' {} \;
find ./ -type f -not \( -path './api/storage/*' -o -path './api/storagetoclone/*'   \) ! -path "./setup.sh" -exec sed -i -e 's/substitute-react-app-gapi-client-id/'$substitute_app_gapi_client_id'/g' {} \;
find ./ -type f -not \( -path './api/storage/*' -o -path './api/storagetoclone/*'   \) ! -path "./setup.sh" -exec sed -i -e 's/substitute-react-app-hubpot/'$substitute_app_hubpot'/g' {} \;
find ./ -type f -not \( -path './api/storage/*' -o -path './api/storagetoclone/*'   \) ! -path "./setup.sh" -exec sed -i -e 's/substitute-react-app-h5p-key/'$substitute_app_h5p_key'/g' {} \;



find ./ -type f -not \( -path './api/storage/*' -o -path './api/storagetoclone/*'   \) ! -path "./setup.sh" -exec sed -i -e 's/substitute-app-key/'$substitute_app_key'/g' {} \;
find ./ -type f -not \( -path './api/storage/*' -o -path './api/storagetoclone/*'   \) ! -path "./setup.sh" -exec sed -i -e 's/substitute-postgres-db-host/'$substitute_postgres_db_host'/g' {} \;
find ./ -type f -not \( -path './api/storage/*' -o -path './api/storagetoclone/*'   \) ! -path "./setup.sh" -exec sed -i -e 's/substitute-postgres-db-port/'$substitute_postgres_db_port'/g' {} \;
find ./ -type f -not \( -path './api/storage/*' -o -path './api/storagetoclone/*'   \) ! -path "./setup.sh" -exec sed -i -e 's/substitute-postgres-db/'$substitute_postgres_db'/g' {} \;
find ./ -type f -not \( -path './api/storage/*' -o -path './api/storagetoclone/*'   \) ! -path "./setup.sh" -exec sed -i -e 's/substitute-postgres-user/'$substitute_postgres_user'/g' {} \;
find ./ -type f -not \( -path './api/storage/*' -o -path './api/storagetoclone/*'   \) ! -path "./setup.sh" -exec sed -i -e 's/substitute-postgres-password/'$substitute_postgres_password'/g' {} \;
find ./ -type f -not \( -path './api/storage/*' -o -path './api/storagetoclone/*'   \) ! -path "./setup.sh" -exec sed -i -e 's/substitute-mail-username/'$substitute_mail_username'/g' {} \;
find ./ -type f -not \( -path './api/storage/*' -o -path './api/storagetoclone/*'   \) ! -path "./setup.sh" -exec sed -i -e 's/substitute-mail-password/'$substitute_mail_password'/g' {} \;
find ./ -type f -not \( -path './api/storage/*' -o -path './api/storagetoclone/*'   \) ! -path "./setup.sh" -exec sed -i -e 's/substitute-mail-from-address/'$substitute_mail_from_address'/g' {} \;
find ./ -type f -not \( -path './api/storage/*' -o -path './api/storagetoclone/*'   \) ! -path "./setup.sh" -exec sed -i -e 's/substitute-gapi-credentials/'$substitute_gapi_credentials'/g' {} \;
find ./ -type f -not \( -path './api/storage/*' -o -path './api/storagetoclone/*'   \) ! -path "./setup.sh" -exec sed -i -e 's/substitute-gapi-client-id/'$substitute_gapi_client_id'/g' {} \;
find ./ -type f -not \( -path './api/storage/*' -o -path './api/storagetoclone/*'   \) ! -path "./setup.sh" -exec sed -i -e 's/substitute-elastic-host/'$substitute_elastic_host'/g' {} \;
find ./ -type f -not \( -path './api/storage/*' -o -path './api/storagetoclone/*'   \) ! -path "./setup.sh" -exec sed -i -e 's/substitute-elastic-user/'$substitute_elastic_user'/g' {} \;
find ./ -type f -not \( -path './api/storage/*' -o -path './api/storagetoclone/*'   \) ! -path "./setup.sh" -exec sed -i -e 's/substitute-elastic-password/'$substitute_elastic_password'/g' {} \;
find ./ -type f -not \( -path './api/storage/*' -o -path './api/storagetoclone/*'   \) ! -path "./setup.sh" -exec sed -i -e 's/substitute-lrs-username/'$substitute_lrs_username'/g' {} \;
find ./ -type f -not \( -path './api/storage/*' -o -path './api/storagetoclone/*'   \) ! -path "./setup.sh" -exec sed -i -e 's/substitute-lrs-password/'$substitute_lrs_password'/g' {} \;
find ./ -type f -not \( -path './api/storage/*' -o -path './api/storagetoclone/*'   \) ! -path "./setup.sh" -exec sed -i -e 's/substitute-lrs-db-database/'$substitute_lrs_db_database'/g' {} \;

find ./ -type f -not \( -path './api/storage/*' -o -path './api/storagetoclone/*'   \) ! -path "./setup.sh" -exec sed -i -e 's/substitute-mysql-db-host/'$substitute_mysql_db_host'/g' {} \;
find ./ -type f -not \( -path './api/storage/*' -o -path './api/storagetoclone/*'   \) ! -path "./setup.sh" -exec sed -i -e 's/substitute-mysql-db-port/'$substitute_mysql_db_port'/g' {} \;
find ./ -type f -not \( -path './api/storage/*' -o -path './api/storagetoclone/*'   \) ! -path "./setup.sh" -exec sed -i -e 's/substitute-tsugi-db-dbname/'$substitute_tsugi_db_dbname'/g' {} \;
find ./ -type f -not \( -path './api/storage/*' -o -path './api/storagetoclone/*'   \) ! -path "./setup.sh" -exec sed -i -e 's/substitute-mysql-db-user/'$substitute_mysql_db_user'/g' {} \;
find ./ -type f -not \( -path './api/storage/*' -o -path './api/storagetoclone/*'   \) ! -path "./setup.sh" -exec sed -i -e 's/substitute-mysql-db-password/'$substitute_mysql_db_password'/g' {} \;
find ./ -type f -not \( -path './api/storage/*' -o -path './api/storagetoclone/*'   \) ! -path "./setup.sh" -exec sed -i -e 's/substitute-tsugi-admin-password/'$substitute_tsugi_admin_password'/g' {} \;




cp ./client/.env.example ./client/.env.local
cp ./api/.env.example ./api/.env
cp ./api/laravel-echo-server-https-example.json ./api/laravel-echo-server.json
cp ./admin/.env.example ./admin/.env
cp ./trax-lrs/.env.example ./trax-lrs/.env
cp ./tsugi/tsugi-main-config.example.php  ./tsugi/config.php
cp ./tsugi/mod/curriki/tsugi-curriki-config.php  ./tsugi/mod/curriki/config.php


