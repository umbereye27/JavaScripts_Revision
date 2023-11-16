function onesZerosPattern (size){
let string = "";
for (let i = size; i >=1; i--) {
        for (let j = 1; j <= i; j++) {
            string += "1 ";
          }
        for(let k=4; k>i; k--){
           string += "0 ";
        }
          string += "\n";
        }
    return string;
}
console.log(onesZerosPattern(4));