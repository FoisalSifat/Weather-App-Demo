
const searchButton = document.querySelector("#searchBtn");





const apiKey = "b4654c04ace3e9796117ca800fd6a027"

function getWeatherData(cityname){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}`)
    .then(res => res.json())
    .then((data) => 
    (document.querySelector("#temp").textContent = Math.round (data.main.temp - 273.15  ),   
    (document.querySelector("#description").textContent = data.weather[0].description),
    (document.querySelector("#humidity").textContent = data.main.humidity ),
    (document.querySelector("#wind-speed").textContent = data.wind.speed )
));


    


   


}



searchButton.addEventListener("click",function(){
   const inputBox = document.querySelector("#userInput").value;
   getWeatherData(inputBox)
   

})