'use strict'

module.exports = class Plane {
    constructor(name, weight, taxingStatus, fuelLevel, callSign, passengers){
        this.name = name;
        this.taxingStatus = taxingStatus;
        this.weight = weight;
        this.fuelLevel = fuelLevel;
        this.callSign = callSign;
        this.passengers = passengers;
        
        this.destination;
        this.currentLocation;
        this.tripProgress;
        this.efficiency;
    }

    getTaxingStatus(){
        return this.taxingStatus;
    }
    setDestination(destination){
        this.destination = destination;
    }
    
    //Other get methods
}
