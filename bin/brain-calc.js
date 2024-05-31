#!/usr/bin/env node
import {hello, takeAnswer, generate, getRandomValue, askName} from '../src/cli.js';


function generateQuestion(){
    let name = askName()
    hello()
    let flag = 0;
    let values = ['*', '-', '+']
    while (flag !== 3){
        let a = generate();
        let b = generate();
        let randomOperator = getRandomValue(values);
        let answer = +takeAnswer('What is the result of the expression?',
            `Question: ${a} ${randomOperator} ${b}\n`
        )
        console.log(`Your answer: ${answer}`)
        let correctAnswer = eval(`${a} ${randomOperator} ${b}`);
        //console.log(correctAnswer, answer)
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
