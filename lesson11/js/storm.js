function togglemenu() {
    
    document.getElementById("primaryNav").classList.toggle("hide");
}

const option = {day:"numeric", month: "numeric", year: "numeric", time:"numeric"};
document.getElementById("lastupdated").textContent = new Date().toLocaleString("en-us", option);

const today = new Date();
console.log(today);

const dayNumber = today.getDate();
console.log(dayNumber);

function adjustRating(storm) {
    document.getElementById("stormvalue").innerHTML = storm;
}

