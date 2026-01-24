function createTable(rows, columns) {
  let tableHTML = "<table>";

  for (let r = 1; r <= rows; r++) {
    tableHTML += "<tr>";

    for (let c = 1; c <= columns; c++) {
      tableHTML += `<td>Row-${r} Column-${c}</td>`;
    }

    tableHTML += "</tr>";
  }

  tableHTML += "</table>";

  return tableHTML;
}


  document.getElementById("createBtn")
  document.addEventListener("click", function () {
    let rows = parseInt(prompt("Enter number of rows:"));
    let columns = parseInt(prompt("Enter number of columns:"));

    if (isNaN(rows) || isNaN(columns) || rows <= 0 || columns <= 0) {
      alert("Please enter valid numbers!");
      return;
    }

    document.getElementById("TableContainer").innerHTML =
      createTable(rows, columns);
  });

