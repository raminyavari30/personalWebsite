/* Toggle between adding and removing the "active" and "show" classes when the user clicks on one of the "Section" buttons. 
The "active" class is used to add a background color to the current button when its belonging panel is open. 
The "show" class is used to open the specific accordion panel */

const acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {

    acc[i].onclick = function(){
      console.log(this)
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}

const devicons = document.getElementsByTagName("I");

for(let i = 0; i < devicons.length; i++) {

  devicons[i].onclick = function() {

    let siblings = this.parentNode.children;

    for(let j = 0; j < siblings.length; j++) {
      siblings[j].classList.toggle("technology");
    }
    this.classList.toggle("technology");

    var elementToShow = this.classList[0].split("-")[1];

    console.log(document.getElementById(elementToShow).classList);
    
    document.getElementById(elementToShow).classList.toggle("content")

  }
}