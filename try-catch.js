// Wrong try
// cause : the checking logic should be inside of the function.
// const getTip = (amount) => {
//     return amount * .25
// }

// if (typeof amount === 'number') {
//     console.log(getTip(100))
// } else {
//     throw 'Please type number.'
// }



// Right answer
// const getTip = (amount) => {
//     if (typeof amount === 'number') {
//         return amount * .25
//     } else {
//         throw Error('Please type number.')
//     }
// }

// console.log(getTip(true))

const cal = function (score, total) {
    if (typeof score !== 'number' || typeof total !== 'number') {
        throw Error('Type numbers for score and total')
    }  // 어떨경우 error를 던질지를 의도적으로 설정해주는 것.

    const percentage = (score / total) * 100
    let grade = ''

    if (percentage >= 90) {
        grade = 'A'
    } else if (percentage >= 80) {
        grade = 'B'
    } else if (percentage >= 70) {
        grade = 'C'
    } else if (percentage >= 60) {
        grade = 'D'
    } else {
        grade = 'E'
    }
    return 'the grade is ' + grade
}

try {   // try는 function 작동시키되 어떤 경우든 작동이 fail하면 (app crash시키지말고) 어쨌거나 catch를 작동시키란뜻.
    const student1 = cal(7, 20)
    console.log(student1)
} catch(e) {
    console.log(e.message)
}



