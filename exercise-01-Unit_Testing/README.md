# Exercise 1 - Unit Testing

The aim of this exercise is to write a couple of classes fulfilling a specification and the corresponding unit tests.

## Class structure

The classes are:

* Product -> It is a product in sale catalog. It has: id, name, price
* Customer -> The customer purchasing the products. It has name, type. It provides discount rate and tax rate.
* Receipt -> A class calculating the purchase receipt. It is constructed with a customer and a list of products.

## Exercise goal

The exercise consist on:

1. To program the class `Customer`
2. Write unit test for `Customer`
3. Finish to write unit tests for `Product`

## How to do the exercise

It has to be done in groups of two or three people.

The group has to assign the tasks to group members. Each member creates a repository branch, pushes its commits and creates a pull request to the group for pair review.

**NOTE**: It is important to write the `README.md` file with the names of the group members.

When the pull request is approved, merge to main branch, and ....voila!!!!

**TIPS**

* Before running code, do `npm ci` to install libraries in node_modules.
* To compile and run the program: `npm run dev`.
