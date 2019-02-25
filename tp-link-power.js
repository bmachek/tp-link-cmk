#!/usr/bin/env node

var host = process.argv[2]

const { Client } = require('tplink-smarthome-api');
const client = new Client();

const plug = client.getDevice({'host': host}).then((device)=>{
	device.getInfo().then(logPower);
});


function logPower(data)  {
	var power = data.emeter.realtime.power;
	var alias = data.sysInfo.alias;
	alias = alias.replace(/ /, "_");
	console.log("<<<tp-link-power>>>");
	console.log(host + " " + alias  + " " + power);
}
