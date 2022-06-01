//implementing the strategy pattern
interface LoginStrategy{
 login(userCredentials:object):boolean;
}

class LoginWithEmailAndPassword implements LoginStrategy{
  login(userCredentials: object): boolean {
    let email=userCredentials["email"];
    let password=userCredentials["password"];

    if(!email || !password){
      throw new Error('invalid login credentials');
    }
    return true;
  }
}

class LoginWithUsernameAndPassword implements LoginStrategy{
  login(userCredentials: object): boolean {
    let username=userCredentials["username"];
    let password=userCredentials["password"];

    if(!username || !password){
      throw new Error('invalid login credentials');
    }
    return true;
  }
}

class LoginWithUserIDAndPassword implements LoginStrategy{
  login(userCredentials: object): boolean {
    let userID=userCredentials["userID"];
    let password=userCredentials["password"];

    if(!userID || !password){
      throw new Error('invalid login credentials')
    }
    return true;
  }
}

class Logger {
 //There should only be one logged in user at a time
 private static loggedInUser:object;
 private  static userDetail={};
 private static loginUser:LoginStrategy;

 private constructor(userCredentials:object){
  Logger.userDetail=userCredentials;
 }

 //we're assuming the login credentials of the user are stored in the onject passed in the login function 

 static login(userCredentials:object){
   if(Logger.loggedInUser !=null){
  //  //create an instance of a logged in user only when logged in user is null. Here we're ensuring that there is only one logged in user at a time.
    return Logger.loggedInUser
   }
   Logger.loggedInUser=new Logger(userCredentials)
 }

 static getLoggedInUser(){
  return Logger.userDetail;
 }

 static logOut(){
  Logger.loggedInUser=null;
 }
}

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