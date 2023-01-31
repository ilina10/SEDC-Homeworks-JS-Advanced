//Exercise nu.1
//1.Function that takes a number through a parameter and returns how many digits that number has
function digitCount(num) {
  let counter = 0;
  let number = Math.abs(num);
  while (number != 0) {
    number = Math.floor(number / 10);
    counter++;
  }
  return counter;
}

//2.Function that takes a number through a parameter and returns if its even or odd
function oddOrEven(number) {
  if (number === 0) {
    return `${number} is zero`;
  } else if (number % 2 !== 0) {
    return `${number}is odd`;
  } else if (number % 2 == 0) {
    return `${number} is even`;
  }
}

//3.Function that takes a number through a parameter and returns if its positive or negative
function positiveOrNegative(number) {
  if (number > 0) {
    return `${number} is positive`;
  } else if (number === 0) {
    return `${number} is neither positive nor negative
    `;
  } else {
    return `${number} is negative`;
  }
}

//4.Create a function that takes a number through a parameter and calls all three functions for the number that was passed. It should show the results in the console.
function getNumStats(num) {
  console.log(
    `${digitCount(num)} digits, ` +
      `${positiveOrNegative(num)}, ` +
      `${oddOrEven(num)} `
  );
}
getNumStats(10);

//Exercise nu.2

let changeColor = (element, color = "black") => (element.style.color = color);
let changeTextSize = (element, textSize) => {
  if (textSize === "") {
    element.style.fontSize = "24px";
  } else {
    element.style.fontSize = textSize + "px";
  }
};

let btn = document.getElementsByTagName("button")[0];
btn.addEventListener("click", () => {
  let inputTextSize = document.getElementById("fontSize").value;
  let inputColor = document.getElementById("color").value;
  let header = document.getElementById("title");
  changeTextSize(header, inputTextSize);
  changeColor(header, inputColor);
});
