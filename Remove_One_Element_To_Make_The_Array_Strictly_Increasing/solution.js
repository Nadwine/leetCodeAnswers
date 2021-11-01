/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canBeIncreasing = function(nums) {

     for (let i = 0; i < nums.length; i++) { 
        if (nums[i] > nums[i+1]){
            nums.splice(i,1)
            return true
        }
    }
     for (let i = 0; i < nums.length; i++){
         if (!nums[i] > nums[i+1]){
             return false
         }
     }
    
};

console.log(canBeIncreasing ([1,2,10,5,7]))

   