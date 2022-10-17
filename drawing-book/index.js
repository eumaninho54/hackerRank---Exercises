'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n, p) {
    // Write your code here
    let toTurnLeft = 0
    let toTurnRight = 0

    // Left to Right
    for (let i = 1; i <= n; i++) {
        if(i == p){
            break
        }

        if(i % 2 != 0) {
            toTurnLeft++
        }
    }
    
    // Right to left
    for (let i = n; i >= 1; i--) {
        if(i == p){
            break
        }

        if(i % 2 == 0) {
            toTurnRight++
        }
    }

    if(toTurnLeft < toTurnRight) {
        return toTurnLeft
    }
    else {
        return toTurnRight
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const p = parseInt(readLine().trim(), 10);

    const result = pageCount(n, p);

    ws.write(result + '\n');

    ws.end();
}
