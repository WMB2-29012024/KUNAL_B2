// Example 1:

// Input: nums = [1,15,6,3]
// Output: 9
// Explanation: 
// The element sum of nums is 1 + 15 + 6 + 3 = 25.
// The digit sum of nums is 1 + 1 + 5 + 6 + 3 = 16.
// The absolute difference between the element sum and digit sum is |25 - 16| = 9.


    // const nums =[1,15,6,3]
    // sum =0;
    // for(let i=0; i<nums.length;i++) {
    //     sum += nums[i];
    // }
    //  console.log(sum);

    var differenceOfSum = function (nums) {
        let elementSum = 0;
        let digitSum = 0;
    
        for (let i = 0; i < nums.length; i++) {
            elementSum += nums[i];
    
            let elementStringValue = String(nums[i]);
            for (let j = 0; j < elementStringValue.length; j++) {
    
                digitSum += Number(elementStringValue[j]);
            }
        }
        return +(elementSum - digitSum);
    }