var createHelloWorld = function(args) {
    return function(...innerArgs) {
        return "Hello World";
    }
};

var args = [];
var result = createHelloWorld(args);
console.log(result()); // Output: "Hello World"
