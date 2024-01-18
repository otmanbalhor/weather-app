export const label = document.createElement('label');
label.classList.add('nav__toggle-switch__switch-label');

export const checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.classList.add('nav__toggle-switch__switch-label__checkbox');

export const span = document.createElement('span');
span.classList.add('nav__toggle-switch__switch-label__slider');

const searchImg = document.querySelector('.card__search__btn');



checkbox.addEventListener('change', function () {

    const nav = document.querySelector('.nav');
    const card = document.querySelector('.card');
    const inputSearch = document.querySelector('.card__search__text');
    const btnSearch = document.querySelector('.card__search__btn');
    const cartes = document.getElementsByClassName('container');
    const divWeeks = document.getElementsByClassName('divWeek');

    if (checkbox.checked) {
        document.body.style.backgroundColor = "rgb(50,50,50)";
        document.body.style.color = "rgb(255,255,255)";
        document.body.style.transition = "0.7s";
        nav.style.backgroundColor = "rgb(100,100,100)";
        card.style.backgroundColor = "rgb(100,100,100)";
        inputSearch.style.backgroundColor = "rgb(50,50,50)";
        btnSearch.style.backgroundColor = "rgb(100,100,100)";

        Array.from(cartes).forEach(carte => {
            carte.style.backgroundColor = "rgb(100,100,100)";
        });
        Array.from(divWeeks).forEach(divWeek => {
            divWeek.style.backgroundColor = "rgb(70,70,70)";
        });

    } else {
        document.body.style.backgroundColor = "";
        document.body.style.color = "";
        document.body.style.transition = "0.7s";
        nav.style.backgroundColor = "";
        card.style.backgroundColor = "";
        inputSearch.style.backgroundColor = "";
        btnSearch.style.backgroundColor = "";

        Array.from(cartes).forEach(carte => {
            carte.style.backgroundColor = "";
        });
        Array.from(divWeeks).forEach(divWeek => {
            divWeek.style.backgroundColor = "";
        });
    }
});


searchImg.addEventListener('click', function () {

    const cartes = document.getElementsByClassName('container');
    const divWeeks = document.getElementsByClassName('divWeek');

    if (checkbox.checked) {
        Array.from(cartes).forEach(carte => {
            carte.style.backgroundColor = "rgb(100,100,100)";
        });
        Array.from(divWeeks).forEach(divWeek => {
            divWeek.style.backgroundColor = "rgb(70,70,70)";
        });

    } else {
        Array.from(cartes).forEach(carte => {
            carte.style.backgroundColor = "";
        });

        Array.from(divWeeks).forEach(divWeek => {
            divWeek.style.backgroundColor = "";
        });

    }

});