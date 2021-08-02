// contact section
let contact = document.createElement('section');
contact.classList.add('contact-tab-section');

// phone number
let phonenumber = document.createElement('h2');
phonenumber.textContent = '(619) 283-6431';
phonenumber.classList.add('phonenumber');

// address
let address = document.createElement('h3');
address.textContent = ' 4717 El Cajon Blvd, San Diego, CA 92115';



// map image
import Map from './assets/images/PhoHoaLocation.png'; // map
const PhoMap = new Image();
PhoMap.classList.add('pho-location-image');
PhoMap.src = Map;

contact.appendChild(phonenumber);
contact.appendChild(address);
contact.appendChild(PhoMap);

// export contact
export default contact