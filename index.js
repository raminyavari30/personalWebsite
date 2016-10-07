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
        siblings[j].classList.toggle("hidden");
      }
      this.classList.toggle("hidden");
      this.classList.toggle("active");

      var elementToShow = this.classList[0].split("-")[1];

      document.getElementById(elementToShow).classList.toggle("hidden");
    });
  }

  var greetings = ["Hello!", "Hola!", "Salam!", "Namaste", "Ciao!"];

  var greeting = document.getElementsByClassName("greeting");

  greeting[0].addEventListener("click", function() {

    var choice = Math.floor(Math.random() * greetings.length);

    alert(greetings[choice]);

    this.innerHTML = greetings[choice];
  });

  var quotes = [ "\"Don't watch the clock; do what it does. Keep going.\" - Sam Levenson", 
  "\"It always seems impossible until its done.\" - Nelson Mandela", 
  "\"Life is 10% what happens to you and 90% how you react to it.\" - Charles R. Swindoll",
  "\"Try not to become a man of success, but rather try to become a man of value.\" - Albert Einstein", 
  "\"Yesterday is not ours to recover, but tomorrow is ours to win or lose.\" - Lyndon B. Johnson",
  "\"Positive anything is better than negative nothing.\" - Elbert Hubbard",
  "\"Always remember that you are absolutely unique. Just like everyone else\" - Margaret Mead",
  "\"You miss 100% of the shots you don't take\" - Wayne Gretzky",
  "\"Great minds discuss ideas; average minds discuss events; small minds discuss people\" - Eleanor Roosevelt"
  ];

  var quote = document.getElementsByTagName("H1");

  var randomQuote;

  setInterval(function() {
    
    quote[0].classList.add("fadeout");

    if(quote[0].classList[0] === "fadeout" && typeof randomQuote === "number") {

      quote[0].innerHTML = quotes[randomQuote];
      quote[0].classList.remove("fadeout");
      quote[0].classList.add("fadein");
      randomQuote = undefined;
    }
    else {

      randomQuote = Math.floor(Math.random() * quotes.length);
      quote[0].classList.remove("fadein");
    }
  },4000);
}