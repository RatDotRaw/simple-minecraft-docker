#!/bin/bash

source /home/data/config


option_0 () { #manual setup
    echo "+=+ Manual setup selected"
}

option_1 () { #automatic setup
    echo "+=+ Automatic setup selected."
    echo "+=+ Downloading jar from $server."
    wget --continue -O /home/container/$jar_name $server

    create_startscript
    start_server
}

option_2 () {
    echo "+=+ I am a lazy dev."
    echo "+=+ warning, I never tested if option 2 actually works."

    echo "+=+ Download link(zip) selected."
    echo "+=+ Downloading file from $server."
    wget --continue -O /home/container/*.zip $server
    echo "+=+ Unzipping file."
    unzip -d /home/container serverzip.zip
    echo "+=+ Removing zip file."
    rm --force *.zip

    create_startscript
    start_server
}


start_server () {
    echo "+=+ Starting server."
    bash /home/container/start.sh
}

create_startscript () {
    echo "+=+ Creating start.sh."
    echo "
    #!/bin/bash
    $start_command
    " > /home/container/start.sh
}

if [ "$option" == "0" ]; then
    option_0
elif [ "$option" == "1" ]; then
    option_1
elif [ "$option" == "2" ]; then
    option_2
else
    echo "+=+ Invalid option."
fi

echo "+=+ Exiting..."