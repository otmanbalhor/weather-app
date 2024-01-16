
function ElementAndClass(elementName, className) {

    const element = document.createElement(elementName);
    element.classList.add(className);

    return element;
}


async function weather() {

    try {

        const input = document.querySelector('.card__search__text');
        const cityInput = input.value;

        const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&appid=5ae4efe85e0a37b88e4e2bcea85990bc&units=metric`)

        if (!res.ok) {
            throw new Error(`Network response was not ok: ${res.status}`);
        }

        const data = await res.json();

     
        const main = document.querySelector('main');


        const MAX = 5;

        for(let i=0;i<MAX;i++){
            const existingContainer = document.querySelector('.container');
            if (existingContainer) {
                existingContainer.remove();
            }
        }

        for (let i = 0; i < MAX; i++) {

            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              };

            const container = ElementAndClass('div', 'container');

            const day = ElementAndClass('p', 'container__day');
            let dtTxt = data.list[i*8].dt_txt;
            let date = new Date(dtTxt);
            let dayOfWeek = date.toLocaleDateString(undefined, { weekday: 'long' });
            let calendar = date.toLocaleDateString('fr-BE',{options})
            day.innerHTML = dayOfWeek+' '+calendar;

            const weatherimg = ElementAndClass('img', 'container__weatherimg');
            weatherimg.src = "assets/images/clear.png";
            weatherimg.alt = "sun logo";

            const temp = ElementAndClass('h1', 'container__temp');
            const temperature = Math.round(data.list[i*8].main.temp);
            temp.innerHTML = `${temperature}°C`;

            const city = ElementAndClass('h2', 'container__city');
            city.innerHTML = cityInput;
            const infos = ElementAndClass('div', 'container__infos');


            const humidity = ElementAndClass('div', 'container__infos__humidity');

            const humImg = ElementAndClass('img', 'container__infos__humidity__img');
            humImg.src = "assets/images/humidity.png";
            humImg.alt = "humidity logo";

            const humName = ElementAndClass('p', 'container__infos__humidity__name');
            humName.innerHTML = "HUMIDITY";

            const humVal = ElementAndClass('p', 'container__infos__humidity__val');
            humVal.innerHTML = `${data.list[i*8].main.humidity}%`;

            const wind = ElementAndClass('div', 'container__infos__wind');

            const windImg = ElementAndClass('img', 'container__infos__wind__img');
            windImg.src = "assets/images/wind.png";
            windImg.alt = "wind logo";

            const windName = ElementAndClass('p', 'container__infos__wind__name');
            windName.innerHTML = "SPEED WIND";

            const windVal = ElementAndClass('p', 'container__infos__wind__val');
            windVal.innerHTML = `${data.list[i*8].wind.speed} km/h`;

            const pressure = ElementAndClass('div', 'container__infos__pressure');

            const pressImg = ElementAndClass('img', 'container__infos__pressure__img');
            pressImg.src = "assets/images/pressure.png";
            pressImg.alt = "pressure logo";

            const pressName = ElementAndClass('p', 'container__infos__pressure__name');
            pressName.innerHTML = "PRESSURE";

            const pressVal = ElementAndClass('p', 'container__infos__pressure__val');
            pressVal.innerHTML = `${data.list[i*8].main.pressure} hPa`;


            main.append(container);
            container.append(day);
            container.append(weatherimg);
            container.append(temp);
            container.append(city);
            container.append(infos);
            infos.append(humidity);
            humidity.append(humImg);
            humidity.append(humName);
            humidity.append(humVal);
            infos.append(wind);
            wind.append(windImg);
            wind.append(windName);
            wind.append(windVal);
            infos.append(pressure);
            pressure.append(pressImg);
            pressure.append(pressName);
            pressure.append(pressVal);
    

        }


       

    } catch (error) {
        console.error(error);
    }

}

document.addEventListener('DOMContentLoaded', function () {

    const btnSearch = document.querySelector('.card__search__btn');

    btnSearch.addEventListener('click', weather);

});












