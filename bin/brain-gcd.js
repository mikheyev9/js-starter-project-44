#!/usr/bin/env node
import {hello, takeAnswer, generate, askName, gcd} from '../src/cli.js';

function generateQuestion(){
    hello('Welcome to the Brain Games!')
    let name = askName()
    let flag = 0;
    while (flag !== 3){
        let a = generate();
        let b = generate();
        let correctAnswer = gcd(a,b);
        console.log(correctAnswer, 'correct')
        let answer = +takeAnswer('Find the greatest common divisor of given numbers.',
            `Question: ${a} ${b}\n`
        )
        console.log(`Your answer: ${answer}`)
        if (correctAnswer === answer) {
            console.log('Correct!');
            flag++
        } else{
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
        }

    }
}
generateQuestion()