/**
 *  Unit test for class Product
 */

import { Product } from "./product.js";

describe('Test of class Product', () => {

    describe('constructor', () => {
        test('it fails when product code is longer than 6 chars', () => {
            // Arrange
            const expectedError = new Error('Product id cannot be longer than 6 characters');
            // Act + Assert
            expect(() => new Product('Code longer than 6 char', 'Product name', 22)).toThrow(expectedError);
        });

        test('it fails when product name is longer than 30 chars', () => {
            // Empty test,, to be writter
            expect(true).toBe(false);
        });

        test('it fails when product price is negative', () => {
            // Empty test,, to be writter
            expect(true).toBe(false);
        });

        test('it istantiates the product successfully', () => {
            // Act
            const result = new Product('code', 'Product name', 22);
            // Assert
            expect(result).toBeInstanceOf(Product);
        });

    });

    describe('method getId', () => {
        test('It returns the product id succesfully', () => {
            // Arrange
            const myProduct = new Product('myId', 'Product name', 22);
            // Act
            const result = myProduct.getId();
            // Assert
            expect(result).toEqual('myId');
        });
    });
});

