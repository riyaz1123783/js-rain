// Immediately Invoke Function Expression (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNNECTED`);
    

}) ();



( (name) => {
    console.log(`DB CONNECTED TWO $ {name}`);
    
} ) ('kaizen')