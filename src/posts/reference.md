---
title: 'Understanding Pass-by-Value and Pass-by-Reference in JavaScript'
image: 'https://images.unsplash.com/photo-1559703248-dcaaec9fab78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80'
date: '2023-05-28'
---

## Introduction
In JavaScript, values can be classified as either primitives or objects. Created using the object literal notation or constructor functions. Understanding how values are passed when using different types is crucial for writing efficient and bug-free code.

**Primitives include data types such as:**
- numbers,
- strings,
- boolean,
- null
- undefined.

**Objects, on the other hand, encompass:**
- arrays,
- functions
- objects
## Passing Primitive Values
When passing primitive values as arguments to functions or assigning them to variables, a copy of the value is created. This means that changes made to the copied value within the function or another variable do not affect the original value. Here are two examples:
```js
function modifyNumber(num) {
 num = 42; // Modifying the copied value
}
let x = 10;
modifyNumber(x);
console.log(x); // Output: 10 (Unchanged)

function concatenateStrings(str) {
 str += ‘ World!’; // Modifying the copied value
}
let message = ‘Hello’;
concatenateStrings(message);
console.log(message); // Output: ‘Hello’ (Unchanged)
```
In both examples, we see that although we passed our variable as an argument, the value remains unchanged outside the function. This happens because, for primitive values, a copy of the value is passed to the function. Any modifications made to the copied value within the function do not affect the original value. Therefore, the original variable x in the first example and message in the second example remain unaltered.
## Passing Non-Primitive Values (References):
Non-primitive values, such as objects and arrays, are passed by reference. Instead of creating a copy, the reference to the original value is passed. This means that modifications made to the referenced value inside a function or another variable will affect the original value. Consider the following examples:
```js
function modifyArray(arr) {
  arr.push(4); // Modifying the referenced array
}

let myArray = [1, 2, 3];
modifyArray(myArray);
console.log(myArray); // Output: [1, 2, 3, 4] (Modified)

function modifyObject(obj) {
  obj.name = 'John'; // Modifying the referenced object
}

let myObject = { id: 1 };
modifyObject(myObject);
console.log(myObject); // Output: { id: 1, name: 'John' } (Modified)
```
The examples demonstrate that when non-primitive values, such as arrays and objects, are passed as arguments, the original values are modified. This is because non-primitive values are passed by reference, allowing the function to directly work with the original value rather than a copy. Consequently, any modifications made to the referenced value inside the function persist and reflect in the original variable. Thus, the modifications performed on the referenced array and object are reflected when accessed outside the respective functions. Understanding this behaviour is crucial when working with non-primitive values in JavaScript.
### Changing Reference
Building upon my previous article on Medium about the difference between var, let, and const in JavaScript .I emphasized how const allows variables to hold references to non-primitive values, preventing reassignment of the variable itself. However, it’s important to note that const does not make objects or arrays immutable; it only prevents the variable from being reassigned to a different reference.
```js
const person = { name: 'John', age: 30 };
person.age = 31; // Modifying the property of the referenced object
console.log(person); // Output: { name: 'John', age: 31 } (Modified)
```
In this example, even though the person variable is declared as const, we can still modify the properties of the referenced object. The reference itself remains unchanged, but the properties within the object can be modified
```js
let person1 = { name: 'John' };
let person2 = { name: 'Jane' };

person1 = person2; // Changing the reference of person1
person2.name = 'Alice'; // Modifying the referenced object

console.log(person1); // Output: { name: 'Alice' }
console.log(person2); // Output: { name: 'Alice' }
```
In this example, we first declare two variables, person1 and person2, which reference different objects. By assigning person2 to person1, we change the reference of person1 to point to the same object as person2. As a result, modifying the referenced object through either variable affects the same underlying object. Thus, when we change the name property of person2, it reflects in person1 as well.

This example showcases how let allows us to change the reference of an object and demonstrates the mutable nature of objects in JavaScript.
## Summary:
In conclusion, understanding pass-by-value and pass-by-reference in JavaScript is essential for writing efficient and bug-free code. When passing primitive values, a copy of the value is created, and any modifications made within a function do not affect the original value. On the other hand, non-primitive values are passed by reference, meaning that modifications made to the referenced value will reflect in the original value.

It’s important to note that const in JavaScript does not make objects or arrays immutable. While it prevents reassignment of the variable itself, the properties of the referenced object can still be modified. Additionally, using the let keyword allows us to change the reference of an object, demonstrating the mutable nature of objects in JavaScript.

Understanding these concepts enables us to work effectively with different value types, ensuring proper handling and manipulation of data. By grasping pass-by-value and pass-by-reference in JavaScript, we can write more robust code and avoid unexpected results when dealing with primitive and non-primitive values.