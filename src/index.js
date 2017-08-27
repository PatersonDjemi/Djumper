import _ from 'lodash'
import Test from './test'
import './image_view'


const component =  () => {
    var elt = document.createElement('div');
  //  elt.innerHTML = _.join(['hello', 'webpack', 'j arrive'], ' ');
        elt.innerHTML = ' Hello Webpack, laisse nous jouer un peu ensemble';
    return elt;
}

document.body.appendChild(component());

Test();