#!/usr/bin/env node
import {hello, takeAnswer,generate,
     askName, gcd, arithmeticProgression,
     getRandomValue, consoleList} from '../src/cli.js';

function generateQuestion(){
    hello('Welcome to the Brain Games!')
    let name = askName()
    let flag = 0;
    while (flag !== 3){
        let progression = arithmeticProgression(1, 2, 10);
        let [randomChoice, indexChoice] = getRandomValue(progression)
        //console.log(progression, typeof(progression), Array.isArray(progression));
        //console.log(randomChoice)
        let show = consoleList(progression, indexChoice)
        //console.log(show)
        //console.log(correctAnswer, 'correct')
        let answer = +takeAnswer('Find the greatest common divisor of given numbers.',
            `Question: ${show}\n`
        )
        console.log(`Your answer: ${answer}`)
        if (randomChoice === answer) {
            console.log('Correct!');
            flag++
        } else{
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${randomChoice}'.`);
            console.log(`Let's try again, ${name}!`);
        }

    }
}
generateQuestion()