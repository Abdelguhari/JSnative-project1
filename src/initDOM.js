import animal from "./animal"
import currentWeather from "./CurrentWeather"
import users from "./users"

export default function initDOM(){

    let currenBtn = document.querySelector("#weather-btn")
    let buttonAnimals = document.querySelector("#animal-btn")
    let usersBtn = document.querySelector("#users-btn")

    currenBtn.addEventListener("click", ()=>{
       currentWeather()
    })

    buttonAnimals.addEventListener("click", ()=>{
        animal()
    })

    usersBtn.addEventListener("click", ()=>{
        users()
    })

}