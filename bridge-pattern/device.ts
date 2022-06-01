interface Device{
 //data
 volume:number;
 channel:number;
 //methods
 powerOn();
 powerOff();
 setVolume(percent);
 getVolume():number;
 setChannel(channel);
 getChannel();
}

class Radio implements Device{
 //data
 volume:number=0;
 // channelList=['xfm','next-Radio','Radio-one','galaxy-radio'];
 channel:number;

 //methods
 powerOn(){
  console.log('The Radio has been turned on');
 }
 powerOff(){
  console.log('The radio has been turned off')
 }
 setVolume(percent){
  this.volume=percent;
  console.log(`volume set to ${percent}`)
 };
 getVolume():number{
  return this.volume;
 }
 setChannel(chann){
  this.channel=chann;
  console.log(`channel set to ${chann}`);
 }
 getChannel(){
  return this.channel;
 }
}

class Tv implements Device{
 //data
 volume: number=0;
 channel:number=0;
 //['Bukedde TV','NTV','Spark TV','BBS Terefayina'];

 //methods
 powerOn(){
  console.log('The TV has been turned on');
 }
 powerOff(){
  console.log('The TV has been turned off')
 }
 setVolume(percent){
  if(this.volume<0){
   this.volume=0
  }else{
    this.volume=percent;
    console.log(`volume set to ${percent}`)
  }
  // this.volume=percent;
  // console.log(`volume set to ${percent}`)
 };
 getVolume():number{
  return this.volume;
 }
 setChannel(chann){
  this.channel=chann;
  console.log(`channel set to ${chann}`);
 }
 getChannel(){
  return this.channel;
 }
}

class Remote {
 private device:Device;

 constructor(device:Device) {
  this.device=device;
 }
 
 togglePower(){
  if(this.device.powerOn()){
   this.device.powerOff()
  }else{
   this.device.powerOn();
  }
 }
 volumeDown(){
 this.device.setVolume(this.device.getVolume()-1);
 }
 volumeUp(){
  this.device.setVolume(this.device.getVolume()+1);
 }
 channelDown(){
  this.device.setChannel(this.device.getChannel()-1);
 }
 channelUp(){
  this.device.setChannel(this.device.getChannel()+1);
 }
}

let tv=new Tv();
let remote=new Remote(tv);

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
