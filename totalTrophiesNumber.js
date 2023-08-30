const totalTrophiesNumber = document.getElementById("totalTrophies");
returnTTN();


function returnTTN() {
    const totalTrophies = trophyGroup.length;

totalTrophiesNumber.innerHTML = totalTrophies;
}
