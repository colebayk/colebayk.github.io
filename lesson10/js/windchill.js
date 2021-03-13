
const tempnumber = parseFloat(document.getElementById("temp").textContent);
console.log(tempnumber);

const speednumber = parseFloat(document.getElementById("speed").textContent);
console.log(speednumber);

let windchill = 35.74 + (8.6215 * tempnumber) - (35.75 * Math.pow(speednumber, 0.16)) *
(0.4275 * tempnumber * Math.pow(speednumber, 0.16));
windchill = Math.round(windchill);
console.log(windchill);

if (tempnumber <=50 && speednumber >3) {
    document.getElementById("chill").textContent = "wind Chill is:" +windchill + "*c"; 
} else {
       document.getElementById("chill").textContent = "No wind Chill Today"
}


