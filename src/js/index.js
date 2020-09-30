import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('siemano')

const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');

const handleclick = () => {

    hamburger.classList.toggle('hamburger--active');
    navigation.classList.toggle('navigation--active');
}

hamburger.addEventListener('click', handleclick);

