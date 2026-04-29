import { Customer } from "./customer.js";
import { Product } from "./product.js";

type ReceiptLine = {product: Product, units: number};

type ReceiptSummary = {
    subtotal: number,
    discount: number,
    taxPercentage: number,
    taxes: number,
    total: number,
};

/**
 * Handles the calculation and formatting of the shopping receipt.
 */
export class Receipt {
    private customer: Customer;
    private lines: ReceiptLine[];

    constructor(customer:Customer, productLines: ReceiptLine[]) {
        this.customer = customer;
        this.lines = productLines;
    }

    /**
     * Calculates the sum of all product prices before taxes or discounts.
     */
    public calculateSubtotal() {
        return this.lines.reduce((total, line) => total + line.units * line.product.getPrice(), 0);
    }

    /**
     * Processes all financial calculations for the receipt.
     */
    public getSummary(): ReceiptSummary {
        const subtotal = this.calculateSubtotal();
        
        // Retrieve rules from the Customer object
        const discountRate = this.customer.getDiscountRate();
        const taxRate = this.customer.getTaxRate();

        const discountAmount = subtotal * discountRate;
        const amountAfterDiscount = subtotal - discountAmount;
        const taxAmount = amountAfterDiscount * taxRate;
        const grandTotal = amountAfterDiscount + taxAmount;

        return {
            subtotal: +subtotal.toFixed(2),
            discount: +discountAmount.toFixed(2),
            taxPercentage: taxRate * 100,
            taxes: +taxAmount.toFixed(2),
            total: +grandTotal.toFixed(2),
        };
    }

    /**
     * Outputs a formatted receipt to the console.
     */
    public print():void {
        const summary = this.getSummary();

        console.log(`\n------- RECEIPT FOR: ${this.customer.getName()} --------`);
        console.log();
        this.lines.forEach(item => {
            const lineAmount = (item.product.getPrice() * item.units);
            console.log(`* ${item.product.toString()} x ${item.units.toString().padStart(5)} units => ${lineAmount.toFixed(2).padStart(8)} €}`);
        });
        console.log(`-----------------------------------------------`);
        console.log(`Subtotal:         ${summary.subtotal.toFixed(2).padStart(9)} €`);
        console.log(`Discount:        -${summary.discount.toFixed(2).padStart(9)} €`);
        console.log(`Tax (${summary.taxPercentage.toString().padStart(2)}%):        ${summary.taxes.toFixed(2).padStart(9)} €`);
        console.log(`GRAND TOTAL:      ${summary.total.toFixed(2).padStart(9)} €`);
        console.log(`-----------------------------------------------\n`);
    }
}

