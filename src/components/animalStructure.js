function animalStructure(data, load) {
    let items = document.querySelector("#items")
    
    let div = document.createElement("div")

    div.className = "container"

   
    div.innerHTML = data.map(val=> `
        <div class="card w-100" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${val.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${val.locations}</h6>
            <p class="card-text">${val.taxonomy.kingdom}</p>
            </div>
        </div>`
    )
    
    
    console.log(data)
    // supposing the network is slow
    setTimeout(()=>{
        items.appendChild(div)
        items.removeChild(load)
    }, 1000)
}

export default animalStructure;