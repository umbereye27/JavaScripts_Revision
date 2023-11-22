function leapYear(year) {
    
if((year%4==0) && ((year%400==0) || (year%100!==0))){
    return "Is a leap year";
}
else{
    return " Is not a leap year";
}
    
}
console.log(leapYear(1988));