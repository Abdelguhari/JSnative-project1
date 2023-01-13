import axios from "axios";
import animalStructure from "./components/animalStructure";
import loading from "./components/loading";
let items = document.querySelector("#items")
let input = document.querySelector("#animal-input")

function animal() {
    
    const config = {
        headers: {
            'X-Api-Key': "+qZxN2wMCVgV1tCIQyP1Aw==rY4Q3qxcLt9X1I1d"
        }
    }

    let name = input.value
    axios.get(`https://api.api-ninjas.com/v1/animals?name=${name}`, config).then(response => {
        let load = loading()
        items.innerHTML = ""
        items.appendChild(load)
        animalStructure(response.data, load)
    })
}

export default animal;