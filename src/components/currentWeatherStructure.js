function currentWeatherStructure(data, loader) {
    
    let items = document.querySelector("#items")
    
    let div = document.createElement("div")

    div.className = "container"

    div.innerHTML = `
    <div class="card w-100" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${data.location.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${data.location.region + " " + data.location.country}</h6>
          <p class="card-text">Celsius: ${data.current.temp_c}</p>
        </div>
    </div>`
    
    console.log(data)
    // supposing the network is slow
    setTimeout(()=>{
        items.appendChild(div)
        items.removeChild(loader)
    }, 1000)

}

export default currentWeatherStructure;