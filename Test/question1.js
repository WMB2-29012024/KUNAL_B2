const nums = [3,2,2,3]
const  val = 3;
let newArray = [];

 const matchnums=() => {

   for(let i=0;i<nums.length;i++) 
   
   if(nums[i] !== val){
       newArray.push(nums[i])
   }
   else(
    newArray.push(`_`)
   )
   console.log(newArray);
}
matchnums()





  

