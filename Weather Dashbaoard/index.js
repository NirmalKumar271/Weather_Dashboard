const searchBtn=document.getElementById('searchBtn');
const cityInput =document.getElementById('cityInput');
const loading=document.getElementById('loading');
const cityName=document.getElementById('cityName');
const temperature=document.getElementById('temperature');
const weather=document.getElementById('weather');
const humidity=document.getElementById('humidity');
const wind=document.getElementById('wind');
const weatherInfo=document.querySelector('.weather-info');

searchBtn.addEventListener('click',()=>{
const city=cityInput.value;
console.log(city);
fetchWeather(city);
});

async function fetchWeather(city){
const url=`https://wttr.in/${city}?format=j1`;

try{
    loading.style.display='block'; 
    const response=await fetch(url);
    if(!response.ok){
        throw new Error('city not found');
    }
    const data=await response.json();
    displayWeather(data);
    loading.style.display='none'; 
    //console.log(response.json());//value identified used a api
}catch(error){
    loading.innerHTML='somethingwent wrong,try later';
    //console.log(error.message);
}};

function  displayWeather(data){
    const currentCondition=data.current_condition[0];
    cityName.textContent=data.nearest_area[0].areaName[0].value;
    temperature.textContent=`temperature:${currentCondition.temp_C}"c`;
    weather.textContent=`weather:${currentCondition.weatherDesc[0].value}`;
    humidity.textContent=`humidity:${currentCondition.humidity}%`;
    wind.textContent=`wind:${currentCondition.windspeedKmph}km/h`;
    weatherInfo.style.display='block';
}