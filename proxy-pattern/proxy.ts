// Create the interface
interface OfficeInternetAccess{
 grantInternetAccess():void
}

// Create the real object 

class RealInternetAccess implements OfficeInternetAccess{
 public grantInternetAccess(): void {
     console.log('Your internet is up and running');
     
 }
}
// create the proxy object
class ProxyInternetAccess implements OfficeInternetAccess{
 private employeeName:RealInternetAccess

 constructor(employeeName:RealInternetAccess){
     this.employeeName = employeeName
 }
 public grantInternetAccess(): void {
     if(this.checkAccess()){
         this.employeeName.grantInternetAccess();
         this.logAccess();
     }
 }
 private checkAccess():boolean{
     console.log('Proxy: you have access to the internet');
     return true        
 }
 private logAccess():void{
     console.log("Proxy: you are logged in");
     
 }
}
// Client gets introduced

function client(internet:OfficeInternetAccess){
 internet.grantInternetAccess()
}
// when you are using the RealInternetAccess
console.log('Client Receiving internet from the real Internet');
const realInternetAccess = new RealInternetAccess()

client(realInternetAccess)

// when you are using the proxy internet

console.log('Client Receiving internet from the proxy');
const proxyInternetAccess = new ProxyInternetAccess(realInternetAccess)
client(proxyInternetAccess)
