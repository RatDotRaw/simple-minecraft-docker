# minecraft-docker
minecraft dockerfiles for easy server

WARNING: This project is mostly functional.

I'm planning to work a bit more on it put no promises.

In the data dir, you find a file called config.
Change the config file to your needs and build the container.



Don't mind everything below this, I am using this as a public notepad.
7452461811165247495

docker run -i --restart unless-stopped --cpus="2" --memory=2048m -p 25565:25565 --volume=/home/pi/minecraft:/home/container/minecraft minecraft-docker

docker run --name=minecraft-server --volume=/home/pi/minecraft:/home/container/minecraft --volume=/home/container/minecraft --workdir=/home/container/minecraft -p 25565:25565 --restart=unless-stopped -t minecraft-docker:latest bash /home/container/data/startup.sh

