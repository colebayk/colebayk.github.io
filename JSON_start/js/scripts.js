//ADD the key and change units to imperial
const apiURL = "//api.openweathermap.org/data/2.5/weather?id=2172797&appid=5b556f3d9f809c6ded3bddd4226f1049"

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherinfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherinfo);
    
    

 }); //end of "then" fat arrow function



