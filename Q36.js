// function countConsonant(string){
//     var consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
//     count = 0;
//     for (let i=0; i<string.length; i++){
//         if (consonants.indexOf(string[i]) !== -1){
//             count++;
//         }
//     }
// console.log (count);
// }
// countConsonant("umbereye");

// function calculateArea(shape, dimension) {
//     let area;

//     switch (shape.toLowerCase()) {
//         case 'circle':
//             area = Math.PI * Math.pow(dimension, 2);
//             break;
//         case 'square':
//             area = Math.pow(dimension, 2);
//             break;
//         case 'triangle':
//             // Assuming dimension is the base and height of the triangle
//             area = 0.5 * dimension * dimension;
//             break;
//         default:
//             area = 'Invalid shape';
//     }

//     return area;
// }
// console.log(calculateArea('circle',2));


// function combineObjects(obj1, obj2) {
//     return { ...obj1, ...obj2 };
   
// }

// // Example usage
// const object1 = { name: 'John', age: 25 };
// const object2 = { city: 'New York', country: 'USA' };

// const combinedObject = combineObjects(object1, object2);

// console.log('Combined Object:', combinedObject);

function printObjectProperties(obj) {
    for (let property in obj) {
        if (obj.hasOwnProperty(property)) {
            console.log(`${property}: ${obj[property]}`);
        }
    }
}

// Example usage
const student = {
    name: 'John Doe',
    age: 20,
    grade: 'A'
};

console.log("Properties of the 'student' object:");
printObjectProperties(student);
