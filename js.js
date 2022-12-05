import allCountries from './data.js';

// selecting main html elements and creating them in the top for easy accessing
const my_main_div = document.getElementById('main_div');
const btnContainer = document.querySelector('.btn-container');

let continents = ['all'];

for (let i = 0; i < allCountries.length; i++) {

    // In the loops we are accessing object values, making new elements and adding them to my_main_div
    // new main elements are created for the cards
    const new_card = document.createElement('div');
    new_card.setAttribute('class', 'new_card')
    my_main_div.appendChild(new_card);
    const card_front = document.createElement('div');
    card_front.setAttribute('class', 'front');
    new_card.appendChild(card_front);
    const card_back = document.createElement('div');
    card_back.setAttribute('class', 'back');
    new_card.appendChild(card_back);

    // creating minor elements for front and back of the cards
    const my_country_name = document.createElement('h2');
    my_country_name.innerText = allCountries[i].name.common;
    my_country_name.setAttribute('class', 'country_name')
    card_front.appendChild(my_country_name);
    
    // checking if capital is undefined or has value 
    if (allCountries[i].capital === undefined) {

        const capital = document.createElement('h2');
        capital.innerText = `Capital: data not found`;
        card_front.appendChild(capital);
        const my_img = document.createElement('img');
        card_front.appendChild(my_img);
        my_img.setAttribute('src', allCountries[i].flags.png);
        my_img.setAttribute('loading', 'lazy');

    } else {

        const capital = document.createElement('h2');
        capital.innerText = allCountries[i].capital[0];
        card_front.appendChild(capital);
        const my_img = document.createElement('img');
        card_front.appendChild(my_img);
        my_img.setAttribute('src', allCountries[i].flags.png);
        my_img.setAttribute('loading', 'lazy');

    }

    let continent = document.createElement('h2');
    continent.setAttribute('class', 'continent-name');
    continent.innerText = allCountries[i].continents;
    card_front.appendChild(continent);

    // comparing continent.innerText and according to that changing continents innerText color
    // using switch method
    switch (continent.innerText) {
        case 'Africa':
            continent.style.color = 'orange';
            break;
        case 'North America':
            continent.style.color = 'red';
            break;
        case 'South America':
            continent.style.color = 'green';
            break;
        case 'Europe':
            continent.style.color = '#0074D9';
            break;
        case 'Asia':
            continent.style.color = 'purple';
            break;
        case 'Oceania':
            continent.style.color = '#ffdb58';
            break;
        default:
            continent.style.color = '#7FDBFF'
    }

    // adding content information to continents array
    if (!continents.includes(allCountries[i].continents[0])) {
        continents.push(allCountries[i].continents[0])
        }
    
    let currencies = document.createElement('h2');
    // currencies.setAttribute('class', 'currencies')
    card_back.appendChild(currencies);


    for (let j in allCountries[i].currencies) {
        
        currencies.innerText = `Currencies: ${allCountries[i].currencies[j].name}`

    }

    let languages = document.createElement('h2');
    languages.innerText = `Languages: ${allCountries[i].languages}`
    

    for (let country in allCountries[i].languages) {
        
        languages.innerText = `Language: ${allCountries[i].languages[country]}`
        card_back.appendChild(languages);
        
    }

    let neighbours = document.createElement('h2');
    let border = allCountries[i].borders;

    if (allCountries[i].borders) {
        neighbours.innerText = `Neighbour(s): ${border.map((el) => " " + el)}`;
        card_back.appendChild(neighbours)
    }
   
    let population = document.createElement('h2');
    population.innerText = `Population: ${allCountries[i].population}`;
    card_back.appendChild(population);

}
    
// creating function for clicking a button to filter continents by their name
for (let b = 0;  b < continents.length; b++) {
    const newbtn = document.createElement('button');
    newbtn.innerText = continents[b];
    btnContainer.appendChild(newbtn);
}

const continentName = document.querySelectorAll('.continent-name');
const my_buttons = document.getElementsByTagName('button');

for (let button of my_buttons) {

    button.addEventListener('click', () => {
        getCountries(button.innerText);
        
    })

}

const getCountries = (continent) => {

    for (let j of continentName) {
        // console.log(j)
        if (continent === j.innerText || continent === 'all') {
            j.parentElement.parentElement.style.display = 'block';
            console.log(j.parentElement)
        } else {
            j.parentElement.parentElement.style.display = 'none';
        }
    } 

}



