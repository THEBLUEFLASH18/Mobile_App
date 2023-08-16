const loggedToCart = document.querySelector("#input-field")
const submitButton = document.querySelector("#add-button")


function logCart() {
    submitButton.addEventListener('click', ()=>{
        console.log(loggedToCart)
    })
};
