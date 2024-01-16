
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

                console.log(data);

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


            if(data.list[i*8].weather[0].description === "overcast clouds" || data.list[i*8].weather[0].description === "scattered clouds"){
                weatherimg.src = "assets/images/clouds.png"
                weatherimg.alt = "weather logo";
            }else  if(data.list[i*8].weather[0].description === "broken clouds" || data.list[i*8].weather[0].description === "few clouds"){
                weatherimg.src = "assets/images/mist.png"
                weatherimg.alt = "weather logo";
            }else if(data.list[i*8].weather[0].description === "clear sky"){
                weatherimg.src = "assets/images/clear.png"
                weatherimg.alt = "weather logo";
            }else if(data.list[i*8].weather[0].description === "light snow" || data.list[i*8].weather[0].description === "snow" ){
                weatherimg.src = "assets/images/snow.png"
                weatherimg.alt = "weather logo";
            }else{
                weatherimg.src = "assets/images/drizzle.png"
                weatherimg.alt = "weather logo";
            }
            console.log(data.list[i*8].weather[0].description);

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
            windName.innerHTML = "WIND";

            const windVal = ElementAndClass('p', 'container__infos__wind__val');
            let windConvert = Math.round((data.list[i*8].wind.speed)*3.6);
            windVal.innerHTML = `${windConvert} km/h`;



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
    

        }

    } catch (error) {
        console.error(error);
    }

}

document.addEventListener('DOMContentLoaded', function () {

    const btnSearch = document.querySelector('.card__search__btn');

    btnSearch.addEventListener('click', weather);

});












