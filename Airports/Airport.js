module.exports = class Airport {
    constructor(location, name, capacity){
        this.location = location;
        this.name = name;
        this.capacity = capacity;

        this.passengersWaiting = 0;
        this.busy = false;
        this.fuelLevel = 150;
    }

}