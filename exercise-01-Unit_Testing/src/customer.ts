/**
 * Represents a customer with specific tax and discount rules.
 */

 import { AbstractCustomer } from "./abstract.customer.js";

 export class Customer extends AbstractCustomer{
   private name: string;
    //// 
    //// 
    //// FILL HERE THE CODE OF Customer 
    //// 
    //// 

    public getName(): string {
      return this.name;
    }
 }
 