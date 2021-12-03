# minecraft-docker
minecraft dockerfiles for easy server

WARNING: This project is mostly functional.

I'm planning to work a bit more on it put no promises.

In the data dir, you find a file called config.
Change the config file to your needs and build the container.

For the docker mount, you need to mount it to /home/container/minecraft


this should be a pretty solid start command:
docker run -i --restart unless-stopped --cpus="2" --memory=2048m -p 25565:25565 --volume=/home/pi/minecraft:/home/container/minecraft minecraft-docker
