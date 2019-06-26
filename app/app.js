import Vue from 'vue';
import router from './router';

import './assets/scss/styles.scss';


new Vue({ router: router }).$mount('#root');

function chapitre1Click (){
    var point1 = document.querySelector('.ellipse')
    point1.addEventListener('click', function() {
        console.log('Hello');
    })
}

chapitre1Click();