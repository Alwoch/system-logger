class Produce {
    work() {
        console.log('production workshop');
    }
}
class Assemble {
    work() {
        console.log('Assembly workshop');
    }
}
class Sales {
    work() {
        console.log('Sales workshop');
    }
}
class Vehicle {
    constructor(workshop) {
        this.workshop = workshop;
    }
    manufacture() { }
    setWorkshop(workshop) {
        this.workshop = workshop;
    }
}
class Car extends Vehicle {
    manufacture() {
        console.log('Car has been Manufactured');
        this.workshop.work();
    }
}
class Bike extends Vehicle {
    manufacture() {
        console.log('Bike has been Manufactured');
        this.workshop.work();
    }
}
let vehicle1 = new Car(new Produce());
let workshop = new Sales();
vehicle1.setWorkshop(workshop);
vehicle1.manufacture();
console.log('.........');
