
export type DoorsCar = 2 | 4

interface Vehicle {
    make: string;
    color: string;
    doors: number;
    accelerate(speed: number): string;
    brake(): string;
    turn(direction: 'left' | 'right'): string;
}

export class Car implements Vehicle {
    // Properties
    private static numberOfCars: number = 0
    private _make: string
    private _color: string
    private _doors: DoorsCar

    // Constructor
    constructor(make: string, color: string, doors: DoorsCar = 4) {
        this._make = make
        this._color = color
        this._doors = doors
        Car.numberOfCars++
    }

    // Accessors
    get make() {
        return this._make
    }

    set make(make) {
        this.make = make
    }

    get color() {
        return `A cor do carro é ${this._color}`
    }

    set color(color) {
        this._color = color
    }

    get doors() {
        return this._doors
    }

    set doors(doors) {
        this._doors = doors
    }

    // Methods
    static getNumberOfCars() {
        return Car.numberOfCars
    }

    accelerate(speed: number): string {
        return `${this.worker()} acelera até ${speed} km/h.`
    }

    brake(): string {
        return `${this.worker()} está freando com o sistema padrão de freios.`
    }

    turn(direction: 'left' | 'right'): string {
        return `${this.worker()} está virando para a ${direction}.`
    }

    protected worker(): string {
        return this._make
    }
}