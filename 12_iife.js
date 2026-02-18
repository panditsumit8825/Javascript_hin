// Immediately invoked function expression (iife)

(function chai (){
    // name iife
    console.log(`DB CONNECTED`)
})();

( () => {
    console.log(`DB CONNECTED TWO`);
    
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})("Sumit")