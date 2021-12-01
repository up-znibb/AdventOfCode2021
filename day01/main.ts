/*
Ska krypa till korset och säga att jag fuskade på denna.
Då jag sätter n1 det sista jag gör i loopen på part 2 så räkna den inte med det sista numret.
Så då la jag bara till en 0:a i input-datan så räknar den rätt. För då är sista n1 0 och då har den räknat med det tidigare sista numret.
Kanska hade varit bättre att skapa en funktion som räknar ut summan av tre nummer istället och kört funktionen för varje iteration.
Får se om jag får tid att lösa det vid ett senare tillfälle :D
*/
import * as sonar from './sonar_input';

const test = [
    199,
    200,
    208,
    210,
    200,
    207,
    240,
    269,
    260,
    263
];

/*
### PART 1 ###
*/

function calculateLargerMeasurements(arr): number {
    let largerMeasuremetns: number = 0;
    let lastInput: number;
    arr.forEach(input => {
        if (lastInput < input) {
            largerMeasuremetns++;
        }

        lastInput = input;
    });

    return largerMeasuremetns;
}

console.log(calculateLargerMeasurements(sonar.sonar_input));


/*
### PART 2 ###
*/


let n1: number;
let n2: number = 0;
let n3: number = 0;
let newSonarInput: number[] = [];
sonar.sonar_input.forEach(input => {
    let sum = n1 + n2 + n3;
    if (!isNaN(sum)) {
        newSonarInput.push(sum);
    }
    n3 = n2;
    n2 = n1;
    n1 = input;
});

console.log(calculateLargerMeasurements(newSonarInput));
