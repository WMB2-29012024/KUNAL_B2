const num = [1,2,3,4,]
 let sum=0;
 let arrayLength = num.length;
 for(i=1; i < arrayLength-1; i++){
     if(arrayLength % i ===0){

        sum+=(num[i+1]**2);

     }
     return sum;
 }
 