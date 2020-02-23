# node-red-contrib-blebeacon-scanner

Node to allow Node-RED scan for the following :
* iBeacons
* EddyStones
* Estimote
* Other Advertising Messages

## Dependencies
@abandonware/noble


## Installation
### for Raspberry Pi
Install Bluetooth drivers.
```
> sudo apt-get install libbluetooth-dev libudev-dev pi-bluetooth
```

```
> npm install @abandonware/noble
```



## Thanks
This node uses code of Beacon data scanner for Node.js created by @futomi.

https://github.com/futomi/node-beacon-scanner#beaconscanneradvertisement-object

