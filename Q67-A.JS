
function objectProperties(student) {
    for (let property in student) {
        if (student.hasOwnProperty(property)) {
            console.log(property);
        }
    }
}
const studentObject = {
    "firstName":"UMBEREYE",
    "lastName":"Carine",
    "home":"Kimironko"
}
objectProperties(studentObject);