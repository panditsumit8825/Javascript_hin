const user = {
    username: "Sumit",
    price: 999,

    welcomemessage: function(){
        console.log(`${this.username} , welcome to website `);
        // console.log(this);
        
    }
}
// user.welcomemessage()
// user.username = "Kumar"
// user.welcomemessage()

console.log(this);

// function chai(){
//     let username ="Sumit"
//     console.log(this);
//     console.log(this.username)
// }
// chai()

const chai = () => {
    let username ="Sumit"
    console.log(this)
}
// chai()


// const addTwo = (num1 , num2) => {
//     return num1+num2
// }

// const addTwo = (num1 , num2) =>  num1+num2
// const addTwo = (num1 , num2) =>  (num1+num2)
const addTwo = (num1 , num2) =>  ({username: "Sumit"})
console.log(addTwo(5,7))