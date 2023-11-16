
function squareStar(n) {
    let string = "";

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j <= n; j++) {
            string += "*"; 
        }
        string += "\n";
    }

    return string;
}

console.log(squareStar(4));
