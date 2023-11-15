function countVowels(str){
    var count = 0;
    
    for(var i=0; i <= str.length; i++){
        if(isVowel(i)){
            count++;
        }
    }
    return count;
    }
    console.log(countVowels("carine"));