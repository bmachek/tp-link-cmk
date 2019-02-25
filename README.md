# tp-link-cmk
Monitor the power usage of TP-Link plugs in check_mk

This repo contains a datasource program for querying the power consumption of TP-Link WiFi power plugs. (tp-link-power.js).
The datasource program depends on tplink-smarthome-api. You have to install it as odm-site-user with: npm install tplink-smarthome-api
tp-link-cmk is the check_mk plugin to handle the output of the datasource program.

You have to put the datasource script to local/bin/tp-link-power.js and the plugin to local/share/check_mk/checks/tp-link-power.

Both scripts have to be executable (chmod +x)

To integrate this check into check_mk you have to create "Individual program call instead of agent access" datasource program rule.
The commandline to execute is: tp-link-power.js $HOSTNAME$

Create a host for each power plug.

In time I will extend the documentation. ;-)
