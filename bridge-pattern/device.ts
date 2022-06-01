interface Device{
 powerOn();
 powerOff();
 setVolume(percent);
 getVolume():number;
 setChannel(channel);
 getChannel();
}

class Radio implements Device{
 //data
 volume:number;
 channel:string;

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
 setChannel(channel){
  this.channel=channel;
  console.log(`channel set to ${channel}`);
 }
 getChannel(){
  return this.channel;
 }
}

class Tv implements Device{
 //data
 volume:number;
 channel:string;

 //methods
 powerOn(){
  console.log('The TV has been turned on');
 }
 powerOff(){
  console.log('The TV has been turned off')
 }
 setVolume(percent){
  this.volume=percent;
  console.log(`volume set to ${percent}`)
 };
 getVolume():number{
  return this.volume;
 }
 setChannel(channel){
  this.channel=channel;
  console.log(`channel set to ${channel}`);
 }
 getChannel(){
  return this.channel;
 }
}


let sony=new Radio;
sony.setVolume(90);
sony.getVolume();
sony.setChannel('capital FM');
sony.getChannel();
