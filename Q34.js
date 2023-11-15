function stringModifier(string,countP,char){
    if(countP <0 || countP >= string.lenght){
        return "You entered invalid position";
    }
    else{
        let SplitString = string.split('');
        SplitString[countP]=char;
        let NewString = SplitString.join('');
        return NewString;
    }
    
}
console.log(stringModifier("Cauine",2,'r'));