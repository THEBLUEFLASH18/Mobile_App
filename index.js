const loggedToCart = document.querySelector("#input-field")
const submitButton = document.querySelector("#add-button")


submitButton.addEventListener('click', ()=>{
    console.log(loggedToCart.value)
})