function dayWeek(day) {
    switch (day) {
        case 1:
            return "Monday";
            break;
        case 2:
            return "Tuesday";
            break;
        case 3:
            return "Wednseday";
            break;
        case 4:
            return "Thusaday";
            break; 
        case 5:
             return "Friday";
             break;  
         case 6:
            return "sutaday";
            break;  
        case 7:
            return "sunday";
            break; 
        default: 
            return "Wrong choise";
        
    }
}
console.log("To day is :",dayWeek(2));
