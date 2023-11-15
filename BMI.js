function personBMI(weight,height,){
    let BMI = weight / (height * height);
    return BMI;

}
console.log("Body Mass Index is:" + personBMI(58,1.65));