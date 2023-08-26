var remainingList = document.getElementById("remainingList");

const remainderLatest = filterUnearned.slice(0, 5);

function showRemaining() {
  const ul = document.createElement("ul");

  for (const itemRemain of remainderLatest) {
    const li = document.createElement("li");
    li.innerHTML = `
      <img src="trophy/${itemRemain.id}.png" alt="${itemRemain.trophyName}" class="remainderImg">
      <div class="trophy-info">
      <h3>${itemRemain.trophyName}</h3>
      <p class="trophyDescription">${itemRemain.trophyDescription}</p>
      </div>
    `;
    ul.appendChild(li);
  }
  remainingList.appendChild(ul);
  var y = remainingNumber();
  if (y > 0) {
  const remaining = document.createElement("p");
  remaining.innerHTML = y + ` left`;
  ul.appendChild(remaining);
  }
  
}
showRemaining();

function remainingNumber() {
const remainingNo = filterUnearned.length - 5;
return(remainingNo);
};
