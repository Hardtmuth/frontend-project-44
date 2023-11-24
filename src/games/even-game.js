import readlineSync from 'readline-sync';
import { getRandomInt } from './tools/tools.js';

//const getRandomInt = (max = 99) => Math.floor(Math.random() * max);

const answerToBool = (answer) => {
  switch (answer) {
    case 'yes':
      return true;
    case 'no':
      return false;
    default:
      return null;
  }
};

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const questionsCount = 3;
  for (let i = 0; i < questionsCount; i += 1) {
    const questionInt = getRandomInt();
    const questionIntEven = questionInt % 2 === 0;
    const correct = questionIntEven ? 'yes' : 'no';

    console.log(`Question: ${questionInt}`);
    const answer = readlineSync.question('Your answer: ');

    if (questionIntEven === answerToBool(answer)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default brainEven;
