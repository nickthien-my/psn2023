var progressBar = document.getElementById("progress-bar");
progressBar.classList.add("progressBar");

for (var k = 0; k < filterEarned.length; k++) {
  var dataItem = filterEarned[k];
  var cell = document.createElement("div");
  cell.className = "progressCell";
  switch (dataItem.type) {
    case "bronze":
      cell.classList.add("bronze");
      cell.style.width = (15 / points) * 800 + "px";
      cell.style.borderRight = "1px solid rgba(0,0,0,0.25)";
      progressBar.appendChild(cell);
      break;
    case "silver":
      cell.classList.add("silver");
      cell.style.width = (30 / points) * 800 + "px";
      cell.style.borderRight = "1px solid rgba(0,0,0,0.25)";
      progressBar.appendChild(cell);
      break;
    case "gold":
      cell.classList.add("gold");
      cell.style.width = (90 / points) * 800 + "px";
      cell.style.borderRight = "1px solid rgba(0,0,0,0.25)";
      progressBar.appendChild(cell);
      break;
  }
}

for (var l = 0; l < filterUnearned.length; l++) {
  var dataItem = filterUnearned[l];
  var cell = document.createElement("div");
  cell.className = "progressCell";
  switch (dataItem.type) {
    case "bronze":
      cell.classList.add("not");
      cell.style.width = (15 / points) * 800 + "px";
      progressBar.appendChild(cell);
      break;
    case "silver":
      cell.classList.add("not");
      cell.style.width = (30 / points) * 800 + "px";
      progressBar.appendChild(cell);
      break;
    case "gold":
      cell.classList.add("not");
      cell.style.width = (90 / points) * 800 + "px";
      progressBar.appendChild(cell);
      break;
    case "platinum":
      cell.style.display = "none";
      break;
  }
}
