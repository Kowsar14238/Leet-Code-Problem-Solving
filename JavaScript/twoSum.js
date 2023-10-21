
var twoSum = function(nums, target){
    const numToIndex = {};

    for(let i = 0; i < nums.length; i++){
        const complement = target - nums[i];

        if(numToIndex.hasOwnProperty(complement)){
            return [numToIndex[complement], i];
        }
        numToIndex[nums[i]] = i;
    }
    return null;
}
var nums = [2, 7, 11, 15];
var target = 9;
var result = twoSum(nums, target);
console.log(result);