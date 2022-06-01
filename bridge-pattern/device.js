class Radio {
    constructor() {
        //data
        this.volume = 0;
    }
    //methods
    powerOn() {
        console.log('The Radio has been turned on');
    }
    powerOff() {
        console.log('The radio has been turned off');
    }
    setVolume(percent) {
        this.volume = percent;
        console.log(`volume set to ${percent}`);
    }
    ;
    getVolume() {
        return this.volume;
    }
    setChannel(chann) {
        this.channel = chann;
        console.log(`channel set to ${chann}`);
    }
    getChannel() {
        return this.channel;
    }
}
class Tv {
    constructor() {
        //data
        this.volume = 0;
        this.channel = 0;
    }
    //['Bukedde TV','NTV','Spark TV','BBS Terefayina'];
    //methods
    powerOn() {
        console.log('The TV has been turned on');
    }
    powerOff() {
        console.log('The TV has been turned off');
    }
    setVolume(percent) {
        if (this.volume < 0) {
            this.volume = 0;
        }
        else {
            this.volume = percent;
            console.log(`volume set to ${percent}`);
        }
        // this.volume=percent;
        // console.log(`volume set to ${percent}`)
    }
    ;
    getVolume() {
        return this.volume;
    }
    setChannel(chann) {
        this.channel = chann;
        console.log(`channel set to ${chann}`);
    }
    getChannel() {
        return this.channel;
    }
}
class Remote {
    constructor(device) {
        this.device = device;
    }
    togglePower() {
        if (this.device.powerOn()) {
            this.device.powerOff();
        }
        else {
            this.device.powerOn();
        }
    }
    volumeDown() {
        this.device.setVolume(this.device.getVolume() - 1);
    }
    volumeUp() {
        this.device.setVolume(this.device.getVolume() + 1);
    }
    channelDown() {
        this.device.setChannel(this.device.getChannel() - 1);
    }
    channelUp() {
        this.device.setChannel(this.device.getChannel() + 1);
    }
}
let tv = new Tv();
let remote = new Remote(tv);
console.log('changing channel forward.......');
remote.channelUp();
remote.channelUp();
remote.channelUp();
remote.channelUp();
console.log('changing channel backward.......');
remote.channelDown();
remote.channelDown();
remote.channelDown();
console.log('increasing the volume.....');
remote.volumeUp();
remote.volumeUp();
remote.volumeUp();
console.log('increasing the volume.....');
remote.volumeDown();
remote.volumeDown();
remote.volumeDown();
remote.volumeDown();
// let sony=new Radio;
// sony.setVolume(90);
// sony.getVolume();
// sony.setChannel('capital FM');
// sony.getChannel();
