//static methods are accessible via the class name only
// private means its accessible within the class

//singleton pattern
    //create a single instance of a class and provide a global access to it
class Logger {
 //There should only be one logged in user at a time
 private static loggedInUser:object;
 private  static userDetail={};

 private constructor(user:object){
  Logger.userDetail=user;
 }

 //we're assuming the login credentials of the user are stored in the onject passed in the login function 

 static login(user:object){
   if(Logger.loggedInUser !=null){
  //  //create an instance of a logged in user only when logged in user is null. Here we're ensuring that there is only one logged in user at a time.
    return Logger.loggedInUser
   }
   Logger.loggedInUser=new Logger(user)
 }

 static getLoggedInUser(){
  return Logger.userDetail;
 }

 static logOut(){
  Logger.loggedInUser=null;
 }
}

//static: Class Members
//not static: An object member
//To create a single instance, we must limit the instantiation of a class to itself
//we can prevent the class from being instantiated from outside by hiding its constructor.

Logger.login({name:'Alwoch',password:'1234'});
console.log(Logger.getLoggedInUser());
Logger.logOut()
Logger.login({name:'Massy',password:'1234'});
console.log(Logger.getLoggedInUser());
Logger.login({name:'Fatuma',password:'1234'});
console.log(Logger.getLoggedInUser());

class Computer {
 private logger:Logger;

 setLogger(logger:Logger){
  this.logger=logger;
 }

 getLogger(){
  return this.logger;
 }
}





