var earnedList = document.getElementById("earnedList");

function showTrophy() {
 
  const earnedFilter = trophyGroup.filter(
    (sT) => sT.isEarned === true
  );
  const earnedSort = earnedFilter.sort((b, a) => {
    const dateA = new Date(a.earnedOn);
    const dateB = new Date(b.earnedOn);
  
    return dateA - dateB;
  });
  const latest = earnedSort.slice(0, 10);
  let i = 0;
  for (const itemLatest of latest) {
    var trans = 100 - 5*i;
    const div = document.createElement("div");
    div.innerHTML = `
      <img class="earnedTrophyIMG" src="trophy/${itemLatest.id}.png" style="opacity:`+trans+`%">
    `;
    earnedList.appendChild(div);
    i++;
  }
}
showTrophy();
