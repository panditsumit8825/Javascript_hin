const myArray = [1,3,4,5,6,7,9]
// console.log(myArray);
// myArray.push(11)
// console.log(myArray);
// myArray.unshift(17)
// console.log(myArray)
// myArray.shift()
// console.log(myArray)
// const newArray = myArray.join()
// console.log(myArray)
// console.log(newArray)
// console.log(typeof newArray)

// ***************** Slice or Splice ******************
console.log("A",myArray);
const myn1 = myArray.slice(1,3)
console.log(myn1);
console.log("B",myArray);

const myn2 = myArray.splice(1,3)
console.log("C",myArray);
console.log(myn2);

