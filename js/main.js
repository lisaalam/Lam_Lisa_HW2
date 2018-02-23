(function() {
    "use strict";
console.log("fired");


//variables
  var icons = document.querySelectorAll('img');

//functions
function logIcon() {
  console.log('click on this icon: ', this.id);

  this.style.height = 300 + 'px';
}

//event handling
  icons.forEach(icon => icon.addEventListener('click', logIcon));
})();
