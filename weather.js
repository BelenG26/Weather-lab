// goal

// make request to weather api

// extract data 

// display day, temp, pic, forecast

/* ex object from response - array, nested in an object
**/

// class notes started//
const forecastTable = document.querySelector("#weather-forecast")

fetch("https://api.weather.gov/gridpoints/MPX/116,72/forecast")
    .then( response => response.json())
    .then( weatherData => {
        showForecastInTable(weatherData)
    })

function showForecastInTable(weatherData) {

    let forecastPeriods = weatherData.properties.periods
    console.log(forecastPeriods)

    forecastPeriods.forEach( forecast => {
        
    let tableRow = document.createElement("tr")

    let tableDataCellDay = docuemnt.createElement("td")
    let tableDataCellTemp = document.createElement("td")
    let tableDataCellIcon = document.createElement("td")
    let weatherIconImg = document.createElement("img")
    let tableDataCellSpeed = document.createElement("td")
    let tableDataCelldirection = document.createElement("td")




    let name = forecast.name
    let temperature = forecast.temperature
    let temperatureUnit = forecast.temperatureUnit
    let iconUrl = forecast.icon
    let detailedForecast = forecast.detailedForecast
    let speed = forecast.speed
    let direction = forecast.direction
    

        tableDataCellDay.innerHTML = name 
        tableDataCellTemp.innerHTML = '${temperature}&#176 ${temperatureUnit}' // degree symbol is '&#176'//
        tableRow.appendChild(tableDataCellDay)
        tableRow.appendChild(tableDataCellTemp)
        tableRow.appendChild(tableDataCellSpeed)
        tableRow.appendChild(tableDataCelldirection)

        weatherIconImg.src = iconUrl
        tableDataCellIcon.appendChild(weatherIconImg)
        tableRow.appendChild(tableDataCellIcon)

        forecastTable.appendChild(tableRow)
    })

}

