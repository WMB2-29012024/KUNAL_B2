const s = "anagram"
const t = "nagaram"

const string = [];
const strings = [];

  for(let i=0;i<s.length;i++) {
     string += s[i]

  } 

  for(let j=0;j<t.length;j++) {
     strings += t[j]
    console.log(strings)
  }
    if(string === strings){
        console.log(true)
   } else(
     console.log (false)
   )