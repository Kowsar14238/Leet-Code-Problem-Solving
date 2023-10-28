
var reduce = function(nums, fn, init) {
    let accum = init

    if(nums.length === 0){
        return accum;
    }
    else{
       nums.forEach((value)=>{
          accum =fn(accum,value);
       });
   }
   return accum;
};