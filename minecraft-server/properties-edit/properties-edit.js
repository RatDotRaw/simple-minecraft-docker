var PropertiesReader = require('properties-reader');

const propertiesPath = "/app/container/server.properties";
var properties = PropertiesReader(propertiesPath, { writer: { saveSections: true } });

// getting environment vars
var propertiesValue = {};
propertiesValue.rconPort = "test" //process.env.RCON_PORT;
propertiesValue.enabelCommandBlock = process.env.ENABLE_COMMAND_BLOCK;
propertiesValue.gamemode = process.env.GAMEMODE;
propertiesValue.motd = process.env.MOTD;
propertiesValue.queryPort = process.env.QUERY_PORT;
propertiesValue.pvp = process.env.PVP;
propertiesValue.difficulty = process.env.DIFFICULTY;
propertiesValue.maxPlayers = process.env.MAX_PLAYERS;
propertiesValue.onlineMode = process.env.ONLINE_MODE;
propertiesValue.viewDistance = process.env.VIEW_DISTANCE;
propertiesValue.serverIp = process.env.SERVER_IP;
propertiesValue.serverPort = process.env.SERVER_PORT;
propertiesValue.enableRCON = process.env.ENABLE_RCON;
propertiesValue.resourcePack = process.env.RESOURCE_PACK;
propertiesValue.RCONPassword = process.env.RCON_PASSWORD;
propertiesValue.forceGamemode = process.env.FORCE_GAMEMODE;
propertiesValue.whiteList = process.env.WHITE_LIST;
// propertiesValue.spawnProtection = SPAWN_PROTECTION;


// Object.keys(propertiesValue).forEach(key => {
//     console.log( propertiesValue[key]);
// });

// set properties values
properties.set("test.key", "true");
properties.each((key, value) => {
    if (value != "") {
        properties.set(key, value);
    }
});

// write to properties file
properties.save(propertiesPath, function then(err, data) {
    if (err) {
        console.log("error in write a properties file");
    }
    console.log("saved data to properties file");
});

// read all properties
console.log('properties of :'. propertiesPath);
properties.each((key, value) => {
    console.log("key: ", key + ", value: " + value);
});