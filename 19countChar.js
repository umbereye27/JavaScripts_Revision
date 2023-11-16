

function countCharacter(string) {
    var numChar = 0;
  
    for (var i = 0; i < string.length; i++) {
      
      if (string[i] !== ' ') {
       
        numChar++;
      }
    }
  
    return numChar;
  }
  
  console.log("The number of characters is: ", countCharacter("Ca ri nE UMBEREY E"));