// console.log("S");
// console.log("u");
// console.log("m");
// console.log("i");
// console.log("t");

function saymyName(){
    console.log("S");
    console.log("u");
    console.log("m");
    console.log("i");
    console.log("t");
}
// saymyName()

// function addTwoNumber(num1 , num2){
//     console.log(num1 + num2)
// }

// // addTwoNumber(9,6)
// const result = addTwoNumber(11,16)
// console.log("Result :" ,result)


function addTwoNumber(num1 , num2){
    let result = num1 + num2
    return result
}

// addTwoNumber(9,6)
const result = addTwoNumber(11,16)
// console.log("Result :" ,result)

function userlogginMessage(username){
    // if(username === undefined)
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
// console.log(userlogginMessage("Sumit"))
    console.log(userlogginMessage())