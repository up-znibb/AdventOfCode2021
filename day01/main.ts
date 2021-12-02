/*
Advent of Code 2021
Day 1, part 1 & 2
2021-12-01
Emil Malm
https://github.com/up-znibb/AdventOfCode2021
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
    let sum: number = 0;
    if (!isNaN(n1)) {
        n1 = input;
        sum = n1 + n2 + n3;
    }
    if (!isNaN(sum)) {
        newSonarInput.push(sum);
    }
    n3 = n2;
    n2 = n1;
    n1 = input;
});

console.log(calculateLargerMeasurements(newSonarInput));
