function ones (size){
    let string ="";
    for (let i = size; i > 0; i--) {
      for (let j = 1; j <= size; j++) {
          if (j == i) {
             string+="1 ";
          } else {
              string+="  ";
          }
      }
      string+='\n';
  }
 return string;
}
console.log(ones(4));