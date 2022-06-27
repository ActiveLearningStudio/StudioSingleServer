Active Learning Studio Setup Instructions

# Introduction
CurrikiStudio enables you to create interactive learning content and publish them anywhere like Google Classroom, LMSs etc.
This repo makes it easy to install currikistudio as docker containers in cloud VM (AWS, Azure, GCP, Linode etc)

# Components
## Applications
Following applications are the part of CurrikiStudio

1. React Frontend application
2. Backend API
3. Tsugi for LTI
4. Trax LRS

## Databases
1. Postgres (For API, For LRS)
1. MySQL (For Tsugi)

## Minimum Requirements
- One Linux VMs (8GB RAM 4 VCPUs, Storage 80GB)
- Ubuntu, Amaozon Linux, Oracle Linux (Windows not supported)


## Pre-Requisites
Docker version 19 or above


  
## Docker Installation (For Ubuntu 18.04, 20.04)
  
 Install docker

Login to the terminal and switch to the root user.

    sudo apt-get update -y
    sudo apt-get install apt-transport-https ca-certificates curl gnupg -y
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
    sudo apt install docker.io -y
    sudo systemctl restart docker
    sudo systemctl enable docker
    sudo curl -L https://github.com/docker/compose/releases/download/1.28.4/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
    sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose


## Infrastructure

Before installing the application, we need DNS entries. 

For Lets Encrypt to work, add DNS records:

Copy public IP of the VM and put inside the DNS records like this.

Say for example, if the public IP of your VM is 132.226.36.47, and your domain (where you want to install studio) is example.curriki.org

You must create three A records in your DNS provider like below:

### AWS Route 53 example

Login to the AWS Management Console and Search for Route53 Service.
Click on the Hosted Zones and then select the desired Domain Name to add the “A entry”.


![](images/image1.png)

Click on the “Create Record” Button 

![](images/image2.png)

From the below Screenshot, enter the A record name, Value (Public IP of the VM) and leave the other values to the default.

Main Record

![](images/record-3.png)

Tsugi Record

![](images/record-2.png)

Trax Record

![](images/record-1.png)




Click on the Create Record Button to finish creating the A Record for DNS.

Note that, we should create three A Records in Route 53 for currikistudio (main, site tsugi, and trax)

Example:

    example.curriki.org             132.226.36.47
    example-tsugi.curriki.org       132.226.36.47
    example-trax.curriki.org        132.226.36.47

This step is necessary to generate lets encrypt certificate which will be discussed later in this section

## Studio Installation



Go to the root level of the VM and clone the this repo:

> git clone https://github.com/ActiveLearningStudio/StudioSingleServer curriki

    cd curriki
    cp .env.example .env
    cp api/.env.example api/.env
    cp client/.env.example client/.env
    cp client/.env.example client/.env.local
    cp trax-lrs/.env.example trax-lrs/.env
    cp tsugi/config.example.php tsugi/config.php
    cp tsugi/mod/curriki/config.example.php tsugi/mod/curriki/config.php

Change the content of ./.env like database ports / passwords according to your own choice

Example:

    TAG=latest
    DB_HOST=currikiprod1-postgres
    DB_PORT=5432
    DB_DATABASE=dbstudio
    DB_USERNAME=root
    DB_PASSWORD=password
    MYSQL_DATABASE=dbstudio
    MYSQL_USER=curriki
    MYSQL_PASSWORD=password
    MYSQL_ROOT_PASSWORD=password
    MYSQL_LOCAL_PORT=3306
  

Create folders for database persistent storage as below

    sudo mkdir -p /mnt/DBData/currikiprod1-mysqldata
    sudo mkdir -p /mnt/DBData/currikiprod1-postgresdata
    sudo mkdir -p /mnt/DBData/pgadmin1-data
    sudo rm -rf api/storage
    sudo mv api/storagetoclone api/storage
    

Replace these texts in the files below:

1. substitute-terraform-domain.com => example.curriki.org
2. substitute-terraform-tsugi-domain.com => example-tsugi.curriki.org
3. substitute-terraform-trax-domain.com => example-trax.curriki.org
4. substitute-postgres-db-host => currikiprod1-postgres
5. substitute-postgres-port => 5432
6. substitute-postgres-db => dbcurriki
7. substitute-postgres-user => root
8. substitute-postgres-password => password
9. substitute-lrs-db-database => trax
10. substitute-mysql-db-host => currikiprod1-mysql
11. substitute-mysql-db-port => 3306
12. substitute-tsugi-db-dbname=> tsugi
13. substitute-mysql-db-user => curriki
14. substitute-mysql-db-password => password
15. substitute-tsugi-admin-password => admin123


Files list to replace
    1. ./init-lets-encrypt.sh
    2. ./data/nginx/prod-conf/app.conf
    3. ./data/nginx/certbot-conf/app.conf
    4. ./api/.env
    5. ./client/.env
    6. ./client/.env.local
    7. ./trax-lrs/.env
    8. ./tsugi/config.php
    9. ./tsugi/mod/curriki/config.php



Now, run the below command 

##Generate SSL

    chmod +x init-letsencrypt.sh
    ./init-letsencrypt.sh

Deploy application
    
    docker swarm init
    set -a 
    source .env
    env docker stack deploy -c docker-compose.yml currikistack

Application can take 10 minutes to deploy

Once it is done. Your application will be deployed on the DNS provided like example.curriki.org

  
  
  
  
  
  
  
  
  
  
  
