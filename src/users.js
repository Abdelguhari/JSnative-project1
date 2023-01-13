import axios from "axios";
import loading from "./components/loading";
import usersStructure from "./components/usersStructure";
let items = document.querySelector("#items")


function users() {


    axios.get("https://jsonplaceholder.typicode.com/users").then(response =>{
        items.innerHTML = ""
        let loader = loading()
        items.appendChild(loader)
        usersStructure(response.data, loader)        
    })

}

export default users;