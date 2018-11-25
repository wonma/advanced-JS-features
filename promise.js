////////////  1 - Regular callback formation (simulating http request)

const getPuzzle = (callback) => {
    setTimeout(() => {
        const data = 'Joshua'  // Thansk to 'closure', callback remembers this variable.
        callback(undefined, data) 
    }, 2000);
}    // function 레시피 안에서  데이터담은 callback function 발사

getPuzzle((err, theData)=> {  // two placeholders and what to do with them below.
    if(err) {
        console.log('We got error')
    } else {
        console.log(`${theData} is my husband.`)
    }
})   // 데이터 fetch하는 기계 작동, 단, 작동 시 callback될 레시피를 argument로 담고 있음.




////////////  2 - Promise formation

const myPromise = new Promise((resolve, reject) => { // (1) I forgot what to do from here.
    setTimeout(() => {                  // Promise논리를 복사한 object로 한 번 감싸줬다고 생각하면됨.
        const data = 'Joshua'  
        resolve(`${data} is my lovely husband.`)  // This '...' works as an argument in 'then'
        reject(`There is an error.`)
    }, 2000); 
}) 

//myPromise()   // 착각함. myPromise 이건 일단 object잖아!
myPromise.then((resolvedData)=>{
    console.log(resolvedData)      // argument가 하나면 data.
}, (messageForRejected)=>{
    console.log(messageForRejected)
})

myPromise.then((resolvedData) => {
    console.log(resolvedData)      // separte behavior!
}, (messageForRejected) => {
    console.log(messageForRejected)
})
