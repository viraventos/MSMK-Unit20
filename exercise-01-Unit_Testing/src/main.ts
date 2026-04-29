import { Customer } from "./customer.js";
import { Product } from "./product.js";
import { Receipt } from "./receipt.js";

// --- TEST CASES ---
const cart = [
    { product: new Product('KBD01', 'Mechanical Keyboard', 120.00), units: 1 },
    { product: new Product('MO30', 'Gaming Mouse, wireless', 45.50), units: 1 },
    { product: new Product('CORD91', 'USB-C Cable', 9.00 ), units: 3 },
];

// Case 1: VIP Customer (21% Tax, 15% Discount)
const customerVip = new Customer('Diego Soto Parada', 'vip');
const receipt1 = new Receipt(customerVip, cart);
receipt1.print();

// Case 2: Business Customer (10% Tax, 0% Discount)
const customerBusiness = new Customer('AI Global Ventures S.L', 'business');
const receipt2 = new Receipt(customerBusiness, cart);
receipt2.print();
