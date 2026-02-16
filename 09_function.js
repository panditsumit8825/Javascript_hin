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
    // console.log(userlogginMessage())



function calculatecartPrice(val1,val2,...num1){
    return num1
}
// console.log(calculatecartPrice(200,400,600,2500))

const user ={
    name:"Sumit",
    price:999
}
function handleobject(anyobject){
    console.log(`name is ${anyobject.name} and price is ${anyobject.price}`);
}
// handleobject(user)
handleobject({
    name:"Kumar",
    price:699
})

const mynewArray = [100,200,300,400]
function returnsecondvalue(getarray){
    return getarray[1]
}
// console.log(returnsecondvalue(mynewArray));
console.log(returnsecondvalue([100,200,300,400]));
