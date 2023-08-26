const points = totalPoints();

function totalPoints() {
  var x = 0;
  for (var i = 0; i < trophies.length; i++) {
    var item = trophies[i];
    switch (item.type) {
      case "bronze":
        x = x + 15;
        break;
      case "silver":
        x = x + 30;
        break;
      case "gold":
        x = x + 90;
        break;
    }
  }
  return x;
}

const sortEarnedOn = trophies.sort((a, b) => {
  const dateA = new Date(a.earnedOn);
  const dateB = new Date(b.earnedOn);

  return dateA - dateB;
});
const filterEarned = sortEarnedOn.filter(
  (sortedTrophy) => sortedTrophy.isEarned === true
);

const sortEarnedRate = trophies.sort((a, b) => b.earnedRate - a.earnedRate);
const filterUnearned = sortEarnedRate.filter(
  (sortedUnearnedTrophies) => sortedUnearnedTrophies.isEarned === false
);

const sortLatest = trophies.sort((b, a) => {
  const dateA = new Date(a.earnedOn);
  const dateB = new Date(b.earnedOn);

  return dateA - dateB;
});
const filterLatestEarned = sortLatest.filter(
  (sortedTrophy) => sortedTrophy.isEarned === true
);
