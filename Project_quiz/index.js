// https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple

axios
  .get(
    "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple"
  )
  .then((responce) => {
    console.log(responce);
  })
  .catch((error) => {
    console.log(error);
  });
