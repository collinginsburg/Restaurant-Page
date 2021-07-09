// home section
let home = document.createElement('section');
home.classList.add('home-tab-section');


// hero
let hero = document.createElement('div');
hero.classList.add('hero');
let subtextlittle = document.createElement('h3');
subtextlittle.textContent = "Four decades and only one thing on the menu:"; 
let subtextmain = document.createElement('h2');
subtextmain.textContent = "authentic beef pho soup";
hero.appendChild(subtextlittle);  
hero.appendChild(subtextmain);  


// hours
let hours = document.createElement('section');
hours.classList.add('hours-section');
let hoursheadline = document.createElement('h2');
let hoursspecific = document.createElement('h3');
hoursheadline.textContent = "Hours";
hoursspecific.textContent = `
Monday: 7am-8pm
Tuesday: 7am-8pm
Wednesday: 7am-8pm
Thursday: 7am-8pm
Friday: 7am-8pm
Saturday:  7am-8pm
Sunday: 7am-8pm`;
hours.appendChild(hoursheadline);
hours.appendChild(hoursspecific);

// location
let location = document.createElement('section');
location.classList.add('location-section');
let locationtitle = document.createElement('h2'); // location title
locationtitle.textContent = "Located in Little Saigon";
location.appendChild(locationtitle);
let locationaddress = document.createElement('h3'); // location address
locationaddress.textContent = "4717 El Cajon Blvd, San Diego, CA 92115";
location.appendChild(locationaddress);
import Map from './assets/images/PhoHoaLocation.png'; // map
const PhoMap = new Image();
PhoMap.src = Map;
location.appendChild(PhoMap);



home.appendChild(hero);
home.appendChild(hours);
home.appendChild(location);
// export home
export default home