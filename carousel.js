(function(){

var counter = 0; // to keep track of current slide
var $items = document.querySelectorAll('.diy-slideshow figure'); // a collection of all of the slides, caching for performance
var numItems = $items.length; // total number of slides

  // create a function that cycles the slides, showing the next or previous slide and hiding all the others
  var showCurrent = function(){
    var itemToShow = Math.abs(counter%numItems);// uses remainder (aka modulo) operator to get the actual index of the element to show

    // remove .show from whichever element currently has it
    [].forEach.call( $items, function(el){
      el.classList.remove('show');
    });

    // add .show to the one item that's supposed to have it
    $items[itemToShow].classList.add('show');
  };

  // add click events to prev & next buttons
  document.querySelector('.next').addEventListener('click', function() {
     counter++;
     showCurrent();
  }, false);

  document.querySelector('.prev').addEventListener('click', function() {
     counter--;
     showCurrent();
  }, false);

  if('ontouchstart' in window){
  $('.diy-slideshow').swipe({
    swipeLeft:function() {
      counter++;
      showCurrent();
    },
    swipeRight:function() {
      counter--;
      showCurrent();
    }
  });
}

})();
