/*
Advent of Code 2021
Day 2, part 1 & 2
2021-12-02
Emil Malm
https://github.com/up-znibb/AdventOfCode2021
*/
import * as course from './planned_course';

const test: string[] = [
    "forward 5",
    "down 5",
    "forward 8",
    "up 3",
    "down 8",
    "forward 2",
];

/*
### PART 1 ###
*/
let x: number = 0;
let y: number = 0;

function getNumberFromInstruction(input: string, replaceString: string): number {
    let temp: string;
    temp = input.replace(replaceString, '');
    temp.trim();

    return parseInt(temp);
}

function multiplyXandY(arr: string[]): number {
    arr.forEach(instruction => {
        if (instruction.includes("forward")) {
            x += getNumberFromInstruction(instruction, 'forward');
        } else if (instruction.includes("down")) {
            y += getNumberFromInstruction(instruction, 'down');
        } else if (instruction.includes("up")) {
            y -= getNumberFromInstruction(instruction, 'up');
        }
    });

    return x * y;
}

console.log(multiplyXandY(course.planned_cource));

/*
### PART 2 ###
*/

x = 0;
y = 0;
let depth: number = 0;

function multiplyXandYWithDepth(arr: string[]): number {
    arr.forEach(instruction => {
        if (instruction.includes("forward")) {
            x += getNumberFromInstruction(instruction, 'forward');
            depth += y * getNumberFromInstruction(instruction, 'forward');
        } else if (instruction.includes("down")) {
            y += getNumberFromInstruction(instruction, 'down');
        } else if (instruction.includes("up")) {
            y -= getNumberFromInstruction(instruction, 'up');
        }
    });

    return x * depth
}

console.log(multiplyXandYWithDepth(course.planned_cource));
