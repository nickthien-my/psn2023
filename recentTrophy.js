var earnedList = document.getElementById("recentList");

const latest = filterLatestEarned.slice(0, 10);

function showTrophy() {
  const ul = document.createElement("ul");
  for (const itemLatest of latest) {
    const li = document.createElement("li");
    li.innerHTML = `
    <div class="listTrophies">
      <img src="trophy/${itemLatest.id}.png" alt="${itemLatest.trophyName} trophy">
      
      <h3>${itemLatest.trophyName}</h3>
      
      </div>
    `;
    ul.appendChild(li);
  }
  earnedList.appendChild(ul);
}
showTrophy();
