import getRandomInt from './tools/tools.js';

const getRightAnswer = (leftOperand, rightOperand) => {
  const result = leftOperand / rightOperand; // TODO do the game logic
  return result;
};

const ruleMessage = 'Find the greatest common divisor of given numbers.';

const brainGcd = () => {
  const leftOperand = getRandomInt();
  const rightOperand = getRandomInt();

  const question = `Question: ${leftOperand} ${rightOperand}`;
  const rightAnswer = getRightAnswer(leftOperand, rightOperand);

  return [question, rightAnswer];
};

export { ruleMessage, brainGcd };
