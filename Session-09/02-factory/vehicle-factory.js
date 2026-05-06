import { Bike } from "./bike.js";
import { Car } from "./car.js";

export class VehicleFactory {
    static createVehicle(type) {
      switch (type) {
        case 'car':
          return new Car();
        case 'bike':
          return new Bike();
        default:
          throw new Error('Unknown vehicle type');
      }
    }
  }
