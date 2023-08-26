const sortedTrophies = trophies.items.sort(
  (a, b) => b.earned - a.earned
);
const filteredTrophies = sortedTrophies.filter(
  (sortedTrophy) => sortedTrophy.unlocked === "TRUE"
);

const latest = filteredTrophies.slice(0, 1);


const list = document.querySelector("#list");

const ul = document.createElement("ul");
for (const item of latest) {
const li = document.createElement("li");
  
//   const div = document.createElement("div");
//   div.classList.add("trophy");
//   div.style.opacity = 0.9 - 0.25 * i;
  li.innerHTML = `
    <img src="trophy/${item.id}.png" alt="${item.name} trophy">
    <div class="trophy-info">
    <h3>${item.name}</h3>
    <p>${item.description}</p>
    </div>
  `;
  ul.appendChild(li);
}
list.appendChild(ul);