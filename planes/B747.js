'use strict'

const Plane = require('./Plane.js');

module.exports = class B747 extends Plane{
    constructor(name, weight, taxingStatus, fuelLevel, callSign, boeingCode){
        super(name, weight, taxingStatus, fuelLevel, callSign)
        
        this.boeingCode = boeingCode;
    }

    getAirbusCode(){
        return this.airbusCode;
    }
}
