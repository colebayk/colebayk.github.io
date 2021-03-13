fetch('https://byui-cit230.github.io/weather/data/towndata.json')
  .then((response) => response.json())
  .then((dice) => {
    console.log(dice);
    console.log(dice.towns[6]);


    for (let i = 0; i < dice.towns.length; i++) {
        if (i == 1 || i == 6 || i == 5) {
            let card = document.createElement('div');
            
            let info = document.createElement('section');
            let photo = document.createElement('figure');
            
            let name = document.createElement('h2');
            let motto = document.createElement('h3');
            let date = document.createElement('p');
            let people = document.createElement('p');
            let rain = document.createElement('p');
            let image = document.createElement('img');
   
            name.textContent = dice.towns[i].name;
            motto.textContent = dice.towns[i].motto;
            date.textContent = 'Year Founded: ' + dice.towns[i].yearFounded;
            people.textContent = 'Population: ' + dice.towns[i].currentPopulation;
            rain.textContent = 'Annual Rain Fall: ' + dice.towns[i].averageRainfall + 'in';
            image.setAttribute('src', 'images/'+dice.towns[i].photo);
            image.setAttribute('alt', dice.towns[i].name + ' Hometown');
            image.setAttribute('width', '400');
            image.setAttribute('height', '200');
            
            info.appendChild(name);
            info.appendChild(motto);
            info.appendChild(date);
            info.appendChild(people);
            info.appendChild(rain);
            card.appendChild(info);
            
            photo.appendChild(image);
            card.appendChild(photo);

            document.getElementById('cards').appendChild(card);
        }
    }

});