const sortedTrophiesWaffle = trophies.items.sort(
  (a, b) => b.earned - a.earned
);

var waffleInfo = document.getElementById("waffle-chart");
waffleInfo.classList.add("trophyInfo");
var header1 = document.createElement("h2");
header1.classList.add("mainHeader");
header1.innerHTML = `TROPHY PROGRESS`;
waffleInfo.appendChild(header1);
var waffleChart = document.createElement("div");
waffleChart.classList.add("waffleChart");

for (var k = 0; k < sortedTrophiesWaffle.length; k++) {
  var dataItem = sortedTrophiesWaffle[k];
  var cell = document.createElement("div");
  cell.className = "waffle-cell";
  console.log(dataItem.earned);
  if (dataItem.unlocked == "TRUE") {
    switch (dataItem.rarity) {
      case "Bronze":
        cell.classList.add("bronze");
        break;
      case "Silver":
        cell.classList.add("silver");
        break;
      case "Gold":
        cell.classList.add("gold");
        break;
      case "Platinum":
        cell.classList.add("platinum");
        break;
    }
  } else {
    cell.classList.add("not");
  }

  waffleChart.appendChild(cell);
}
waffleInfo.appendChild(waffleChart);