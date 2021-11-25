'use strict'

const Plane = require('./Plane.js');

module.exports = class A380 extends Plane {
    constructor(name, weight, taxingStatus, fuelLevel, callSign, airbusCode){
        super(name, weight, taxingStatus, fuelLevel, callSign)
        
        this.airbusCode = airbusCode;
    }
    getAirbusCode(){
        return this.airbusCode;
    }
    
}
