
var compose = function(functions) {
    functions.reverse() // Evaluating from right to left 
    return function(x){
      let result = x
      for (let i = 0; i < functions.length; i++){
        result = functions[i](result) // Taking the result from each function
      }

      return result
    }
};

const fn = compose([x => x + 1, x => 2 * x]);
console.log(fn(4)); // 9