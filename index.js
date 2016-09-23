/* Toggle between adding and removing the "active" and "show" classes when the user clicks on one of the "Section" buttons. 
The "active" class is used to add a background color to the current button when its belonging panel is open. 
The "show" class is used to open the specific accordion panel */

const acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {

    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}