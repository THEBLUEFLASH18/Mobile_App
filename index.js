const loggedToCart = document.querySelector("#input-field")
const submitButton = document.querySelector("#add-button")


submitButton.addEventListener('click', ()=>{
    const textLogged = loggedToCart.value
    console.log(textLogged)
})