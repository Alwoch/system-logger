// Create the real object 
class RealInternetAccess {
    grantInternetAccess() {
        console.log('Your internet is up and running');
    }
}
// create the proxy object
class ProxyInternetAccess {
    constructor(employeeName) {
        this.employeeName = employeeName;
    }
    grantInternetAccess() {
        if (this.checkAccess()) {
            this.employeeName.grantInternetAccess();
            this.logAccess();
        }
    }
    checkAccess() {
        console.log('Proxy: you have access to the internet');
        return true;
    }
    logAccess() {
        console.log("Proxy: you are logged in");
    }
}
// Client gets introduced
function client(internet) {
    internet.grantInternetAccess();
}
// when you are using the RealInternetAccess
console.log('Client Receiving internet from the real Internet');
const realInternetAccess = new RealInternetAccess();
client(realInternetAccess);
// when you are using the proxy internet
console.log('Client Receiving internet from the proxy');
const proxyInternetAccess = new ProxyInternetAccess(realInternetAccess);
client(proxyInternetAccess);
