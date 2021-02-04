const firstArr = ["SpiderMan", "Homer", "C3PO", "Gandalf", "Princess Leia"];
const secondArr = ["drinks", "waltzing with", "enjoying a"];
const thirdArr = ["vodka by the sea", "beer at Millenium Falcon", "whisky at the bar", "Port wine on the Titanic", "gin"];

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
  
}

function getMessage(array) {
  return array[getRandomIndex(array)];
}

function getFullMessage(firstArr, secondArr, thirdArr) {
  return getMessage(firstArr) + " " + getMessage(secondArr) + " " + getMessage(thirdArr);
}

console.log(getFullMessage(firstArr, secondArr, thirdArr));
