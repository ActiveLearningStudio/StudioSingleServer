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

Tried on Ubuntu, Amaozon Linux, Oracle Linux. This list will grow after testing
## Pre-Requisites
Docker version 19 or above
## Infrastructure

Before installing the application, we need DNS entries.  For that, Lets Encrypt generate SSL

For Lets Encrypt to work, add DNS records:

Copy public IP of the VM and put inside the DNS records like this.

Say for example, if the public IP of your VM is 132.226.36.47

You must create these A records in AWS Route 53 like below:

Login to the AWS Management Console and Search for Route53 Service.

![](image1.png)

Click on the Hosted Zones and then select the desired Domain Name to add the “A entry”.

Click on the “Create Record” Button 

![](images/image2.png)

From the below Screenshot, enter the A record name, Value (Public IP of the VM) and leave the other values to the default.

![](images/image3.png)

Click on the Create Record Button to finish creating the A Record for DNS.

Note that, we should create three A Records in Route 53 for currikistudio, tsugi, and trax

Example:

example.currikistudio.org 		132.226.36.47

example-tsugi.currikistudio.org 		132.226.36.47

example-trax.currikistudio.org 		132.226.36.47

This step is necessary to generate lets encrypt certificate which will be discussed later in this section
## Database VM: Postgres + MySQL
Before installing the Databases, follow the below steps

Install docker

Login to the terminal and switch to the root user.

sudo apt-get update -y

sudo apt-get install git -y

sudo apt-get install apt-transport-https Ca-certificates curl gnupg -y

curl -fsSL <https://download.docker.com/linux/ubuntu/gpg> | sudo gpg --dearmor -o/usr/share/keyrings/docker-archive-keyring.	gpg

sudo apt install docker.io -y

sudo systemctl start docker

sudo systemctl enable docker

cd ..

Install docker compose
`	`sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

`	`sudo chmod +x /usr/local/bin/docker-compose

`	`sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose

Then, run following commands

Go to the root level of the VM and clone the “ActiveLearningStudio-docker-db” repository:

`	`git clone https://github.com/ActiveLearningStudio/ActiveLearningStudio-docker-db.git curriki-db

cd curriki-db

cp .env.example .env

sudo mkdir -p /mnt/DBData/currikiprod1-mysqldata

sudo mkdir -p /mnt/DBData/currikiprod1-postgresdata

sudo mkdir -p /mnt/DBData/pgadmin1-data

sudo docker-compose up -d
##
## Application VM: CurrikiStudio Application (TODO)

1. Go to “ActiveLearningStudio-docker-containers” git repository and clone the same into root level of the VM

`	`git clone <https://github.com/ActiveLearningStudio/ActiveLearningStudio-docker-containers> curriki

1. Once the clone is completed, open the docker-compose.yml file and add the following config in the yaml

`  `currikiprod1-postgres:

`    `image: "postgres"

`    `container\_name: currikiprod1-postgres

`    `restart: unless-stopped

`    `tty: true

`    `ports:

`      `- ${POSTGRES\_EXPOSED\_PORT}:5432

`    `environment:

`      `POSTGRES\_USER: ${POSTGRES\_USER}

`      `POSTGRES\_PASSWORD: ${POSTGRES\_PASSWORD}

`      `POSTGRES\_DB: ${POSTGRES\_DB}

`      `PGDATA: /var/lib/postgresql/data/currikiprod1-postgresdata/

`    `volumes:

`      `- currikiprod1-postgresdata:/var/lib/postgresql/data/currikiprod1-postgresdata/

`      `- ./postgresscripts:/postgresscripts

`      `- ./postgresscripts/setup.sql:/docker-entrypoint-initdb.d/setup.sql:ro

`      `- ./postgresscripts/traxdb.sql:/docker-entrypoint-initdb.d/traxdb.sql:ro

`      `# - ./data/postgres/postgresql.conf:/var/lib/postgresql/data/currikiprod1-postgresdata/abc/postgresql.conf


currikiprod1-mysql:

`    `image: mysql:5.7.22

`    `container\_name: currikiprod1-mysql

`    `restart: unless-stopped

`    `tty: true

`    `volumes:

`      `- currikiprod1-mysqldata:/var/lib/mysql

`      `- ./mysqlscripts/tsugisetup.sql:/docker-entrypoint-initdb.d/tsugisetup.sql:ro

`      `# - ./tmp/database/setup.sql:/docker-entrypoint-initdb.d/setup.sql:ro

`      `# - ./tmp/database/install\_db.sql:/docker-entrypoint-initdb.d/init.sql:ro

`      `- ./mysqlscripts:/mysqlscripts

`    `environment:

`      `MYSQL\_DATABASE: ${MYSQL\_DATABASE}

`      `MYSQL\_USER: ${MYSQL\_USER}

`      `MYSQL\_PASSWORD: ${MYSQL\_PASSWORD}

`      `MYSQL\_ROOT\_PASSWORD: ${MYSQL\_ROOT\_PASSWORD}

`      `SERVICE\_TAGS: dev

`      `SERVICE\_NAME: mysql

`    `# command: mysqld --init-file="/tmp/database/install\_db.sql"

`    `ports:

`      `- ${MYSQL\_LOCAL\_PORT}:3306

currikiprod1-phpmyadmin:

`    `depends\_on:

`      `- currikiprod1-mysql

`    `image: phpmyadmin/phpmyadmin

`    `container\_name: currikiprod1-phpmyadmin

`    `restart: always

`    `ports:

`      `- ${PHPMYADMIN\_EXPOSED\_PORT}:80

`    `volumes:

`      `- ./php.ini:/usr/local/etc/php/php.ini

`    `environment:

`      `PMA\_HOST: currikiprod1-mysql

`      `MYSQL\_ROOT\_PASSWORD: ${MYSQL\_ROOT\_PASSWORD}

`      `PMA\_ABSOLUTE\_URI: ${PMA\_ABSOLUTE\_URI}

`    `networks:

`      `- currikiprod1-laravel

1. First comment out all the above except “currikiprod1-postgres” in the yaml file and let us do it step by step:

Add the below systems volumes below the “currikiprod1-postgres” block

volumes: #provide volume

`    `currikiprod1-mysqldata:

`      `driver: local

`      `driver\_opts:

`        `o: bind

`        `type: none

`        `device: /mnt/DBData/currikiprod1-mysqldata

`    `currikiprod1-postgresdata:

`      `driver: local

`      `driver\_opts:

`        `o: bind

`        `type: none

`        `device: /mnt/DBData/currikiprod1-postgresdata

`    `pgadmin1-data:

`      `driver: local

`      `driver\_opts:

`        `o: bind

`        `type: none

`        `device: /mnt/DBData/pgadmin1-data

Copy the mysqlscript and postgresscripts from curriki-db folder to currki folder:

`	`cp -r mysqlscript/ /curriki/mysqlscript/

`	`cp -r postgresscripts/ /currik/postgresscripts 

Once the copied, remove the curriki-db repo from the VM which will save the memory and space.

`	`rm -rf curriki-db/

Now, create the following environment variables for postgresdb which is defined in the yaml file:

`	`POSTGRES\_EXPOSED\_PORT}=5434

POSTGRES\_USER=<<pass db username>>

POSTGRES\_PASSWORD=<<pass secured value>>

POSTGRES\_DB=<<pass db name>>

1. Now, run the below command 

docker swarm init

set -a 

docker-compose up

![](images/image4.png)

To test the above db connection, ssh into the application server

`	`ssh root@<public ip of the vm>

and then run

`	`docker ps

![](images/image5.png)

`	`docker exec -it currikiprod1-postgres

and then connect to the currikdb to test the connect and created tables

`	`psql -U root -d currikidb

![](images/image6.png)



`	`\dt – to visualize all tables

![](images/image7.png)

`	`\l to check the list of databased currently available in postgresdb

![](images/image8.png)

`	`set -a

`	`source .env

`	`env docker stack deploy -c docker-compose.yml currikistack

`	`docker service ls

`	 `![](images/image9.png)

`	`To test the database again for tusgi,

`		`docker exec -it <<enter docker service name>>

`	`and then connect to the currikdb to test the connect and created tables

`		`psql -U root -d currikidb

`		`\l to check the list of databased currently available in postgresdb

![](images/image10.png)

1. Let us install “currikiprod1-mysql” in the yaml file and let us do it step by step:

`	`Now, create the following environment variables for postgresdb which is defined in the yaml file:

`	`MYSQL\_USER=<<pass db username>>

MYSQL\_PASSWORD=<<pass secured value>>

MYSQL\_DATABASE=<<pass db name>>

MYSQL\_ROOT\_PASSWORD=<<pass the root password>>

`	`MYSQL\_LOCA\_PORT}=3307

Once setting up the parameter, again repeat the following steps:

`	`set -a

`	`source .env

`	`env docker stack deploy -c docker-compose.yml currikistack

![](images/image11.png)

Before setting up every environment, let us first run the stacks.

Navigate to client folder under curriki, and pass “ls” command.

`	`![](images/image12.png)

In every folder, there will be .env.example as shown in the above screenshot. Rename the files as follows:

`	`cp .env.example .env.local

`	`cp .env.example .env

`	`![](images/image13.png)

Do the foll0wing steps for api, trax-lrs, and tsugi

Navigate to api folder under curriki, and pass “ls” command.

`	`cp .env.example .env

Navigate to trax-lrs folder under curriki, and pass “ls” command.

`	`cp .env.example .env

Navigate to tsugi folder under curriki, and pass “ls” command and do the following steps.

`	`rm tsugi-main-config.example.php

`	`mv tsugi-main-config.example1.php tsugi-main-config.example.php

`	`ls 

`	`cd mod/curriki/

`	`ls

`	`cp tsugi-curriki-config.php config.php

cp .env.example .env

![](images/image14.png)

Once all the above is done, navigate back to the curriki root directory.

Open docker-compose.yml file and go to the “currikiprod-api” to set the environment variable for “TAG”

`	`vim .env

`	`and add the value for TAG

`		`TAG=develop

Then, navigate to the api folder in curriki, and do the following:

`	`du -hs storage

`	`rm -rf storage

`	`cp storagetoclone/ storage

![](images/image15.png)

Remember we have created the A Entry in AWS Route53. Now that needs to configured in the application.

Now, let us run again the following steps:

`	`set -a

`	`source .env

Once it is done. Your application will be deployed on the DNS provided like example.currikistudio.org
