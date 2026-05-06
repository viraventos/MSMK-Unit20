import { VehicleFactory } from "./vehicle-factory.js";

console.log('\n----------- CAR ------------');

const myCar = VehicleFactory.createVehicle('car');
myCar.drive();
myCar.ride();

console.log('\n----------- BIKE ------------');

const myBike = VehicleFactory.createVehicle('bike');
myBike.ride();
myBike.drive();


