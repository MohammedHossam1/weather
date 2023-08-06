var mo = document.querySelectorAll("a")
mo.forEach(el => {
    el.addEventListener('click', function () {
        document.querySelector('.active').classList.remove('active')
        el.classList.add('active').siblings.removeClass('active')
    })
})


// let data;

let mainInput = document.querySelector('#mainInput')
let firstDay = document.querySelector('#first-day')
let firstDate = document.querySelector('#first-date')
let firstLocation = document.querySelector('#first-location')
let firstDegree = document.querySelector('#first-degree')
let firstImg = document.querySelector('#first-img')
let firstStatus = document.querySelector('#first-status')
let secDay = document.querySelector('#sec-day')
let secImg = document.querySelector('#sec-img')
let secDeg = document.querySelector('#sec-deg')
let secDegsm = document.querySelector('#sec-deg-sm')
let secStatus = document.querySelector('#sec-status')
let thrdDay = document.querySelector('#thrd-day')
let thrdImg = document.querySelector('#thrd-img')
let thrdDeg = document.querySelector('#thrd-deg')
let thrdDegsm = document.querySelector('#thrd-deg-sm')
let thrdStatus = document.querySelector('#thrd-status')
async function getData(category) {

    let resp = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${category}&days=7`)
    data = await resp.json()
    displayfootball(data)

}

function displayfootball(x) {
    dayFirst(x)
    daySec(x)
    dayThird(x)

}

//   var x = document.getElementById("demo");
//   function getLocation() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//       x.innerHTML = "Geolocation is not supported by this browser.";
//     }
//   }
  
//   function showPosition(position) {
//     x.innerHTML = "Latitude: " + position.coords.latitude +
//     "<br>Longitude: " + position.coords.longitude;
//   }

//   getLocation()

getData('cairo')//location now
function dayFirst(x){
    let date1 = new Date(x.forecast.forecastday[0].date)
    let weekDay1 = date1.toLocaleString('en-US', { weekday: "long" })
    let day1 = date1.toLocaleString('en-US', { day: "numeric" })
    let month1 = date1.toLocaleString('en-US', { month: "long" })
    firstDay.innerHTML = weekDay1
    firstDate.innerHTML = day1 + month1
    console.log(x)
    firstLocation.innerHTML = x.location.name//done
    firstImg.setAttribute('src', `https://${x.current.condition.icon}`)//done
    firstStatus.innerHTML = x.current.condition.text//done
    firstDegree.innerHTML = `${x.current.temp_c}<sub>o</sub>C`//done
}
function daySec(x){
    let date2 = new Date(x.forecast.forecastday[1].date)
    let weekDay2 = date2.toLocaleString('en-US', { weekday: "long" })
    secStatus.innerHTML = x.forecast.forecastday[1].day.condition.text//done
    secDeg.innerHTML = x.forecast.forecastday[1].day.maxtemp_c//done
    secDegsm.innerHTML = x.forecast.forecastday[1].day.mintemp_c//done
    secImg.setAttribute('src', `https://${x.forecast.forecastday[1].day.condition.icon}`)//done
    secDay.innerHTML = weekDay2
}
function dayThird(x){
    let date3 = new Date(x.forecast.forecastday[2].date)
    let weekDay3 = date3.toLocaleString('en-US', { weekday: "long" })
    thrdStatus.innerHTML = x.forecast.forecastday[2].day.condition.text//done
    thrdDeg.innerHTML = x.forecast.forecastday[2].day.maxtemp_c//done
    thrdDegsm.innerHTML = x.forecast.forecastday[2].day.mintemp_c//done
    thrdImg.setAttribute('src', `https://${x.forecast.forecastday[2].day.condition.icon}`)//done
    thrdDay.innerHTML = weekDay3
}
mainInput.addEventListener('keyup', function () {

    getData(mainInput.value)//location now

})

