function simpleMenu(obj,operator) {
    let result;
   switch (operator) {
    case "display":
        result = user;
        break;
    case "show prop":
        result =[];
        for (const key in obj) {
           result.push(key);
            }
        break;
    case "show value":
        result =[];
        for (const key in obj) {
            result.push(`${key} -> ${obj[key]}`);
            }
        break;
    default:
    console.log("invalid operator");
   }
 
  return result;  
}
const user={
    name: "Mumararungu Celine",
    email: "celine@gmail.com",
    age: 20

}
console.log(simpleMenu(user,"display")); 
console.log(simpleMenu(user,"show prop")); 
console.log(simpleMenu(user,"show value"));