'use strict';

class Person {
    constructor( { name = "Anrew", age = 0 } ) {
        this.name = name;
        this.age  = age;
    }

    greeting() {
        console.log(`My name is ${name} and I'm ${age}`);
    }
}

module.exports = Person;
