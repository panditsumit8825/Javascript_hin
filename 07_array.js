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
// console.log("A",myArray);
// const myn1 = myArray.slice(1,3)
// console.log(myn1);
// console.log("B",myArray);

// const myn2 = myArray.splice(1,3)
// console.log("C",myArray);
// console.log(myn2);

const marvel_Heroes = [ 'thor' , "ironman" , "spiderman"]
const dc = [ "mumbai" ,'chennai', 'gujrat']
// marvel_Heroes.push(dc)
// console.log(marvel_Heroes);
console.log(marvel_Heroes.concat(dc))
const all = [...dc,...marvel_Heroes]
console.log(all);

const anotherArray = [1,2,3,[4,5,6],7,8,[9,5,[2,4,3]]]
console.log(anotherArray)
const newanotherArray = anotherArray.flat(Infinity)
console.log(newanotherArray)



console.log(Array.isArray("Sumit"))
console.log(Array.from("Sumit"))
console.log(Array.from({name : "Sumit"}))   //Interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))