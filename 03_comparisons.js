// console.log(2 > 3);
// console.log(2 < 3);
// console.log(2 == 3);
// console.log(2 != 3);
// console.log(2 >= 3);


// console.log("2" > 1);
// console.log("02" >1);


// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined >= 0);

// // === ( strict check)
// console.log("2" == 2);
// console.log("2" === 2);  // check datatypes of both if same then give true otherwise false  


// ********************* STACK AND HEAP *************************
//  stack(use primitive datatypes) , heap(use non- primitive datatypes)

let myinstaId="sumit.kumar.8636"
let anotherId=myinstaId
anotherId="arts_zone"
console.log(myinstaId);
console.log(anotherId);

let userOne = {
    email : "userone@gmail.com",
    upi : "userone@ybl"
}

let userTwo = userOne
userTwo.email = "usertwo@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);

