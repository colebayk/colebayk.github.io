function togglemenu() {
    
    document.getElementById("primaryNav").classList.toggle("hide");
}

const option = {day:"numeric", month: "numeric", year: "numeric", time:"numeric"};
document.getElementById("lastupdated").textContent = new Date().toLocaleString("en-us", option);

const today = new Date();
console.log(today);

const dayNumber = today.getDate();
console.log(dayNumber);

const element = document.getElementById("message");

 if ( dayNumber == 5) {
     element.classList.add("showme");
 } 

 else {
     element.classList.add("hideme");
 }



 
 