"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    // Constructor
    constructor(make, color, doors = 4) {
        this._make = make;
        this._color = color;
        this._doors = doors;
        Car.numberOfCars++;
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
    static getNumberOfCars() {
        return Car.numberOfCars;
    }
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
exports.Car = Car;
// Properties
Car.numberOfCars = 0;
