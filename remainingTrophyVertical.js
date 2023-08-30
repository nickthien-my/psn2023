var remainingList = document.getElementById("remainingList");


function showRemaining() {
  const filterUnearned = trophyGroup.filter(
    (sUT) => sUT.isEarned === false
  );
  const unearnedSorted = filterUnearned.sort((a, b) => b.earnedRate - a.earnedRate);

  const remainderLatest = unearnedSorted.slice(0, 10);

  let i = 0;
  for (const itemRemain of remainderLatest) {
    var trans = 100 - 5*i;
    const div = document.createElement("div");
    div.innerHTML = `
      <img class="remainderTrophyIMG" src="trophy/${itemRemain.id}.png" style="opacity:`+trans+`%">
      </div>
    `;
    i++;
    remainingList.appendChild(div);
  }
}
showRemaining();