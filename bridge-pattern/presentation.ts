interface Workshop{
 work():void;
}

class Produce implements Workshop{
 work(): void {
  console.log('production workshop');
 }
}

class Assemble implements Workshop{
 work(): void {
  console.log('Assembly workshop');
 }
}

class Sales implements Workshop{
 work(): void {
  console.log('Sales workshop');
 }
}

abstract class Vehicle{
 protected workshop:Workshop;

 constructor(workshop:Workshop){
  this.workshop = workshop;
  
 }
 manufacture(){}
 setWorkshop(workshop:Workshop){
  this.workshop=workshop;
 }
}

class Car extends Vehicle{
 manufacture(): void {
  console.log('Car has been Manufactured');
  this.workshop.work();
 }
}

class Bike extends Vehicle{
 manufacture(): void {
  console.log('Bike has been Manufactured');
  this.workshop.work();
 }
}

let vehicle1=new Car(new Produce());
let workshop=new Sales();
vehicle1.setWorkshop(workshop);
vehicle1.manufacture();
console.log('.........');

