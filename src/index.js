import readlineSync from 'readline-sync';

const startGame = (gameRules, game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(gameRules); // Сообщение с правилами запускаемой игры

  const questionsCount = 3; // Количество вопросов в игре
  for (let i = 0; i < questionsCount; i += 1) {
    const [gameQuestion, correctAnswer] = game();
    console.log(gameQuestion); // Вопрос из игры
    const answer = readlineSync.question('Your answer: '); // Запрос ответа у пользователя

    // Проверка ответа пользователя с верным ответом
    if (answer === correctAnswer.toString()) {
      console.log('Correct!'); // Сообщение при правильном ответе
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return; // Сообщение при неправльном ответе и выход из игры
    }
  }
  console.log(`Congratulations, ${name}!`); // Сообщение при успешном прохождении игры
};

export default startGame;
