var newSlideshow = (function () {
	var numSlides = 4,
		currentSlideIndex = 0,
	 	slides = document.getElementsByClassName('slideshow-slide'),
		indicatorSelector = document.getElementsByClassName('slideshow-indicator'),
		currentSlide,
		newSlide,
		direction;

	function animateSlides (newDirection) {

		//define target slides factoring in passed-in direction argument
		direction = newDirection;
		setTargets(newDirection);

		// set indicators to next state
		indicatorSelector[currentSlideIndex].classList.add('inactive-indicator');
		indicatorSelector[newSlideIndex].classList.remove('inactive-indicator');

		//set staging position
		newSlide.style.left = direction === 'prev' ? '-100%' : '100%';
		currentSlide.style.left = '0%';

		newSlide.classList.remove("inactive");

		//begins both animations
		animate(newSlide);
		animate(currentSlide);
	}

	// defines target slides according to direction of animation
	function setTargets() {
		// get the index of the next slide. hard reset to 0 or numSlides (-1) so slideshow can loop back
		if (direction === "prev") {
			newSlideIndex = slideSelector[currentSlideIndex - 1] === undefined ? (numSlides - 1) : currentSlideIndex - 1;
		} else {
			newSlideIndex = slideSelector[currentSlideIndex + 1] === undefined ? 0 : currentSlideIndex + 1;
		}

		currentSlide = slideSelector[currentSlideIndex];
		newSlide = slideSelector[newSlideIndex];
	}

	function animate (slide) {

			//animate one tick according to direction
      if(direction === 'prev'){
        slide.style.left = "-100%";
      }else{
        slide.style.left = "100%";
      }
		}
	}


	// expose the private animate function & call with appropriate argument
	return {
		nextSlide: function () {
			animateSlides('next');
		},
		prevSlide: function () {
			animateSlides('prev');
		}
	};
})();

// add event listeners
    (function () {
      var prevArrow = document.getElementsByClassName('slideshow-left-control')[0];
      var nextArrow = document.getElementsByClassName('slideshow-right-control')[0];

      prevArrow.addEventListener('click', newSlideshow.prevSlide);
      nextArrow.addEventListener('click', newSlideshow.nextSlide);
    })();
