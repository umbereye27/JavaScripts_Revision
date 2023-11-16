// function that calculates the Fibonacci sequence up to n numbers.

function fibonacci(n) {
     let Sequence =[0,1];
   
    for (let i = 2; i < n; i++) {
        let nextNumber = Sequence[i - 1] + Sequence[i - 2];
        Sequence.push(nextNumber);
    }

    return Sequence;
}

console.log(fibonacci(8));