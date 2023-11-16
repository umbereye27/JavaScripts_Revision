function onesZerosPattern (size){


  let string = "";
      for (let i = 1; i <= size; i++) {
      for (let j = i; j <= size; j++) {
          string += "1 ";
        }
        string += "\n";
      
      }
      return string;
  }
  console.log(onesZerosPattern(4));

    



    




