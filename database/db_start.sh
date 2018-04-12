DOCKER_VOLUME=semsakrebsler_db_volume
MYSQL_ROOT_PASSWORD=my-secret-pw
MYSQL_DATABASE=Semsakrebsler_DB
MYSQL_USER=dbuser
MYSQL_PASSWORD=dbpassword
CONTAINER_PORT=3306
HOST_PORT=3306
CONTAINERNAME=semsakreblser_sqldb

#ziehe dockerimage für mysql
docker pull mysql

#erstelle dockervolume
docker volume create $DOCKER_VOLUME

#starte dockercontainer aus image
docker run \
    --name $CONTAINERNAME \
    -e MYSQL_ROOT_PASSWORD=$MYSQL_ROOT_PASSWORD \
    -e MYSQL_DATABASE=$MYSQL_DATABASE \
    -e MYSQL_USER=$MYSQL_USER \
    -e MYSQL_PASSWORD=$MYSQL_PASSWORD \
    --mount type=volume,src=$DOCKER_VOLUME,dst=/var/lib/mysql \
    -p $HOST_PORT:$CONTAINER_PORT \
    -d \
    mysql:latest

#shellscripte auf container kopieren
docker cp db_init.txt $CONTAINERNAME:/db_init.txt

#bash auf container starten
docker exec -it $CONTAINERNAME bash


# # # # # # ab hier händisch weiter # # # #
#
# folgendes zeile für zeile eingeben und jede zeile mit enter bestätigen:
# 
# mysql -u root -p
# was hierfür oben in der variable steht-> MYSQL_ROOT_PASSWORD
# \. db_init.txt 
# quit
# exit
#
# # # # # # # # # # # # # # # # # # # # # # 