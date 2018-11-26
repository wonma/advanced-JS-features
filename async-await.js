// [A]

// const processData = async () => {
//     return 12                      
// }

// console.log(processData())   // return : Promise { 12 }


// [B]

// const processData = async () => {
//     throw new Error('Some went wrong!')  // This is like 'rejecting'
//     return 12   // This is like 'resolving'
// }

// processData().then((data) => {
//     console.log('Data:',data)
// }).catch((error) => {  //Promise에서 에러리포트할 경우에만 catch작동 
//     console.log(error)  
// })   // return : Promise { 12 }




// [C]

const trippleNum = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === "number" ? resolve(num * 3) : reject(`There is an error.`)
    }, 2000);
})

const processData = async () => {
    let data = await trippleNum(data)   // await와 함께 promise만들 callback펑션 써줌
        data = await trippleNum(data)  // await는 똑똑해서 promise에서 reject되면 자동으로 throw error함.
    return data
}

processData().then((data) => {
    console.log('Data:', data)
}).catch((error) => {  //Promise에서 에러리포트할 경우에만 catch작동 
    console.log(error)
}) 