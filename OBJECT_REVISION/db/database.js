const users=[{
    "name": "Mumararungu Celine",
    "email": "celine@gmail.com",
    phone : "0786868146",
    id : 1,
    "marks" : [
        {
            "subject" : "MATH",
            "marks" : 100
        },
        {
            "subject" : "English",
            "marks" : 70
        }

        
        
    ]

},
{
    "name": "umbereye carine",
    "email": "caline@gmail.com",
    phone : "0787968146",
    id : 2,
    "marks" : [
        {
            "subject" : "MATH",
            "marks" : 90
        },
        {
            "subject" : "English",
            "marks" : 60
        }
        
        
        
    ]

},
{
    "name": "Mutoni jacky",
    "email": "jacky@gmail.com",
    phone : "0786868116",
    id : 3,
    "marks" : [
        {
            "subject" : "MATH",
            "marks" : 100
        },
        {
            "subject" : "English",
            "marks" : 90
        }
        
        
        
    ]

},
{
    "name": "Ikirezi ines",
    "email": "ines@gmail.com",
    phone : "0782268146",
    id : 4,
    "marks" : [
        {
            "subject" : "MATH",
            "marks" : 80
        },
        {
            "subject" : "English",
            "marks" : 96
        }
        
        
        
    ]

}
];

const teacher =[ 1,2,];
exports = {
    users,// users= users
    teacher
}
// find a user 
let findUser = users.find(user => user.id ===2);
console.log(findUser);
// check if user available in object
let userIsAVailable = users.some(user => Object.values(user).includes("jacky@gmail.com"));
console.log(userIsAVailable);