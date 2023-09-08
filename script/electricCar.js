"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const car_1 = require("./car");
class ElectricCar extends car_1.Car {
    // Constructor
    constructor(make, color, range, doors = 4) {
        super(make, color, doors);
        this._range = range;
    }
    // Accessors
    get range() {
        return this._range;
    }
    set range(range) {
        this._range = range;
    }
    // Methods
    charge() {
        console.log(`${this.worker()} está carregando`);
    }
    brake() {
        return `${this.worker()} está freando com freios regenerativos.`;
    }
}
let spark = new ElectricCar('Spark Motors', 'silver', 124, 2);
let eCar = new ElectricCar('Electric Car Co.', 'black', 263);
console.log(eCar.doors);
spark.charge();
console.log(spark.brake());
