//collecting all the buttons 
var plus = document.querySelectorAll(".plus");
var minus = document.querySelectorAll(".minus");
var trashButtons = document.querySelectorAll(".trash-btn");
const LikeButtons = document.querySelectorAll(".like-btn");


//total price calculation
function CalcPrice() {
    let total = 0
    let cards = document.querySelectorAll(".Cards")
    cards.forEach(card =>{
        var qte = Number(card.querySelector(".quantity").innerText)
        var price = Number(card.querySelector(".price").textContent)
       total += price * qte
    })
    document.getElementById("total-price").textContent = total
}



//like button functionality
LikeButtons.forEach(button => {
    button.addEventListener("click", () => {
        button.classList.toggle("active");
    });
});



//trash button functionality

trashButtons.forEach(button => {
    button.addEventListener("click",()=>{
        const card = button.closest(".Cards")
         card.remove()
        CalcPrice()
      
    })

})



//plus button functionality
plus.forEach(button => {
    button.addEventListener("click", () => {
        button.nextElementSibling.innerText++
        CalcPrice()
    })
})


//minus button functionality
minus.forEach(button => {
    button.addEventListener("click", () => {
        (button.previousElementSibling.innerText > 0)&&button.previousElementSibling.innerText--
        CalcPrice()
    })
})








