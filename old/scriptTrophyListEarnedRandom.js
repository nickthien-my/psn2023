const sortedTrophies = trophies.items.sort((a, b) => b.earned - a.earned);
const filteredTrophies = sortedTrophies.filter(
  (sortedTrophy) => sortedTrophy.unlocked === "TRUE"
);

const getRandomTrophy = () => {
  const randomIndex = Math.floor(Math.random() * filteredTrophies.length);
  return filteredTrophies[randomIndex];
};

const list = document.querySelector("#list");
const ul = document.createElement("ul");
const li = document.createElement("li");
const trophy = getRandomTrophy();

li.innerHTML = `
<img src="trophy/${trophy.id}.png" alt="${trophy.name} trophy">
<div class="trophy-info">
<h3>${trophy.name}</h3>
<p>${trophy.description}</p>
</div>
`;
ul.appendChild(li);
list.append(ul);

const updateQuote = () => {
  const trophy = getRandomTrophy();

  li.innerHTML = `
    <img src="trophy/${trophy.id}.png" alt="${trophy.name} trophy">
    <div class="trophy-info">
    <h3>${trophy.name}</h3>
    <p>${trophy.description}</p>
    </div>
  `;
  ul.appendChild(li);
  list.append(ul);
};

setInterval(updateQuote, 300000);
