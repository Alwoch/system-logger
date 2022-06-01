interface Menu{
 showMenu():void
}

class VegMenu implements Menu{
 showMenu(): void {
     console.log('-Vegetable s/w');
     console.log('-Greek salad');
     console.log('-Veg samosas');
     
 }
}

class NonVegMenu implements Menu{
 showMenu(): void {
     console.log('-Jerk chicken');
     console.log('-Steak s/w');
     console.log('-Pepper steak');
 }
}

class HotelService implements Menu {
 private vegMenu:VegMenu = new VegMenu();
 private nonVegMenu: NonVegMenu = new NonVegMenu();

 showMenu(): void {
     this.vegMenu.showMenu();
     this.nonVegMenu.showMenu();
 }

 showVegMenu(): void {
     this.vegMenu.showMenu();
 }

 showNonVegMenu(): void {
     this.nonVegMenu.showMenu();
 }
}

class HotelFacade{
 private hotelservice: HotelService = new HotelService();

 showMenu(): void {
     this.hotelservice.showMenu();
 }

 showVegMenu():void{
     console.log('.........');
     console.log('Vegetable Menu');
     console.log('..........');

     this.hotelservice.showVegMenu();
 }

 showNonVegMenu():void{
     console.log('.........');
     console.log('Non Vegetable Menu');
     console.log('..........');
     this.hotelservice.showNonVegMenu();
 }
}

let hotelfacade = new HotelFacade();
hotelfacade.showVegMenu();
hotelfacade.showMenu();
hotelfacade.showNonVegMenu();