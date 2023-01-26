let btn = document.getElementById("button");
btn.addEventListener("click", () => {
  fetch("https://swapi.dev/api/people/1").then((data) => {
    data.json().then((parsedData) => {
      console.log(parsedData);
      function makeTable() {
        let title = document.getElementById("title");
        title.innerText = parsedData.name;

        let tableWithData = document.getElementById("tableWithData");

        let tablebody = document.createElement("tbody");
        let headings = document.createElement("thead");

        headings.innerHTML = `<tr>
      <th>Mass:</th>
      <th>Height:</th>
      <th>Eye color:</th>
      <th>Hair color:</th>
      </tr>`;
        tablebody.innerHTML = `
      <tr>
      <td> ${parsedData.mass}</td>
      <td>${parsedData.height}</td>
      <td>${parsedData.eye_color}</td>
      <td>${parsedData.hair_color}</td>
      </tr>`;

        document.body.append(tableWithData);
        tableWithData.appendChild(headings);
        tableWithData.appendChild(tablebody);
      }
      makeTable();
    });
  });
});
