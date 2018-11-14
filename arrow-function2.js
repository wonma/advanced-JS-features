// 'arguments' keyword is not bound to arrow function.

// (1) regular fn
const add = function () {
    return arguments[0] + arguments[1]
}

console.log(add(11, 22, 33))

// (2) arrow fn
// const add = () => {
//     return arguments[0] + arguments[1]
// }

// console.log(add(11, 22, 33))  // Error!



// 'this' keyword is not bound to arrow function.

// (1) regular fn
const cat = {
    name: 'shimkung',
    age: 2,
    introduce : function () {
        return `my name is ${this.name} and I'm ${this.age}-years-old.`
    }
}

console.log(cat.introduce())

// (2) arrow fn ----> fails.


// conclusion
// when you need to use 'this' keyword, 
// use regular function, otherwise,
// stick to using arrow function.
