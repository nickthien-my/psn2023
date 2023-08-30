const earnedTrophiesNumber = document.getElementById("earnedTrophies");
returnETN();

function returnETN() {
    const filterEarned = trophyGroup.filter(
        (fE) => fE.isEarned === true
      );
      const earnedTrophies = filterEarned.length;
earnedTrophiesNumber.innerHTML = earnedTrophies;

}