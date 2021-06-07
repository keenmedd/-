# KEEN

Ficus@DESKTOP-D4US4KQ MINGW64 ~/Desktop/KEEN (main)
$ ls -l
total 17

drwxr-xr-x 1 Ficus 197121 0 май 31 19:06 docker-compose/

drwxr-xr-x 1 Ficus 197121 0 май 31 18:52 docker-reverseProxy/

drwxr-xr-x 1 Ficus 197121 0 май 31 18:53 express-app/

drwxr-xr-x 1 Ficus 197121 0 май 31 18:54 keen-app/

-rw-r--r-- 1 Ficus 197121 6 май 31 18:52 README.md



From docker-compose folder you can start the docker:
1. cd docker-compose
2. Choose step from the following items:
    # start containers in detached mode (-d)
    $ docker-compose up -d

    # stop running containers
    $ docker-compose stop

    # stop containers and remove containers, networks and images
    $ docker-compose down
