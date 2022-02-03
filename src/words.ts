const defaultMessage = " Using word of the day instead.";

export function getWordOfTheDay() {
  if (location.search) {
    try {
      const query = atob(location.search.slice(1));
      if (query.length !== 5) {
        alert(`Incorrect word length from encoded query. ${defaultMessage}`);
      } else {
        return query;
      }
    } catch (e) {
      alert(`Malformed encoded word query. ${defaultMessage}`);
    }
  }

  const now = new Date();
  const start = new Date(2022, 0, 0);
  const diff = Number(now) - Number(start);
  let day = Math.floor(diff / (1000 * 60 * 60 * 24));
  console.log(answers.length);
  while (day > answers.length) {
    day -= answers.length;
  }
  console.log(day);
  return answers[0];
}

const answers = ["carrot"];

const allowedGuesses = ["papaya", "potato", "gourd"];
export const allWords = [...answers, ...allowedGuesses];
