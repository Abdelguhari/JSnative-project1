function loading() {
    let l = document.createElement("div")
    let containeLoading = document.createElement("div")
    containeLoading.className = "box-container m-5"
    l.className = "box"
    containeLoading.appendChild(l)
    return containeLoading
}

export default loading;
