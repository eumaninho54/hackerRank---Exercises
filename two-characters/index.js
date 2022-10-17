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
 * Complete the 'alternate' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function alternate(s) {
    // Write your code here

    //beabeefeab
    //babab - 5

    let chars = [...new Set(Array.from(s))]
    let wordLegth = 0;

    for(let i = 0; i < chars.length - 1; i++){
        for(let j = i+1; j < chars.length; j++){
            let count = 0;
            let last = null;
            let pair = [chars[i], chars[j]];
            for(let k = 0; k < s.length; k++){
                if((s[k] == pair[0] || s[k] == pair[1])){
                    if(last == s[k]){
                        count = 0;
                        break;
                    }
                    last = s[k];
                    count++;
                }
            }
            if(count > wordLegth){
                wordLegth = count;
            }
        }
    }

    return wordLegth;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const l = parseInt(readLine().trim(), 10);

    const s = readLine();

    const result = alternate(s);

    ws.write(result + '\n');

    ws.end();
}
