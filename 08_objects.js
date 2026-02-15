//  snigleton
// object.create


//  object literelas

// const mysym = Symbol("key1")

// const jsUser = {
//     name:"Sumit",
//     age:21,
//     "your name":"Kumar",
//     [mysym]:"mykey1",
//     location:"patna",
//     email:"kumar123@gmail.com",
//     isloggedIn:"false",
//     lastlogginDays:["monday","Friday"]
// }

// // console.log(jsUser.email);
// // console.log(jsUser["email"]);

// // console.log(jsUser.your name); not possible to excess
// // console.log(jsUser["your name"]);
// // console.log(jsUser[mysym]);

// // jsUser.email = "kumar789@gmail.com"
// // Object.freeze(jsUser)
// // jsUser.email = "kumar568@gmail.com"
// // console.log(jsUser)

// jsUser.greeting = function(){
//     console.log("Hello JS user")
// }

// jsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`)
// }
// console.log(jsUser.greeting)
// console.log(jsUser.greeting())
// console.log(jsUser.greetingTwo())


// const tinderUser = new Object()  ***** singleton object *****
const tinderUser = {}
tinderUser.id = "123pqr"
tinderUser.name = "Mahashivratri"
tinderUser.isloggedin= false
// console.log(tinderUser)

const regularUser = {
    email: "panditsumit8825@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Sumit",
            lastname  : "Kumar"

        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"A",2:"B"}
const obj2 = {1:"C",4:"D"}

// const obj3 = {obj1 , obj2}
// console.log(obj3);

// const obj4 = Object.assign(obj1 , obj2)
// const obj5 = Object.assign({}, obj1 , obj2) // best way 
// console.log(obj4)
// console.log(obj5)

const obj6 = {...obj1, obj2}
console.log(obj6);


const course = {
    coursename : "JS in hindi",
    coursefee : "999",
    courseinstructor : " Hitesh Choudhary"
}

const {courseinstructor} = course
console.log(courseinstructor);
