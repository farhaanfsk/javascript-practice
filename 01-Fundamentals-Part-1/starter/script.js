// let sum = 25 + 10 + 1996;
// if (sum > 0) {
//     alert('sum is : ' + sum);
// }


let markMass = 78;
let markHeight = 1.69;

let johnMass = 92;
let johnHeight = 1.95;


function calculateBmi(mass, height) {
    return mass / height ** 2;
}

let markBMI = calculateBmi(markMass, markHeight);
let johnBMI = calculateBmi(johnMass, johnHeight);

console.log(markBMI, johnBMI)
let markHigherBmi = markBMI > johnBMI;

console.log("is marks bmi higher ? : " + markHigherBmi);
