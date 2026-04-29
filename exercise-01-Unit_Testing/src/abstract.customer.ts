/**
 * Represents a customer with specific tax and discount rules.
 */

 export abstract class AbstractCustomer {

    constructor(name: string, type: 'regular' | 'vip' | 'business') {}


    /**
     * Returns the discount rate based on customer status.
     * 
     * Discounts rates are:
     *   15% for regular customers
     *   50% for vip customers
     *   No discount for business
     * 
     * @returns number
     */
    public abstract getDiscountRate():number;

    /**
     * Returns the tax rate (VAT) based on customer category.
     * 
     * TAX VAT rates are:
     *   21% for non business customers
     *   10% for business
     * 
     * @returns number
     */
    public abstract getTaxRate():number;

    /**
     * Getter for customer name
     * @returns string
     */
    public abstract getName(): string;
}
