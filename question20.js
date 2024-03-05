const  nums = [0,0,1,1,1,2,2,3,3,4]
    const countofUniqueElement = (nums) => {
         let uniqueIndex = 1;

         for (let i= 1; i < nums.length; i++) {
            if(nums[i]!== nums[i-1]){
                nums[uniqueIndex] = nums[i];
                uniqueIndex++;
            }
            
         }
           return nums;
    };
    console.log(countofUniqueElement(nums));