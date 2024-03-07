const arr= [[5,2,3],[0,6,7]]
 var richestcustomerwealth=function(arr){
 let maxsum=0;
for(let i=0;i<arr.length;i++){
    sum=0;
    for(let j=0;j<arr[i].length;j++){
         sum+=arr[i][j]
         
    }
    maxsum=Math.max(maxsum,sum)
}
    return maxsum;
}; 
    console.log(richestcustomerwealth(arr))

