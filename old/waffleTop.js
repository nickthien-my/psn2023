var waffleInfo = document.getElementById("waffle-top");
waffleInfo.classList.add("chartTop");
var waffleChart = document.createElement("div");
waffleChart.classList.add("waffleChartTop");

for (var k = 1; k < trophies.items.length; k++) {
  var dataItem = trophies.items[k];
  var cell = document.createElement("div");
  cell.className = "waffle-cell";
  console.log(dataItem.earned);
  if (dataItem.unlocked == "TRUE") {
    switch (dataItem.rarity) {
      case "Bronze":
        cell.classList.add("bronze");
        cell.style.width="10px";
        break;
      case "Silver":
        cell.classList.add("silver");
        cell.style.width="20px";
        break;
      case "Gold":
        cell.classList.add("gold");
        cell.style.width="60px";
        break;
      case "Platinum":
        cell.style.visibility="none";

        break;
    }
  } else {
    switch (dataItem.rarity) {
      case "Bronze":
        cell.classList.add("not");
        cell.style.width="10px";
        break;
      case "Silver":
        cell.classList.add("not");
        cell.style.width="20px";
        break;
      case "Gold":
        cell.classList.add("not");
        cell.style.width="60px";
        break;
  }
}

  waffleChart.appendChild(cell);
}
waffleInfo.appendChild(waffleChart);