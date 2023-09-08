import { Car } from "./car";
import { DoorsCar } from "./car";

class ElectricCar extends Car {
    // Properties unique to ElectricCar
    private _range: number
    // Constructor
    constructor(make: string, color: string, range: number, doors: DoorsCar = 4) {
        super(make, color, doors)
        this._range = range
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
        console.log(`${this.worker()} está carregando`)
    }

    brake(): string {
        return `${this.worker()} está freando com freios regenerativos.`
    }

}

let spark = new ElectricCar('Spark Motors', 'silver', 124, 2);
let eCar = new ElectricCar('Electric Car Co.', 'black', 263);
console.log(eCar.doors);
spark.charge();
console.log(spark.brake());