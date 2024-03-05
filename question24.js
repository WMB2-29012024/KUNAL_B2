 let occurenceobj ={};
 let sum=0;

 for(i=0;i<nums.length; i++){
    const currentElement =nums[i];

    if (occurenceobj[currentElement]){
        occurenceobj[currentElement] =[occurenceobj] +1;
    } else{
        occurenceobj[currentElement] =1;
    }
 }

 for(let j=0;j<nums.length;j++){
    if(occurenceobj[nums[j]]===1){
        sum+=nums[j];
    }
 }
 return sum;

