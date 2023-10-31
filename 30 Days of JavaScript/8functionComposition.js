/* 
The 'compose' function is designed to create a new function that can apply a series of functions to an input in reverse order.
It takes an array of functions as an argument and returns a new function that, when called with an input 'x', applies the functions in the reverse order of the array and returns the final result.
*/


//Define 'compose' function which takes an array as its argument.
var compose = function(functions) {
    //Return a new function that takes an input 'x'.
    return function(x) {
        //Initialize 'result' with the input 'x'.
        let result = x;
        
        //Iterate through the array of 'functions' in reverse order.
        for (let i = functions.length - 1; i >= 0; i--) {
            //Call each function in the array with the 'result' as its argument and update 'result' with the result.
            result = functions[i](result);
        }
        
        // Return the final 'result' after applying all functions.
        return result;
    };
};

const fn = compose([x => x + 1, x => 2 * x]);
console.log(fn(4));