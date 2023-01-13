import axios from "axios"
import currentWeatherStructure from "./components/currentWeatherStructure"
import loading from "./components/loading"
let items = document.querySelector("#items")

function currentWeather() {

    let sel = document.querySelector("#select-city")
    let city = sel.value
    axios.get(`https://api.weatherapi.com/v1/current.json?q=${city}&key=d31e734797ea4270b21151105231301`).then(response =>{
        let load = loading()
        items.innerHTML = ""
        items.append(load)
        currentWeatherStructure(response.data, load)
    })
}


export default currentWeather;