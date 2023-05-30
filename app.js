// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
    method: 'GET',
    headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': 'b9b5f6ae93mshc5fd5b930cdf059p18e2adjsn12d9baa938bb',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {


        console.log(response)
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset  

    })
    .catch(err => console.log(err));

}

submit.addEventListener("click" , (e) =>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("lahore")
// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }


// var header = $('body');

// var backgrounds = new Array(
//     'url(https://images.unsplash.com/photo-1454897834822-1ece264a5d89?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=3a5615c0bc77123ece2a2663e2640341)'
//   , 'url(https://images.unsplash.com/photo-1454897834822-1ece264a5d89?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=3a5615c0bc77123ece2a2663e2640341)'
//   , 'url(https://images.unsplash.com/photo-1454897834822-1ece264a5d89?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=3a5615c0bc77123ece2a2663e2640341)'
//   , 'url(https://images.unsplash.com/photo-1454897834822-1ece264a5d89?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=3a5615c0bc77123ece2a2663e2640341)'
// );

// var current = 0;

// function nextBackground() {
//     current++;
//     current = current % backgrounds.length;
//     header.css('background-image', backgrounds[current]);
// }
// setInterval(nextBackground, 1000);

// header.css('background-image', backgrounds[0]);



// $(document).ready(function() {
//     var urls = ['https://pp.userapi.com/c629327/v629327473/db66/r051joYFRX0.jpg', 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg', 'https://img.wikinut.com/img/gycf69_-6rv_5fol/jpeg/0/Best-Friends-Img-Src:Image:-FreeDigitalPhotos.net.jpeg', 'http://www.travelettes.net/wp-content/uploads/2014/03/IMG_3829-Medium-600x400.jpg'];
  
//     var cout = 1;
//     $('body').css('background-image', 'url("' + urls[0] + '")');
//     setInterval(function() {
//       $('body').css('background-image', 'url("' + urls[cout] + '")');
//       cout == urls.length-1 ? cout = 0 : cout++;
//     }, 5000);
  
//   });


