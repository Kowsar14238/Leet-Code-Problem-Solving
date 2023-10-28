
var map = function(arr, fn) {
    
    var transArray = [];

    for(var i = 0; i < arr.length; i++){
        transArray[i] = fn(arr[i], i);
    }
    return transArray
};
