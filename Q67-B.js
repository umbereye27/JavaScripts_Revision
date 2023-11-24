function allValue_object( person) {
    
    for(let x in person){
        console.log(person[x ]);
    }
}

const personObject ={
    "firstName":"UMBEREYE",
    "lastName":"Carine",
    "home":"Kimironko"
}
allValue_object(personObject);