// Tipper

const tipperGenerator = (percent) => {   // percent become '(dynamic) base value'
    return (amount) => {
        return amount * percent    
    }
}

const tipper15 = tipperGenerator(.15)   // creates a function
console.log(tipper15(200))
const tipper10 = tipperGenerator(.10)   // creates a function
console.log(tipper10(100))


// Clousre e.g. 1 

const say77 = () => {
    const num = 77
    const innerFn = () => {
        console.log(num)
    }
    innerFn()
}

say77()



// Clousre e.g. 2

const say100 = () => {
    const num = 100
    const innerFn = () => {
        return num
    }
    return innerFn           // Fn 'say100' CREATES a child function!
}

const wrapperFn = say100()
console.log(wrapperFn()) // This still returns 100 !!!



// Clousre e.g. 3

// in HTTP request, event listener callback function!
// even though the callback function(inner function) gets fired later,
// it still has access its parents data(in this case, parents' arguments).



// Closure e.g. 4

// Private variable

const createCounter = () => {
    let num = 0
    return {
        increment() {
            return num++
        },
        decrement() {
            return num--
        },
        get() {
            return num
        }
    }
}
const objOfMethods = createCounter()   // creates an object !!!
console.log(objOfMethods.increment())  // 0
console.log(objOfMethods.get())        // 1
console.log(objOfMethods.decrement())  // 1 
console.log(objOfMethods.get())        // 0
// Note that the methods still has acccess to the variable 'num'



// Closure e.g. 5

// Currying

const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}

const add5 = createAdder(5)
const add7 = createAdder(7)

console.log(add5(10))
console.log(add7(10))