import Vue from 'vue';
import router from './router';

import './assets/scss/styles.scss';


new Vue({ router: router }).$mount('#root');

function chapitre1_2025 (){
    var point1 = document.querySelector('.north_2');
    var carte_north = document.querySelector('.card_nord_chap1');
    var carte_north_click = document.querySelector('card_nord_chap1click')
    point1.addEventListener('click', function() {
        carte_north.classList.toggle('card_nord_chap1sup');
        carte_north_click.classList.toggle('card_nord_chap1aclick');
    })
}

chapitre1_2025();

function chapitre1_2030() {
    var point1 = document.querySelector('.north_3');
    var carte_north = document.querySelector('.card_nord_chap1');
    var carte_north_click = document.querySelector('.card_nord_chap1click')
    point1.addEventListener('click', function() {
        carte_north_click.classList.toggle('card_nord_chap1click2');
        carte_north.classList.toggle('card_nord_chap1sup');
        carte_north.classList.toggle('card_nord_chap1sup2');

    })
}
chapitre1_2030();

function animals() {
    var point1 = document.querySelector('.north_1_chap2');
    point1.addEventListener('click', function() {
       console.log('Hello');

    })
}
animals();