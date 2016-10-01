  /* Toggle between adding and removing the "active" and "show" classes when the user clicks on one of the "Section" buttons. 
  The "active" class is used to add a background color to the current button when its belonging panel is open. 
  The "show" class is used to open the specific accordion panel */

window.onload = function() {
  init();
}

var init = function() {

  var acc = document.getElementsByClassName("accordion");

  for (var i = 0; i < acc.length; i++) {

      acc[i].addEventListener("click",  function(){
          this.classList.toggle("active");
          this.nextElementSibling.classList.toggle("show");
      });
  }

  var devicons = document.getElementsByTagName("I");

  for(var i = 0; i < devicons.length; i++) {
    devicons[i].addEventListener("click", function() {
      var siblings = this.parentNode.children;

      for(var j = 0; j < siblings.length; j++) {
        siblings[j].classList.toggle("technology");
      }
      this.classList.toggle("technology");

      var elementToShow = this.classList[0].split("-")[1];
      
      document.getElementById(elementToShow).classList.toggle("content");
    });
  }
}