import Vue from 'vue';
import router from './router';

import './assets/scss/styles.scss';


new Vue({ router: router }).$mount('#root');

function openCardChap1() {
    var cardNorth = document.querySelector('.carte_nord');
    var buttonOpenChap1 = document.querySelector('.buttonchap');
    var arroundChap1 = document.querySelector('.rond_chap1');
    var cardCenter = document.querySelector('.carte_centre');
    var cardSouthWest = document.querySelector('.carte_sudouest');
    var cardSouthEast = document.querySelector('.carte_sud_est');
    var cardOuest = document.querySelector('.ouest');
    var islandExt = document.querySelector('.forme_ext');
    var islandInt = document.querySelector('.form_int');
    buttonOpenChap1.addEventListener('click', function() {
        cardNorth.classList.toggle('buttonchapOpen');
        arroundChap1.classList.toggle('rond_chap1');
        arroundChap1.classList.add('rond_chapdev');
        cardCenter.classList.toggle('cartecentrechap1');
        cardSouthWest.classList.toggle('cardsouthwestchap1');
        cardSouthEast.classList.toggle('cardsoutheastchap1');
        cardOuest.classList.toggle('cardwestchap1');
        islandExt.classList.toggle('islandExtChap1');
        islandInt.classList.toggle('islandIntChap1');

    })
}

function openPointChap1() {
    var cardNorth2 = document.querySelector('.carte_nord');
    var arroundChap1= document.querySelector('.rond_chap1');
    arroundChap1.addEventListener('click', function() {
        console.log('Hello');
})

}

function openCardChap2() {
    var cardNorth = document.querySelector('.carte_nord');
    var buttonOpenChap2 = document.querySelector('.buttonchap2');
    var arroundChap1 = document.querySelector('.rond_chap1');
    var cardCenter = document.querySelector('.carte_centre');
    var cardSouthWest = document.querySelector('.carte_sudouest');
    var cardSouthEast = document.querySelector('.carte_sud_est');
    var cardOuest = document.querySelector('.ouest');
    var islandExt = document.querySelector('.forme_ext');
    var islandInt = document.querySelector('.form_int');
    buttonOpenChap2.addEventListener('click', function() {
        cardNorth.classList.toggle('cardnorthchap2');
        arroundChap1.classList.toggle('rond_chap1');
        arroundChap1.classList.add('rond_chapdev');
        cardCenter.classList.toggle('cartecentrechap1');
        cardOuest.classList.toggle('cardwestchap1');
        islandExt.classList.toggle('islandExtChap1');
        islandInt.classList.toggle('islandIntChap1');
        cardSouthEast.classList.toggle('cardSouthEastChap2');
        cardSouthWest.classList.toggle('cardSouthWestChap2')
    })
}

function openPointChap2() {
    var cardNorth2 = document.querySelector('.carte_nord');
    var arroundChap1= document.querySelector('.rond_chap1');
    arroundChap1.addEventListener('click', function() {
        console.log('Hello');
})
}

function openCardChap3() {
    var cardNorth = document.querySelector('.carte_nord');
    var buttonOpenChap3 = document.querySelector('.buttonchap3');
    var arroundChap1 = document.querySelector('.rond_chap1');
    var cardCenter = document.querySelector('.carte_centre');
    var cardSouthWest = document.querySelector('.carte_sudouest');
    var cardSouthEast = document.querySelector('.carte_sud_est');
    var cardOuest = document.querySelector('.ouest');
    var islandExt = document.querySelector('.forme_ext');
    var islandInt = document.querySelector('.form_int');
    buttonOpenChap3.addEventListener('click', function() {
        cardNorth.classList.toggle('cardNorthChap3');
        arroundChap1.classList.toggle('rond_chap1');
        arroundChap1.classList.add('rond_chapdev');
        cardCenter.classList.toggle('cardcentrechap3');
        cardSouthWest.classList.toggle('cardsouthwestchap1');
        cardSouthEast.classList.toggle('cardsoutheastchap1');
        cardOuest.classList.toggle('cardwestchap1');
        islandExt.classList.toggle('islandExtChap1');
        islandInt.classList.toggle('islandIntChap1');
    })
}

function openPointChap3() {
    var cardNorth2 = document.querySelector('.carte_nord');
    var arroundChap1= document.querySelector('.rond_chap1');
    arroundChap1.addEventListener('click', function() {
        console.log('Hello');
})
}


openCardChap1()
openPointChap1()
openCardChap2()
openPointChap2()
openCardChap3()
openPointChap3()
