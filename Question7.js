// Branch Name: B2_W4_D3

//  Question 7: Write a for-loop to log every 4th element, starting from last index

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]    

const fourthelem =[];
 for(let idx=numArr.length-1;idx >= 0; idx -= 4 ){
    fourthelem.push(numArr[idx]);
    
 }
 console.log(fourthelem);