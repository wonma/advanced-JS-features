//  ----------------- Example 1 -----------------------

const userAge = 31

// (1) Old way
let notice
if (userAge > 20) {
    notice = 'You can drive!'
    } else {
    notice = 'Sorry you cannot drive'
}
console.log(notice)


// (2) Conditional operator way
// const message = () => {
//     return userAge > 20 ? 'You can drive!' : 'Sorry you cannot drive'
// } 이렇게 할 필요도 없음 그냥 
const message = userAge > 20 ? 'You can drive!' : 'Sorry you cannot drive'
// ternary operator작동 후 결과값을 자동리턴하게 되어있음

console.log(message)


//  ----------------- Example 2 -----------------------

const myAge = 21

const showPage = () => {
    return 'This only appears to people over 21'
}

const showErrPage = () => {
    return 'Sorry you cannot see this page'
}

const directPage = myAge > 20 ? showPage() : showErrPage()

console.log(directPage)   // showPage()나 showErrapge() 둘중 하나를 시행하게 됨


//  ----------------- Example 3 -----------------------

const team = ['Josh', 'Thomas', 'Woshmi', 'Luna', 'Shimkung']

const teamCheck = team.length <= 4 ? `Team : ${team.length}` : `Too many people here`
console.log(teamCheck)