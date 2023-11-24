function searchKey(object,x) {
    for ( let key in object){
         if (object.hasOwnProperty(key) && key === x){
            return object[key];
        }
        
    }
   return "No result";
}
const Obj = {
    "firstName":"UMBEREYE",
    "lastName":"Carine",
    "home":"Kimironko",
    age :22


};

const findKey = 'firstName';
console.log(searchKey(Obj,findKey));


