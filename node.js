module.exports = function(RED) {

    "use strict";
    const BeaconScanner = require('./scanner.js');
    const scanner = new BeaconScanner();

    function BLEBeaconNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;

        scanner.onadvertisement = (ad) => {
	    if(ad !== null)
	    {
                node.send({
                   payload: ad
                });
	    }
        };

        scanner.startScan().then(() => {
            node.status({
                fill: "green",
                shape: "dot",
                text: "Scanning Started"
            });
        }).catch((error) => {
            node.status({
                fill: "red",
                shape: "dot",
                text: error
            });
        });

        node.on('close', function(done) {
            scanner.stopScan();
            done();
        });
        
    }
    RED.nodes.registerType("BLE Beacon Scanner",BLEBeaconNode);
}



