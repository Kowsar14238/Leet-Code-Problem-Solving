var reduce = function(nums, fn, init) {
    let result = init;

    nums.forEach(element => {
        result = fn(result, element);
    });
    return result;
};