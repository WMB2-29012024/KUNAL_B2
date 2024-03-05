const words =["pay","attend","practice","attention"]
const pref="at";

const countpref =(words,pref) => {
    let count =0;
    for(let i=0; i<words.length; i++){
        let isprefix = true;
        for(let j=0;j <pref.length;j++) {
            if(words[i][j]!==pref[j]) {
                isprefix= false;
                break;
            }
        }
    } if(isPrefix){
        count++;
    }

    return count;
}
