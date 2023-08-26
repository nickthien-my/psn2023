var carousel = document.getElementById("carousel");
carousel.classList.add("trophyInfo");

let currentTrophyIndex = 0;
const ulcarousel = document.createElement("ul");
const licarousel = document.createElement("li");

function showTrophy() {
  const trophy = filterLatestEarned[currentTrophyIndex];

  const iso8601Time = trophy.earnedOn;

  const date = new Date(iso8601Time);

  const formattedDate = date.toLocaleString();

  licarousel.innerHTML =
    `
  <div>
  <p style="margin-top: 5px; margin-bottom:-15px; color:lightgrey">` +
    formattedDate +
    `<p>

  <div class="trophy-top">
  <img src="trophy/${trophy.id}.png" alt="${trophy.trophyName} trophy">
  <p style="font-size: 2.5em;">${trophy.trophyName}</p>
  </div>
  <div class="trophy-bottom">
  <p class="carouselTrophyDescription">${trophy.trophyDescription}</p>
  </div>
  </div>
  `;
  ulcarousel.appendChild(licarousel);
  carousel.appendChild(ulcarousel);
}

function nextTrophy() {
  currentTrophyIndex = (currentTrophyIndex + 1) % filterLatestEarned.length;
  showTrophy();
}

setInterval(nextTrophy, 30000); // 1 minute

showTrophy();
