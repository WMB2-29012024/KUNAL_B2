// Branch Name: B2_W4_D3

//  Question 5: Write a for-loop to log every alternate element, starting from last index.

const numArr = [1, 2, 3, 4, 5];
const reversedArray = [];

for (let i = numArr.length - 1; i >= 0; i -= 2) {
    reversedArray.push(numArr[i]);
}

console.log(reversedArray);


