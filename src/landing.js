// landing section
let landing = document.createElement('section');
landing.classList.add('landing-section');

// HEADER
let header = document.createElement('header');

// img
import Logo from './assets/images/logo.jpg';
const PhoLogo = new Image();
PhoLogo.src = Logo;
header.appendChild(PhoLogo);

// pho hoa
let phohoalogotext = document.createElement('h1');
phohoalogotext.textContent = "Pho Hoa";
header.appendChild(phohoalogotext);
// restaurant
let restaurantdiv = document.createElement('div');
header.appendChild(restaurantdiv);
// resaurant para
let restaurantsubtext = document.createElement('p');
restaurantsubtext.textContent = "Restaurant";
restaurantdiv.appendChild(restaurantsubtext);
// est 1984 para
let establishedsubtext = document.createElement('p');
establishedsubtext.textContent = "Est. 1984";
restaurantdiv.appendChild(establishedsubtext);


// nav
let nav = document.createElement('nav');
// link home
let home = document.createElement('a');
home.classList.add('tabbutton');
home.classList.add('home');
home.textContent = "Home"
nav.appendChild(home);
// link menu
let menu = document.createElement('a');
menu.classList.add('tabbutton');
menu.classList.add('menu');
menu.textContent = "Menu"
nav.appendChild(menu);
// link contact
let contact = document.createElement('a');
contact.classList.add('tabbutton');
contact.classList.add('contact');
contact.textContent = "Contact"
nav.appendChild(contact);






// append content to landing
landing.appendChild(header);
landing.appendChild(nav);
// export landing
export default landing