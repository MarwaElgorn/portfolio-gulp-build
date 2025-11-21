let menuBar = document.querySelector(".menueBar");
let menue = document.querySelector(".menue");
let close = document.querySelector(".close");
let links = document.querySelectorAll(".menue-link");

function toggleMenu() {

  menuBar.addEventListener("click", function () {
    menue.style.display = "block";
  });


     close.addEventListener("click", function () {
    menue.style.display = "none";
  });

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      menue.style.display = "none";
    });
  });

}

 

toggleMenu();

