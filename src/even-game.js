import readlineSync from 'readline-sync';

const getRandomInt = (max=99) => Math.floor(Math.random() * max);

const isEven = (int) => int % 2 === 0 ? true : false;

const answerToBool = (answer) => answer === 'yes' ? true : false;

const brainEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const questionsCount = 3;
  for (let i = 0; i < questionsCount; i += 1) {
    const questionInt = getRandomInt();
    const questionIntEven = isEven(questionInt);

    console.log(`Question: ${questionInt}`);
    const answer = readlineSync.question('Your answer: ');

    if (questionIntEven === answerToBool(answer)) {
      console.log('Correct!');
    } else {
      return `'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, Bill!`;
    }
  }
  return `Congratulations`;
}