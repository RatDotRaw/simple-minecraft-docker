const fs = require("fs");
var PropertiesReader = require("properties-reader");

// settings
const propFile = "/app/container/server.properties";
// const propFile = "test.properties";

var props = PropertiesReader(propFile, {
    writer: { saveSections: false },
});

// getting environment vars
var properties = {};
properties["enable-command-block"] = process.env.ENABLE_COMMAND_BLOCK;
properties["gamemode"] = process.env.GAMEMODE;
properties["motd"] = process.env.MOTD;
properties["query.port"] = process.env.QUERY_PORT;
properties["pvp"] = process.env.PVP;
properties["difficulty"] = process.env.DIFFICULTY;
properties["max-players"] = process.env.MAX_PLAYERS;
properties["online-mode"] = process.env.ONLINE_MODE;
properties["view-distance"] = process.env.VIEW_DISTANCE;
properties["server-ip"] = process.env.SERVER_IP;
properties["server-port"] = process.env.SERVER_PORT;
properties["enable-rcon"] = process.env.ENABLE_RCON;
properties["resource-pack"] = process.env.RESOURCE_PACK;
properties["rcon.password"] = process.env.RCON_PASSWORD;
properties["force-gamemode"] = process.env.FORCE_GAMEMODE;
properties["white-list"] = process.env.WHITE_LIST;
properties["spawn-protection"] = SPAWN_PROTECTION;

// set properties values
Object.keys(properties).forEach((key) => {
    if (!properties[key] == "") {
        console.log("properties-edit::updating value: key: ", key, " value:", properties[key]);
        props.set(key, properties[key]);
    } else {
        // console.log("key is empty:", key);
    }
});

// write to properties file
props.save(propFile, function then(err, data) {
    if (err) {
        console.log("properties-edit::error: could not write propertes file");
    }
    console.log("properties-edit::saved data to ", propFile);
});
