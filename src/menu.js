// menu section
let menu = document.createElement('section');
menu.classList.add('menu-tab-section');

// h2 
let phosectionh2 = document.createElement('h2');
phosectionh2.textContent = 'Pho';

// div for menu item 1
let menuitemdiv1 = document.createElement('div');
menuitemdiv1.classList.add('menu-item');

let menuitemnumber = document.createElement('div');
menuitemnumber.classList.add('menu-item-number');
menuitemnumber.textContent = '1.';

let menuitem = document.createElement('div');
menuitem.classList.add('menu-item-text');

let menuitemname = document.createElement('p');
menuitemname.classList.add('menu-item-name');
menuitemname.textContent = 'DAC BIET XE LUA (X LARGE BOWL)';

let menuitemdescription = document.createElement('p');
menuitemdescription.classList.add('menu-item-description');
menuitemdescription.textContent = 'Special Combo w/ rare slices of steak, well-done brisket, flank, tendon, and tripe';
menuitem.appendChild(menuitemname);
menuitem.appendChild(menuitemdescription);

let menuitemprice = document.createElement('div');
menuitemprice.classList.add('menu-item-price');
menuitemprice.textContent = '$10.90';

menuitemdiv1.appendChild(menuitemnumber);
menuitemdiv1.appendChild(menuitem);
menuitemdiv1.appendChild(menuitemprice);

// div for menu item 2
let menuitemdiv2 = document.createElement('div');
menuitemdiv2.classList.add('menu-item');

let menuitemnumber2 = document.createElement('div');
menuitemnumber2.classList.add('menu-item-number');
menuitemnumber2.textContent = '2.';

let menuitem2 = document.createElement('div');
menuitem2.classList.add('menu-item-text');

let menuitemname2 = document.createElement('p');
menuitemname2.classList.add('menu-item-name');
menuitemname2.textContent = 'DAC BIET';

let menuitemdescription2 = document.createElement('p');
menuitemdescription2.classList.add('menu-item-description');
menuitemdescription2.textContent = 'Special Combo w/ rare slices of steak, well-done brisket, flank, tendon, and tripe';
menuitem2.appendChild(menuitemname2);
menuitem2.appendChild(menuitemdescription2);

let menuitemprice2 = document.createElement('div');
menuitemprice2.classList.add('menu-item-price');
menuitemprice2.textContent = '$10.20';

menuitemdiv2.appendChild(menuitemnumber2);
menuitemdiv2.appendChild(menuitem2);
menuitemdiv2.appendChild(menuitemprice2);

// append sections to menu tab section

menu.appendChild(phosectionh2);
menu.appendChild(menuitemdiv1);
menu.appendChild(menuitemdiv2);

// export menu
export default menu