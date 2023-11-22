function patternPyramid(height) {
    let pattern = "";
    for (let i = 1; i <= height; i++) {
        for (let j =height; j>=i;  j--) {
            pattern +="  ";
            
        }
        for (let k = 1; k <= i*2-1; k++) {
           pattern += "* ";
            
        }
        
        pattern +="\n";
    }
    return pattern;
    
}
console.log(patternPyramid(5));