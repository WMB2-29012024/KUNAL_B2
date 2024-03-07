// Given a square matrix (2D array), calculate the sum of its two diagonals.
// The two diagonals in consideration are the primary diagonal that spans from the top-left to the bottom-right and the secondary diagonal that spans from top-right to bottom-left. If a number is part of both diagonals (which occurs only for odd-sized matrices), it should be counted only once in the sum.
// Expected Time Complexity: O(n * m),
// Expected Space Complexity: O(1)
// Examples
// Example 1:
// Input:
// [[1,2,3],
// [4,5,6],
// [7,8,9]]
// Expected Output: 25
// Justification: Summing up the two diagonals (1+5+9+3+7), we get 25. Please note that the element at [1][1] = 5 is counted only once.
   

const num=[[1,2,3],[4,5,6],[7,8,9]];
function calculateDiagonalSum(nums) {
     let sum=0;
    for(let i=0;i<nums.length;i++ ){
      sum+=nums[i][i] + nums[i][nums.length-1-i];
    }
    const middle =Math.floor(num.length/2);
    sum-=num[middle][middle]
    return sum;
};
calculateDiagonalSum(num)



