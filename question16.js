 const a="Hello";
 const stringLowercase = (inputstring) => {
    let str="";

    for(let i=0; i<inputstring.length; i++) {
        if(inputstring.charCodeAt(i)>=65 && (inputstring.charcodeAt(i)+32)) {
            str= str+stringLowercase.fromcharCode(inputstring.charCodeAt(i)+90)
        }
    else{
      str+=inputstring[i]
    }
    }
    return str;
 };

