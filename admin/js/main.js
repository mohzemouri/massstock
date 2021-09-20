document.addEventListener("readystatechange", () => {
    setTimeout(() => {
        document.querySelector(".loader").style.display = "none"
    },1600)  
})

const addProduct = document.querySelector("#addProduct")
const productBox = document.querySelector(".add-product")
const closeBtn = document.querySelector(".close-btn")

if (addProduct != null || closeBtn != null ) {
    addProduct.addEventListener("click", (e) => {
        e.preventDefault()
        productBox.scrollTop = 0
        productBox.classList.add("show")
    })
    closeBtn.addEventListener("click", (e) => {
        e.preventDefault()
        productBox.classList.remove("show")
    })
}

/* ********************* 
    CHANGE THEME
********************* */
const toggleMode = document.querySelector(".toggle-dark-mode")
const lightBtn = document.querySelector("#light")
const darkBtn = document.querySelector("#dark")

toggleMode.addEventListener("click", e => {
    e.preventDefault()
    if(localStorage.getItem("theme") == "dark") {
        changeThemeToLight()
    }else{
        changeThemeToDark()
    }
})

const changeThemeToDark = () => {
    lightBtn.style.display = "block"
    darkBtn.style.display = "none"
    document.documentElement.setAttribute("data-theme", "dark")
    localStorage.setItem("theme", "dark")
}
const changeThemeToLight = () => {
    lightBtn.style.display = "none"
    darkBtn.style.display = "block"
    document.documentElement.setAttribute("data-theme", "light")
    localStorage.setItem("theme", "light")
}
if(localStorage.getItem("theme") == "dark") {
    changeThemeToDark()
}else{
    changeThemeToLight()
}
