const input = [2, 3, 5, 6]
const runningsum = function (nums) {
    let sum = 0;
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        arr[i] = sum;

    }
    return arr;
};
console.log(runningsum(input))

