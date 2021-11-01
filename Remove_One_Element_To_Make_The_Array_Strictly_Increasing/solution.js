/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function (nums) {
    let isRemoved = false
    for (let i = 0; i < nums.length; i++){
        if (nums[i] <= nums[i-1]){
                if (isRemoved) {
                    return false;
        }
        else isRemoved = true;
        if (i > 1 && nums[i] <= nums[i-2]){
            nums[i] = nums[i-1];
        }
               
        }  
    }
        
    return true
     
};



