//selector variables
var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
let lati
let longi


apid = "de8578c24cfd7c1f801eb10405ac778a"
//kelvin to celcious
function convertion(val){
    return (val - 273).toFixed(2)
}
//fetch
    btn.addEventListener('click', function(){
        fetch('http://api.openweathermap.org/geo/1.0/direct?q='+inputval.value+'&limit='+1+'&appid='+apid)
        .then(res => res.json())
        .then(data =>{
             lati = data['lat']
             longi = data['lon']
        })
        fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lati+'&lon='+longi+'&appid='+apid)
        .then(res=>res.json())
        .then(data => {
            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var tempature = data['main']['temp']
            var wndspd = data['wind']['speed']

            city.innerHTML='City: ${nameval}'
            temp.innerHTML = 'Temperature: ${ convertion(tempature)} C'
            description.innerHTML = 'Conditions: ${descrip}'
            wind.innerHTML = 'Wind Speed: ${wndspd} km/h'

        })
        .catch(err => alert('You entered Wrong city name'))
    })