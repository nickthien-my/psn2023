var earnedInfo = document.getElementById("carousel");
earnedInfo.classList.add("trophyInfo");
var header1 = document.createElement("h3");
header1.classList.add("mainHeader");
header1.style.marginTop = "20px";
header1.style.marginBottom = "-5px";
header1.innerHTML = `TROPHIES EARNED`;
earnedInfo.appendChild(header1);
var trophyCarousel = document.createElement("div");
trophyCarousel.classList.add("trophyCarousel");
var list = document.createElement("div");
earnedInfo.appendChild(list);

const sortedTrophies = trophies.items.sort((b, a) => b.earned - a.earned);
const filteredTrophies = sortedTrophies.filter(
  (sortedTrophy) => sortedTrophy.unlocked === "TRUE"
);

let currentTrophyIndex = 0;
const quoteElement = document.getElementById("list");
const ul = document.createElement("ul");
const li = document.createElement("li");

function showTrophy() {
  const trophy = filteredTrophies[currentTrophyIndex];

  li.innerHTML = `
  <div>
  <div class="trophy-top">
  <img src="trophy/${trophy.id}.png" alt="${trophy.name} trophy">
  <p class="trophyName">${trophy.name}</p>
  </div>
  <div class="trophy-bottom">
  <p>${trophy.description}</p>
  </div>
  </div>
  `;
  ul.appendChild(li);
  quoteElement.appendChild(ul);
}

function nextTrophy() {
  currentTrophyIndex = (currentTrophyIndex + 1) % filteredTrophies.length;
  showTrophy();
}

setInterval(nextTrophy, 30000); // 1 minute

showTrophy();
