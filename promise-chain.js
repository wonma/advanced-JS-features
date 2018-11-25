// --------------------  Promise Chaining!  ---------------------

// 1. Chaining with callback formation (callback hell)

const doubleNum = (num, callback) => {
    setTimeout(() => {
        if(typeof num === "number") {
            callback(undefined, num * 2)
        } else {
            callback("The input is not a number")
        }
    }, 2000);
}    // function 레시피 안에서  데이터 담은 callback function 발사

doubleNum(2, (err, theData) => {  
    if (err) {
        console.log(err)
    } else {
        doubleNum(theData, (err, theData)=> {
            if (err) {
                console.log(err)
            } else {
                console.log(theData)
            }
        })
    }
})       // 처음 function에서 나온 결과값이 다시 '* 2' 의 대상이 됨.



// 2. Chaining with normal promise (nesting still occurs)


const trippleNum = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === "number" ? resolve(num * 3) : reject(`There is an error.`)
    }, 2000);
})

trippleNum(2).then((data) => {
    trippleNum(data).then((data)=>{
        console.log(data)
    }, (err)=>{
        console.log(err)
    })
}, (err) => {
    console.log(err)
} )

// 3. Promise Chaining

const add3 = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === "number" ? resolve(num + 3) : reject(`There is an error.`)
    }, 2000);
})

add3(2).then((data) => { // machine 통과한 값을 최종으로 받아오기 
    return add3(data)
}).then((data) => {   // 한 번 더 machine 통과한 값을 최종으로 받아오기 
    return 'hohohoho' // 꼭 Promise오브젝트를 return 할 필요는 없음. 아무거나 리턴 다 됨!
}).then((data) => {   // 한 번 더 machine 통과한 값을 최종으로 받아오기 
    console.log(data)
}).catch((err)=>{     // catch handler 설치해주기
    console.log(err)
})     // my mistake : I simply put 'err', not an error-handling method