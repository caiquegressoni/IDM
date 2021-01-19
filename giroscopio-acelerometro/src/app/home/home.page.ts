import { Component } from '@angular/core';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion/ngx';
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  xOrinet: any;
  yOrient: any;
  zOrinet: any;
  accX: any;
  accY: any;
  accZ: any;
  timestamp: any;
  yOrinet: number;




  constructor(private gyroscope: Gyroscope, private deviceMotion: DeviceMotion) {
    this.xOrinet = -1;
    this.yOrient = -1;
    this.zOrinet = -1;
    this.accX = -1;
    this.accY = -1;
    this.accZ = -1;
    this.timestamp = -1;
  }

  giroscopioCurrent() {
    this.gyroscope.getCurrent()
      .then((orientation: GyroscopeOrientation) => {
        console.log(orientation.x, orientation.y, orientation.z, orientation.timestamp);
        this.xOrinet = orientation.x;
        this.yOrinet = orientation.y;
        this.zOrinet = orientation.z;
      })
      .catch()
  }
  giroscopioWatch() {
    let options: GyroscopeOptions = {
      frequency: 10
    };
    this.gyroscope.watch(options)
      .subscribe((orientation: GyroscopeOrientation) => {
        console.log(orientation.x, orientation.y, orientation.z, orientation.timestamp);
        this.xOrinet = orientation.x;
        this.yOrient = orientation.y;
        this.yOrient = orientation.z;
        this.timestamp = orientation.timestamp;
      });
  }
  acelerometro() {

    this.deviceMotion.getCurrentAcceleration().then(
      (acceleration: DeviceMotionAccelerationData) =>
        console.log(acceleration),

      (error: any) => console.log(error),

    );
    let options: GyroscopeOptions = {
      frequency: 500
    };
    var subscription = this.deviceMotion.watchAcceleration().
      subscribe((acceleration: DeviceMotionAccelerationData) => {
        console.log(acceleration);
        this.accX = acceleration.x;
        this.accY = acceleration.y;
        this.accZ = acceleration.z;
      });

  }
}
