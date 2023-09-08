"use strict";
class Car {
    // Constructor
    constructor(make, color, doors = 4) {
        this._make = make;
        this._color = color;
        this._doors = doors;
    }
    // Accessors
    get make() {
        return this._make;
    }
    set make(make) {
        this.make = make;
    }
    get color() {
        return `A cor do carro é ${this._color}`;
    }
    set color(color) {
        this._color = color;
    }
    get doors() {
        return this._doors;
    }
    set doors(doors) {
        this._doors = doors;
    }
    // Methods
    accelerate(speed) {
        return `${this.worker()} acelera até ${speed} km/h.`;
    }
    brake() {
        return `${this.worker()} está freando com o sistema padrão de freios.`;
    }
    turn(direction) {
        return `${this.worker()} está virando para a ${direction}.`;
    }
    worker() {
        return this._make;
    }
}
let myCar1 = new Car('Cool Car Company', 'blue', 2);
console.log(myCar1.color);
console.log(myCar1._color);
// let myCar2 = new Car('Galaxy Motors', 'red', 3)
let myCar3 = new Car('Galaxy Motors', 'gray');
console.log(myCar3.doors);
console.log(myCar1.accelerate(35));
console.log(myCar1.brake());
console.log(myCar1.turn('right'));
