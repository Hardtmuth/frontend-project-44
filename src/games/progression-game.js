import getRandomInt from './tools/tools.js';

const ruleMessage = 'What number is missing in the progression?';

const brainProgression = () => {
  const progressionLength = 10;
  const startProgressionInt = getRandomInt();
  const stepProgression = getRandomInt(1, 5);

  const progression = [startProgressionInt];
  let nextInt = startProgressionInt + stepProgression;

  for (let i = 0; i < progressionLength - 1; i += 1) {
    progression.push(nextInt);
    nextInt += stepProgression;
  }

  const replaceIndex = getRandomInt(0, 9);
  const rightAnswer = progression[replaceIndex];

  progression[replaceIndex] = '..';
  const question = `Question: ${progression.join(' ')}`;

  return [question, rightAnswer];
};

export { ruleMessage, brainProgression };
