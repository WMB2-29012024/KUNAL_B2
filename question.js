const nums = [1, 2, 3, 1]
const containduplicate = function (nums) {
    let obj = {};
    
    for (let i = 0; i < nums.length; i++) {
        if(obj[nums[i]]){
            return true;
        }
        else{
            obj[nums[i]] = true;
        }
    }
    return false;
    
};
 console.log(containduplicate(nums));