function grade(scores) {

    switch(Math.floor(scores/10)){
        case 10:
            return "A";
            break;
        case 9:
            return "B";
            break;
        case 8:
            return "C";
            break;
         case 7:
             return "D";
             break;         
         case 6:
         case 5:
            return "E";
            break;
        default:
            return "FAIL";
    }
    
}
console.log("Your grade is  ",grade(90));