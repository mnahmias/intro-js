// Set element heights to equal height of tallest element
equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}

$(window).load(function() {
  equalheight('.equalheight');
});


$(window).resize(function(){
  equalheight('.equalheight');
});


// Service Box display functionality

// Put all serviceboxes in array
var boxDivs = $('.servicebox');

// Put all hidden divs in array
var hiddenDivs = $('.hidden');

// Apply click event listener to each servicebox
$([].concat.apply([], boxDivs)).click(function() {

  // Set active div
  $(this).toggleClass('active');
  boxDivs.not(this).removeClass('active');


  // Connect selected div to corresponding hidden div
    var boxId = '.box-'+$(this).data('box').toString();
    var divToShow = $(hiddenDivs.filter(boxId));
    var showingDiv = $(hiddenDivs.filter('.showing'));

    //Check to see if hidden div is already showing
      if (divToShow.hasClass('showing')){
        divToShow.removeClass('showing').addClass('hidden');
      }

    //Check to see if another hidden div is already showing, close it, show new div
      else if(showingDiv!=undefined){
        showingDiv.removeClass('showing').addClass('hidden');
        divToShow.removeClass('hidden').addClass('showing');
      }

    //If everything is cool, show hidden div
      else{
        divToShow.removeClass('hidden').addClass('showing');
      }
});
