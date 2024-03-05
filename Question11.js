// Branch Name: B2_W4_D3

//  Question 11: Write a for-loop and count frequency of each element in the array. Store the element and its frequency in an object.

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,1];
 const countFrequency=(arr)=>{
    let obj={};
    for(let i=0; i<arr.length;i++){
        const currentElement =arr[i];
         

         if (!obj[currentElement]){
            obj[currentElement] = 1;
         }else{
         
         }
    } 
 }

