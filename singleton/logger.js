// Logger classes
class Logger {
 constructor(user) {
     Logger.userDetails = user;
 }
 static logIn(user) {
     if (Logger.loggedInuser != null) {
         return Logger.loggedInuser;
     }
     Logger.loggedInuser = new Logger(user);
 }
 static getLoggedInUser() {
     return Logger.userDetails;
 }
 static logOut() {
     Logger.loggedInuser = null;
 }
}
Logger.userDetails = {};
class inputDataFromKeyboard {
 inputData() {
     return "Data from keyboard";
 }
}
class inMemoryy {
 constructor() {
     this.memory = [];
 }
 storeData(data) {
     console.log("Data has been stored in memory");
     if (!this.memory.push(data)) {
         throw new Error("Data could not be stored");
     }
     return data;
 }
 retrieveData(basis) {
     console.log("Data has been retrieved from memory");
     return this.memory;
 }
}
class CPU {
 processData(data) {
     console.log("Data has been processed by the CPU");
     return data;
 }
}
class Monitor {
 displayData(data) {
     console.log(data);
 }
}
class Errors {
 handleError(error) {
     console.log("Error: " + error);
 }
}
class Computer {
 //Methods
 constructor(inputDevice, memory, processor, errors, displayDevice) {
     this.inputDevice = inputDevice;
     this.memory = memory;
     this.processor = processor;
     this.errors = errors;
     this.displayDevice = displayDevice;
 }
 input() {
     return this.inputDevice.inputData();
 }
 store(data) {
     //Delegate the responsibility to another class
     return this.memory.storeData(data);
 }
 retrieve(data) {
     return this.memory.retrieveData(data);
 }
 process(data) {
     this.processor.processData(data);
 }
 handleError(error) {
     this.errors.handleError(error);
 }
 display(data) {
     this.displayDevice.displayData(data);
 }
 //Setters and Getters
 setInputDevice(inputDevice) {
     this.inputDevice = inputDevice;
 }
 getInputDevice() {
     return this.inputDevice;
 }
 //Setter and getter for memory
 setMemory(memory) {
     this.memory = memory;
 }
}
class ChargeableComputer extends Computer {
 constructor(inputDevice, memory, processor, errors, displayDevice) {
     super(inputDevice, memory, processor, errors, displayDevice);
     // this.charger = chargerPc;
 }
 chargerPc() {
     console.log("Charging...");
 }
}
//Liskov Substitution Principle states that a class should be substitutable for its subclasses
function TestComputer(computer) {
 computer.input();
 computer.store("This Data from keyboard");
 computer.retrieve("This Data from memory");
 computer.process("Data from memory");
 computer.display("Processed data from memory");
 computer.handleError("Error");
}
function ChargeComputer(computer) {
 computer.input();
 computer.store("This Data from keyboard");
 computer.retrieve("This Data from memory");
 computer.process("Data from memory");
 computer.display("Processed data from memory");
 computer.handleError("Error");
 computer.chargerPc();
}
// let computer1 = new Computer(new inputDataFromKeyboard(), new inMemoryy(), new CPU(), new Errors(), new Monitor());
// TestComputer(computer1);
// let computer2 = new ChargeableComputer(new inputDataFromKeyboard(), new inMemoryy(), new CPU(), new Errors(), new Monitor());
// ChargeComputer(computer2);
// Logger.logIn({name: "John", password: '12345'});
// console.log(Logger.getLoggedInUser());
// Logger.logOut();
// Logger.logIn({name: "Arafat", password: '12345'});
// console.log(Logger.getLoggedInUser());
// Logger.logIn({name: "Brisa", password: '12345'});
// console.log(Logger.getLoggedInUser());
class SecureComputer extends Computer {
 constructor(inputDevice, memory, processor, errors, displayDevice) {
     super(inputDevice, memory, processor, errors, displayDevice);
     // this.logger = logger;
 }
 setLogger(logger) {
     this.logger = logger;
 }
 getLogger() {
     return this.logger;
 }
}
// function SecureComp(computer:SecureComputer){
//     computer.input();
//     computer.store('Data is being stored');
//     computer.retrieve('Data is being retrieved');
//     computer.process('Data processing happening');
//     computer.display('Displaying on monitor');
//     computer.handleError('');
//     computer.setLogger(Logger.logIn({name: "John", password: '12345'}));
//     console.log(computer.getLogger());
//     computer.setLogger(Logger.getLoggedInUser());
//     console.log(computer.getLogger());
//     // computer.setLogger(Logger.logOut());
//     // console.log(computer.getLogger());
// }
let computer3 = new SecureComputer(new inputDataFromKeyboard(), new inMemoryy(), new CPU(), new Errors(), new Monitor());
// SecureComp(computer3);
computer3.setLogger({ name: 'Nina', password: '12345' });
console.log(computer3.getLogger());
// let secureComputer = new SecureComputer(new inputDataFromKeyboard(), new inMemoryy(), new CPU(), new Errors(), new Monitor());
// secureComputer.setLogger(new Logger({name: "John", password: '12345'}));
// console.log(secureComputer.getLogger());
