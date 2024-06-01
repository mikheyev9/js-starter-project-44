import readlineSync from 'readline-sync';

export function askName(){
    const name = readlineSync.question('May I have your name?');
    console.log(`Hello, ${name}!`)
    return name
}

export function hello(helloText, 
){
    console.log(helloText)
}

export function takeAnswer(answerText,
    applyingResultText
){
    console.log(answerText);
    const result = readlineSync.question(applyingResultText);
    return result
}

export let generate = () => {
    let min = Math.ceil(0);
    let max = Math.floor(1000);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomValue(values){
    let randomIndex = Math.floor(Math.random() * values.length)
    return [values[randomIndex], randomIndex]
}

export function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

export function arithmeticProgression(start, difference, length) {
    let progression = [];
    for (let i = 0; i < length; i++) {
        progression.push(start + i * difference);
    }
    return progression;
}

export function consoleList(list, needSwapIndex){
    let res = list.map((value, index)=> index === needSwapIndex ? '..' : value);
    return res.join(' ')
}
