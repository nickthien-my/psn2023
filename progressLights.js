var progressBar = document.getElementById("progressLights");

function progressLights() {
  for (var i = 1; i < trophyGroup.length; i++) {
    var dataItem = trophyGroup[i];
    var cell = document.createElement("div");
    cell.className = "progressCell";
    if (dataItem.isEarned == true) {
      switch (dataItem.type) {
        case "bronze":
          cell.classList.add("bronze");
          cell.style.border = "2px solid rgba(0,0,0,0.25)";
          progressBar.appendChild(cell);
          break;
        case "silver":
          cell.classList.add("silver");
          cell.style.border = "2px solid rgba(0,0,0,0.25)";
          progressBar.appendChild(cell);
          break;
        case "gold":
          cell.classList.add("gold");
          cell.style.border = "2px solid rgba(0,0,0,0.25)";
          progressBar.appendChild(cell);
          break;
      }
    } else {
      cell.classList.add("not");
      cell.style.border = "2px solid rgba(0,0,0,0.25)";
      progressBar.appendChild(cell);
    }
    console.log(trophyGroup[i].trophyName);
  }
}
progressLights();

// for (var k = 0; k < filterEarned.length; k++) {
//   var dataItem = filterEarned[k];
//   var cell = document.createElement("div");
//   cell.className = "progressCell";
//   switch (dataItem.type) {
//     case "bronze":
//       cell.classList.add("bronze");
//       cell.style.borderRight = "1px solid rgba(0,0,0,0.25)";
//       progressBar.appendChild(cell);
//       break;
//     case "silver":
//       cell.classList.add("silver");
//       cell.style.borderRight = "1px solid rgba(0,0,0,0.25)";
//       progressBar.appendChild(cell);
//       break;
//     case "gold":
//       cell.classList.add("gold");
//       cell.style.borderRight = "1px solid rgba(0,0,0,0.25)";
//       progressBar.appendChild(cell);
//       break;
//   }
// }

// for (var l = 0; l < filterUnearned.length; l++) {
//   var dataItem = filterUnearned[l];
//   var cell = document.createElement("div");
//   cell.className = "progressCell";
//   switch (dataItem.type) {
//     case "bronze":
//       cell.classList.add("not");
//       progressBar.appendChild(cell);
//       break;
//     case "silver":
//       cell.classList.add("not");
//       progressBar.appendChild(cell);
//       break;
//     case "gold":
//       cell.classList.add("not");
//       progressBar.appendChild(cell);
//       break;
//     case "platinum":
//       cell.style.display = "none";
//       break;
//   }
// }
