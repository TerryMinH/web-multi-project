/*
 * @Author: TerryMin
 * @Date: 2024-06-09 10:08:43
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-02-23 09:43:08
 * @Description: file not
 */
abstract class Vehicle {
  abstract start(): void;
}

class Car extends Vehicle {
  start(): void {
    console.log("汽车启动");
  }
}
class Motorcycle extends Vehicle {
  start(): void {
    console.log("摩托车启动");
  }
}

function startVehicle(vehicle: Vehicle) {
  vehicle.start();
}
const car = new Car();
const motorcycle = new Motorcycle();
startVehicle(car);
startVehicle(motorcycle);

// 定义一个数组
const numbers: number[] = [1, 2, 3];

type Instance1=typeof numbers