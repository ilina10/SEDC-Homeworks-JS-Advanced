//First task

function makeTable(data) {
  let tableWithData = document.getElementById("table");
  let headings = document.createElement("thead");
  headings.innerHTML = `<tr>
  <th>Planet Name:</th>
  <th>Population:</th>
  <th>Climate:</th>
  <th>Gravity:</th>
  </tr>`;

  for (let i = 0; i < data.results.length; i++) {
    console.log(data.results[i]);
    let tableBody = document.createElement("tbody");
    tableBody.innerHTML = `
      <tr>
      <td> ${data.results[i].name}</td>
      <td>${data.results[i].population}</td>
      <td>${data.results[i].climate}</td>
      <td>${data.results[i].gravity}</td>
      </tr>`;
    document.body.append(tableWithData);
    tableWithData.appendChild(headings);
    tableWithData.appendChild(tableBody);
  }
}

const btn = document.getElementById("generate");
btn.addEventListener("click", () => {
  fetch("https://swapi.dev/api/planets/?page=1").then((data) => {
    data.json().then((parsedData) => {
      console.log(parsedData);
      makeTable(parsedData);
      hideButton(btn);
      showButton(next);
    });
  });
});

//Second task

const previousButton = document.getElementById("previous");
previous.addEventListener("click", () => {
  fetch("https://swapi.dev/api/planets/?page=1").then((data) => {
    data.json().then((parsedData) => {
      table.innerHTML = "";
      console.log(parsedData);
      makeTable(parsedData);
      hideButton(previousButton);
      showButton(nextButton);
    });
  });
});

const nextButton = document.getElementById("next");
next.addEventListener("click", () => {
  fetch("https://swapi.dev/api/planets/?page=2").then((data) => {
    data.json().then((nextData) => {
      table.innerHTML = "";
      console.log(nextData);
      makeTable(nextData);
      hideButton(nextButton);
      showButton(previousButton);
    });
  });
});

function hideButton(button) {
  button.style.display = "none";
}

function showButton(button) {
  button.style.display = "block";
}

hideButton(nextButton);
hideButton(previousButton);
