/**************************
 * Mobile navigation
 **************************/
const menuToggle = document.querySelector("#menutoggle")
const mobileNav = document.querySelector(".mobile__nav")
menuToggle.addEventListener("click", e => {
    e.preventDefault()
    mobileNav.classList.toggle("show")
})
/**************************
 * Filter accordion
 **************************/
const filterToggle = document.querySelector("#filterToggle")
if(filterToggle !== null) {
    filterToggle.addEventListener("click", e => {
        e.preventDefault()
        var filterBody = filterToggle.nextElementSibling
        if (filterBody.style.maxHeight) {
            filterBody.style.maxHeight = null;
          } else {
            filterBody.style.maxHeight = filterBody.scrollHeight + "px";
          }
    })
}
/**************************
 * Cart Quantity
 **************************/
const qtyMinus = document.querySelectorAll(".qty-minus")
const qtyPlus = document.querySelectorAll(".qty-plus")

    for (let i = 0; i < qtyMinus.length; i++) {
        const element = qtyMinus[i];
        element.addEventListener("click", e => {
            elClicked = e.target
            input = elClicked.parentElement.children[1]
            if(input.value > 1) {
                input.value = parseInt(input.value) - 1
            }else {
                input.value = 1
            }
        })
    }
    for (let i = 0; i < qtyPlus.length; i++) {
        const element = qtyPlus[i];
        element.addEventListener("click", e => {
            elClicked = e.target
            input = elClicked.parentElement.children[1]
            input.value = parseInt(input.value) + 1
        })
    }   

/**************************
 * Scroll to top
 **************************/
const scrollTopBtn = document.querySelector(".scrolltop")
if(scrollTopBtn !== null) {
    scrollTopBtn.addEventListener("click", () => {
        document.querySelector("html").scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    })
}