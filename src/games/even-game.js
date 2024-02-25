import getRandomInt from './tools/tools.js';

const ruleMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainEven = () => {
  const questionInt = getRandomInt();
  const questionIntEven = questionInt % 2 === 0;

  const question = `Question: ${questionInt}`;
  const rightAnswer = questionIntEven ? 'yes' : 'no';

  return [question, rightAnswer];
};

export { ruleMessage, brainEven };
