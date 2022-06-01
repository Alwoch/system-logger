class VegMenu {
    showMenu() {
        console.log('-Vegetable s/w');
        console.log('-Greek salad');
        console.log('-Veg samosas');
    }
}
class NonVegMenu {
    showMenu() {
        console.log('-Jerk chicken');
        console.log('-Steak s/w');
        console.log('-Pepper steak');
    }
}
class HotelService {
    constructor() {
        this.vegMenu = new VegMenu();
        this.nonVegMenu = new NonVegMenu();
    }
    showMenu() {
        this.vegMenu.showMenu();
        this.nonVegMenu.showMenu();
    }
    showVegMenu() {
        this.vegMenu.showMenu();
    }
    showNonVegMenu() {
        this.nonVegMenu.showMenu();
    }
}
class HotelFacade {
    constructor() {
        this.hotelservice = new HotelService();
    }
    showMenu() {
        this.hotelservice.showMenu();
    }
    showVegMenu() {
        console.log('.........');
        console.log('Vegetable Menu');
        console.log('..........');
        this.hotelservice.showVegMenu();
    }
    showNonVegMenu() {
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
