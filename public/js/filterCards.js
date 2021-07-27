function filterCards(filter = null) {
   const cards = document.querySelectorAll(".card-wrapper");
   cards.forEach((card) => {
      if (card.dataset.category === filter || !filter)
         card.style.display = "block";
      else card.style.display = "none";
   });
   var fadeIn = document.getElementById("card-wrap");
   fadeIn.classList.add("animating");

   var listener = fadeIn.addEventListener("animationend", function () {
      fadeIn.classList.remove("animating");
   });
}
