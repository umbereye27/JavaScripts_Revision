function averageArray(arr) {
    let sum = 0;
    let Avg;
    for (let i = 0; i < arr.length; i++) { 
        sum += arr[i];
    }
    Avg = sum / arr.length; 
    return Avg;
}

const Array = [3, 5, 6, 8];
solution = averageArray(Array);
console.log("The average of array elements is:", solution);
