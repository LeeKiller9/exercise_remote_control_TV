let status = false; //false = turn off ; true = turn on
let id = 1;
let n = 0;

let Remote = function () {
    this.idRemote = id;

    this.setIdRemote = function (id) {
        this.idRemote = id;
    }
    this.getIdRemote = function () {
        console.log("Remote id: " + this.idRemote);
    }
    this.turnOnOrOffRemote = function (obj) {
        obj.toTurnOnOrOffTV();
    }
    this.changeChannelRemote = function (obj, channel) {
        obj.toChangeChannelTV(channel);
    };
    this.increaseVolumeRemote = function (obj, times) {
        obj.toIncreaseVolumeTV(times);
    };
    this.decreaseVolumeRemote = function (obj, times) {
        obj.toDecreaseVolumeTV(times);
    };
}

let Television = function (channel, volume) {
    this.channelTV = channel;
    this.volumeTV = volume;
    this.statusTV = status;

    this.setChannelTV = function (channel) {
        this.channelTV = channel;
    }
    this.setVolumeTV = function (volume) {
        this.volumeTV = volume;
    }
    this.getChannelTV = function () {
        console.log("Current channel: " + this.channelTV);
    }
    this.getVolumeTV = function () {
        console.log("Current volume: " + this.volumeTV);
    }
    this.getStatusTV = function () {
        if (this.statusTV) {
            console.log("TV is turning on");
        } else {
            console.log("TV is turning off");
        }
        return this.statusTV;
    }
    this.toTurnOnOrOffTV = function () {
        this.statusTV = !this.statusTV;
    }
    this.toChangeChannelTV = function (channel) {
        this.channelTV = channel;
    }
    this.toIncreaseVolumeTV = function (times) {
        for (let i = 1; i <= times; i++) {
            this.volumeTV++;
            console.log("Current volume: " + this.volumeTV);
        }
    }
    this.toDecreaseVolumeTV = function (times) {
        for (let i = 1; i <= times; i++) {
            this.volumeTV--;
            console.log("Current volume: " + this.volumeTV);
        }
    }
}

let myRemote = new Remote();
let myTV = new Television(7, 50);

myRemote.getIdRemote();
myTV.getStatusTV();

console.log("-----Push turn on button!!-----");
myRemote.turnOnOrOffRemote(myTV);
myTV.getStatusTV();
myTV.getChannelTV();
myTV.getVolumeTV();

console.log("-----Push channel 3 button!!-----");
myRemote.changeChannelRemote(myTV, 3);
myTV.getChannelTV();

console.log("-----Push channel 9 button!!-----");
myRemote.changeChannelRemote(myTV, 9);
myTV.getChannelTV();

console.log("-----Push increase volume button 5 times!!-----");
n = 5;
myRemote.increaseVolumeRemote(myTV, n);

console.log("-----Push decrease volume button 8 times!!-----");
n = 8;
myRemote.decreaseVolumeRemote(myTV, n);

console.log("-----Push turn off button!!-----");
myRemote.turnOnOrOffRemote(myTV);
myTV.getStatusTV();
