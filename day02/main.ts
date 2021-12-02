/*
Advent of Code 2021
Day 2, part 1 & 2
2021-12-02
Emil Malm
https://github.com/up-znibb/AdventOfCode2021
*/
import { planned_course } from './planned_course';

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
    return parseInt(input.replace(replaceString, '').trim());
}

function multiplyXandY(arr: string[]): number {
    arr.forEach(instruction => {
        if (instruction.includes("forward")) {
            x += parseInt(instruction.replace('forward', '').trim());
        } else if (instruction.includes("down")) {
            y += parseInt(instruction.replace('down', '').trim());
        } else if (instruction.includes("up")) {
            y -= parseInt(instruction.replace('up', '').trim());
        }
    });

    return x * y;
}

console.log(multiplyXandY(planned_course));

/*
### PART 2 ###
*/

x = 0;
y = 0;
let depth: number = 0;

function multiplyXandYWithDepth(arr: string[]): number {
    arr.forEach(instruction => {
        if (instruction.includes("forward")) {
            x += parseInt(instruction.replace('forward', '').trim());
            depth += y * parseInt(instruction.replace('forward', '').trim());
        } else if (instruction.includes("down")) {
            y += parseInt(instruction.replace('down', '').trim());
        } else if (instruction.includes("up")) {
            y -= parseInt(instruction.replace('up', '').trim());
        }
    });

    return x * depth;
}

console.log(multiplyXandYWithDepth(planned_course));
