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

// div for menu item 3
let menuitemdiv3 = document.createElement('div');
menuitemdiv3.classList.add('menu-item');

let menuitemnumber3 = document.createElement('div');
menuitemnumber3.classList.add('menu-item-number');
menuitemnumber3.textContent = '3.';

let menuitem3 = document.createElement('div');
menuitem3.classList.add('menu-item-text');

let menuitemname3 = document.createElement('p');
menuitemname3.classList.add('menu-item-name');
menuitemname3.textContent = 'TAI, NAM, GAU, GAN, SACH';

let menuitemdescription3 = document.createElement('p');
menuitemdescription3.classList.add('menu-item-description');
menuitemdescription3.textContent = 'Rare steak, well-done flank, brisket, tendon, and tripe';
menuitem3.appendChild(menuitemname3);
menuitem3.appendChild(menuitemdescription3);

let menuitemprice3 = document.createElement('div');
menuitemprice3.classList.add('menu-item-price');
menuitemprice3.textContent = '$9.75';

menuitemdiv3.appendChild(menuitemnumber3);
menuitemdiv3.appendChild(menuitem3);
menuitemdiv3.appendChild(menuitemprice3);

// div for menu item 4
let menuitemdiv4 = document.createElement('div');
menuitemdiv4.classList.add('menu-item');

let menuitemnumber4 = document.createElement('div');
menuitemnumber4.classList.add('menu-item-number');
menuitemnumber4.textContent = '4.';

let menuitem4 = document.createElement('div');
menuitem4.classList.add('menu-item-text');

let menuitemname4 = document.createElement('p');
menuitemname4.classList.add('menu-item-name');
menuitemname4.textContent = 'CHIN NAM GAU GAN, SACH';

let menuitemdescription4 = document.createElement('p');
menuitemdescription4.classList.add('menu-item-description');
menuitemdescription4.textContent = 'Well-done flank, brisket, tendon, and tripe';
menuitem4.appendChild(menuitemname4);
menuitem4.appendChild(menuitemdescription4);

let menuitemprice4 = document.createElement('div');
menuitemprice4.classList.add('menu-item-price');
menuitemprice4.textContent = '$9.75';

menuitemdiv4.appendChild(menuitemnumber4);
menuitemdiv4.appendChild(menuitem4);
menuitemdiv4.appendChild(menuitemprice4);

// div for menu item 5
let menuitemdiv5 = document.createElement('div');
menuitemdiv5.classList.add('menu-item');

let menuitemnumber5 = document.createElement('div');
menuitemnumber5.classList.add('menu-item-number');
menuitemnumber5.textContent = '5.';

let menuitem5 = document.createElement('div');
menuitem5.classList.add('menu-item-text');

let menuitemname5 = document.createElement('p');
menuitemname5.classList.add('menu-item-name');
menuitemname5.textContent = 'TAI, CHIN, GAU, GAN, SACH';

let menuitemdescription5 = document.createElement('p');
menuitemdescription5.classList.add('menu-item-description');
menuitemdescription5.textContent = 'Rare steak, well-done brisket, tendon, and tripe';
menuitem5.appendChild(menuitemname5);
menuitem5.appendChild(menuitemdescription5);

let menuitemprice5 = document.createElement('div');
menuitemprice5.classList.add('menu-item-price');
menuitemprice5.textContent = '$9.75';

menuitemdiv5.appendChild(menuitemnumber5);
menuitemdiv5.appendChild(menuitem5);
menuitemdiv5.appendChild(menuitemprice5);

// div for menu item 6
let menuitemdiv6 = document.createElement('div');
menuitemdiv6.classList.add('menu-item');

let menuitemnumber6 = document.createElement('div');
menuitemnumber6.classList.add('menu-item-number');
menuitemnumber6.textContent = '6.';

let menuitem6 = document.createElement('div');
menuitem6.classList.add('menu-item-text');

let menuitemname6 = document.createElement('p');
menuitemname6.classList.add('menu-item-name');
menuitemname6.textContent = 'TAI, CHIN, NAM, GAN, SACH';

let menuitemdescription6 = document.createElement('p');
menuitemdescription6.classList.add('menu-item-description');
menuitemdescription6.textContent = 'Rare steak, well-done flank, tendon, and tripe';
menuitem6.appendChild(menuitemname6);
menuitem6.appendChild(menuitemdescription6);

let menuitemprice6 = document.createElement('div');
menuitemprice6.classList.add('menu-item-price');
menuitemprice6.textContent = '$9.75';

menuitemdiv6.appendChild(menuitemnumber6);
menuitemdiv6.appendChild(menuitem6);
menuitemdiv6.appendChild(menuitemprice6);

// div for menu item 7
let menuitemdiv7 = document.createElement('div');
menuitemdiv7.classList.add('menu-item');

let menuitemnumber7 = document.createElement('div');
menuitemnumber7.classList.add('menu-item-number');
menuitemnumber7.textContent = '7.';

let menuitem7 = document.createElement('div');
menuitem7.classList.add('menu-item-text');

let menuitemname7 = document.createElement('p');
menuitemname7.classList.add('menu-item-name');
menuitemname7.textContent = 'TAI, NAM, GAN, SACH';

let menuitemdescription7 = document.createElement('p');
menuitemdescription7.classList.add('menu-item-description');
menuitemdescription7.textContent = 'Rare steak, well-done flank, tendon, and tripe';
menuitem7.appendChild(menuitemname7);
menuitem7.appendChild(menuitemdescription7);

let menuitemprice7 = document.createElement('div');
menuitemprice7.classList.add('menu-item-price');
menuitemprice7.textContent = '$9.75';

menuitemdiv7.appendChild(menuitemnumber7);
menuitemdiv7.appendChild(menuitem7);
menuitemdiv7.appendChild(menuitemprice7);

// div for menu item 8
let menuitemdiv8 = document.createElement('div');
menuitemdiv8.classList.add('menu-item');

let menuitemnumber8 = document.createElement('div');
menuitemnumber8.classList.add('menu-item-number');
menuitemnumber8.textContent = '8.';

let menuitem8 = document.createElement('div');
menuitem8.classList.add('menu-item-text');

let menuitemname8 = document.createElement('p');
menuitemname8.classList.add('menu-item-name');
menuitemname8.textContent = 'TAI, NAM, GAN';

let menuitemdescription8 = document.createElement('p');
menuitemdescription8.classList.add('menu-item-description');
menuitemdescription8.textContent = 'Rare steak, well-done flank, and tendon';
menuitem8.appendChild(menuitemname8);
menuitem8.appendChild(menuitemdescription8);

let menuitemprice8 = document.createElement('div');
menuitemprice8.classList.add('menu-item-price');
menuitemprice8.textContent = '$9.75';

menuitemdiv8.appendChild(menuitemnumber8);
menuitemdiv8.appendChild(menuitem8);
menuitemdiv8.appendChild(menuitemprice8);

// div for menu item 9
let menuitemdiv9 = document.createElement('div');
menuitemdiv9.classList.add('menu-item');

let menuitemnumber9 = document.createElement('div');
menuitemnumber9.classList.add('menu-item-number');
menuitemnumber9.textContent = '9.';

let menuitem9 = document.createElement('div');
menuitem9.classList.add('menu-item-text');

let menuitemname9 = document.createElement('p');
menuitemname9.classList.add('menu-item-name');
menuitemname9.textContent = 'TAI, NAM, SACH';

let menuitemdescription9 = document.createElement('p');
menuitemdescription9.classList.add('menu-item-description');
menuitemdescription9.textContent = 'Rare steak, well-done flank, and tripe';
menuitem9.appendChild(menuitemname9);
menuitem9.appendChild(menuitemdescription9);

let menuitemprice9 = document.createElement('div');
menuitemprice9.classList.add('menu-item-price');
menuitemprice9.textContent = '$9.75';

menuitemdiv9.appendChild(menuitemnumber9);
menuitemdiv9.appendChild(menuitem9);
menuitemdiv9.appendChild(menuitemprice9);

// div for menu item 10
let menuitemdiv10 = document.createElement('div');
menuitemdiv10.classList.add('menu-item');

let menuitemnumber10 = document.createElement('div');
menuitemnumber10.classList.add('menu-item-number');
menuitemnumber10.textContent = '10.';

let menuitem10 = document.createElement('div');
menuitem10.classList.add('menu-item-text');

let menuitemname10 = document.createElement('p');
menuitemname10.classList.add('menu-item-name');
menuitemname10.textContent = 'NAM, VE DON';

let menuitemdescription10 = document.createElement('p');
menuitemdescription10.classList.add('menu-item-description');
menuitemdescription10.textContent = 'Well-done flank';
menuitem10.appendChild(menuitemname10);
menuitem10.appendChild(menuitemdescription10);

let menuitemprice10 = document.createElement('div');
menuitemprice10.classList.add('menu-item-price');
menuitemprice10.textContent = '$9.75';

menuitemdiv10.appendChild(menuitemnumber10);
menuitemdiv10.appendChild(menuitem10);
menuitemdiv10.appendChild(menuitemprice10);




// append sections to menu tab section

menu.appendChild(phosectionh2);
menu.appendChild(menuitemdiv1);
menu.appendChild(menuitemdiv2);
menu.appendChild(menuitemdiv3);
menu.appendChild(menuitemdiv4);
menu.appendChild(menuitemdiv5);
menu.appendChild(menuitemdiv6);
menu.appendChild(menuitemdiv7);
menu.appendChild(menuitemdiv8);
menu.appendChild(menuitemdiv9);
menu.appendChild(menuitemdiv10);

// export menu
export default menu