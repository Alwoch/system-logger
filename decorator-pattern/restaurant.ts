// Component 
interface Coffee {
 getCost(): number;
 getIngredients(): string;
}

// Concrete Component 
class SimpleCoffee implements Coffee {
 getCost(): number{
     return 6000; 
 }
 getIngredients(): string {
     return "Water and Coffee"
 }
}

// Base Decorator 
abstract class CoffeeDecorator implements Coffee {
 protected decoratedCoffee: Coffee; 
 constructor(decoratedCoffee: Coffee){
     this.decoratedCoffee = decoratedCoffee;
 }
 getCost(): number{
     return this.decoratedCoffee.getCost();
 }
 getIngredients(): string {
     return this.decoratedCoffee.getIngredients();
 }
}

// Concrete Decorators
class Latte extends CoffeeDecorator{
 getCost(): number{
    return this.decoratedCoffee.getCost() + 4000; 
 }
 getIngredients(): string {
     return this.decoratedCoffee.getIngredients() +' ,plus foam gives us Latte.'
 }
}

class Capuccino extends CoffeeDecorator {
 getCost(): number{
     return this.decoratedCoffee.getCost() + 6000;
 }
 getIngredients(): string {
     return this.decoratedCoffee.getIngredients() + ', chocolate Milk to make a capuccino'
 }
}

let coffee:Coffee = new SimpleCoffee(); 
console.log(coffee.getCost());
console.log(coffee.getIngredients());

let latte:Coffee = new Latte(coffee); 
console.log(latte.getCost());
console.log(latte.getIngredients());

let capuccino:Coffee = new Capuccino(latte);
console.log(capuccino.getCost());
console.log(capuccino.getIngredients());