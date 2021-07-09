// import './style.css';
import landing from './landing';
import home from './home';
import menu from './menu';
import contact from './contact';


let content = document.querySelector('#content'); // create content div
content.appendChild(landing); // append landing



// tab switching behaviour
let hometab = document.querySelector('.tabbutton.home');
let menutab = document.querySelector('.tabbutton.menu');
let contacttab = document.querySelector('.tabbutton.contact');
function switchTabs(e){
    if (e.target.className === "tabbutton home"){
        if (MenuTabOn === true){
            content.removeChild(menu);
            content.appendChild(home);
        }
        if (ContactTabOn === true){
            content.removeChild(contact);
            content.appendChild(home);
        }
        HomeTabOn = true;
        MenuTabOn = false;
        ContactTabOn = false;
    }else if (e.target.className === "tabbutton menu"){
        if (HomeTabOn === true){
            content.removeChild(home);
            content.appendChild(menu);
        }
        if (ContactTabOn === true){
            content.removeChild(contact);
            content.appendChild(menu);
        }
        HomeTabOn = false;
        MenuTabOn = true;
        ContactTabOn = false;
    }else if (e.target.className === "tabbutton contact"){
        if (HomeTabOn === true){
            content.removeChild(home);
            content.appendChild(contact);
        }
        if (MenuTabOn === true){
            content.removeChild(menu);
            content.appendChild(contact);
        }
        HomeTabOn = false;
        MenuTabOn = false;
        ContactTabOn = true;
    }
}
hometab.addEventListener('click', switchTabs);
menutab.addEventListener('click', switchTabs);
contacttab.addEventListener('click', switchTabs);

// on load
content.appendChild(home);
let HomeTabOn = true;
let MenuTabOn = false;
let ContactTabOn = false;