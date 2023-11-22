function traffic(number) {
    let color ="";
    switch (number) {
        case 1:
            color= "Red";
            break;
        case 2:
            color= "Yellow";
            break;
        case 3:
            color= "Green";
            break;
        default:
            return "invalid input"
    }
    return color;
}
console.log(traffic(2));