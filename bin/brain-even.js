#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {askName} from '../src/cli.js';

let name = askName()

let genereate = () => {
    let min = Math.ceil(0);
    let max = Math.floor(1000);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let main = () => {
    let counter = 0;
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    while (counter !== 3){
        let number = +genereate();
        const yourAnswer = readlineSync.question(`Question:${number}\n`);
        let output = number % 2 === 0 ? 'yes' : 'no';
        if (yourAnswer=='yes' && number % 2 === 0) {
            console.log('Correct!')
            counter ++
        } else if(yourAnswer == 'no' && number % 2 !== 0){
            console.log('Correct!')
            counter ++
        } else {
            console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${output}'.`)
            console.log("Let's try again, Bill!")
        }
    }
    console.log(`Congratulations, ${name}!`)
}
main()
