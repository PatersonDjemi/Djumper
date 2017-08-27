import '../styles/style.css'
import big from '../assets/img1.jpg'
import small from '../assets/img2.jpg'

const image = document.createElement('img');
image.src = 'http://lorempixel.com/400/400';

document.body.appendChild(image);

const imagebig = document.createElement('img');
imagebig.src = big;

document.body.appendChild(imagebig);


const imagesmall = document.createElement('img');
imagesmall.src = small;

document.body.appendChild(imagesmall);
