// My Own Example - 1
// callback function that has a name

function serveFood(theFood, fnToCall) {
    var servingWord = "Here's your food!: " + theFood; // This data manipulation has to occur first
    fnToCall(servingWord)  // This callback function is waiting for its turn!
}

function sayInConsole(words){   // callback function [A]
    console.log(words)
}

function sayOutLoud(words) { // callback function [B]
    alert(words)
}

serveFood('Fried Chicken', sayInConsole) // Put a function name to get called!


// My Own Example - 2
// anonymous callback function

// function shipBox(theItem, fnToCall) {
//     var wrappedItem = theItem + " (wrapping done)" // Step 1
//     fnToCall(wrappedItem)  // This Step 2 follows "AFTER" Step 1 is done
// }

const shipBox = (theItem, fnToCall) => {
    var wrappedItem = theItem + " (wrapping done)" // Step 1
    fnToCall(wrappedItem)  // This Step 2 follows "AFTER" Step 1 is done
}

shipBox('Nintendo Switch', (box) => {
    var stampedBox = "Approved! : " + box
    console.log(stampedBox)
}) 



// My Own Example - 3
// a callback in a callback in a higher-order function
// Let's use 'setTimeout' method which always use a callback function as its argument!

function slowTalkerWithScript (givenScript) {
    setTimeout(() => {
        var firstWord = givenScript.split(' ')[0]
        shortenAndSayTheWord(firstWord)
    }, 1000)
}

function shortenAndSayTheWord(theWord) {
    console.log(theWord.slice(0, 5))
}

slowTalkerWithScript("Anonymous functions are useful to use.")