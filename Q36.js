function countConsonant(string){
    var consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
    count = 0;
    for (let i=0; i<string.length; i++){
        if (consonants.indexOf(string[i]) !== -1){
            count++;
        }
    }
console.log (count);
}
countConsonant("umbereye");