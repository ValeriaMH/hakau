// Mobile menu

$(document).ready(function () {
  $('.hamburger').click(function () {
    $('.mobile-menu').fadeToggle(100);
    $(this).toggleClass('active');
  });

   // COURSES TYPE

const tabs = document.querySelectorAll('.allies-stories__tab');
const tabsContainer = document.querySelector('.allies-stories__tab-container');
const tabsContent = document.querySelectorAll('.allies-stories__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.allies-stories__tab');

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('allies-stories__tab--active'));
  tabsContent.forEach(c => c.classList.remove('allies-stories__content--active'));

  // Activate tab
  clicked.classList.add('allies-stories__tab--active');

  // Activate content area
  document
    .querySelector(`.allies-stories__content--${clicked.dataset.tab}`)
    .classList.add('allies-stories__content--active');
});


});


// Animate on scroll - activate
AOS.init({

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 300, // offset (in px) from the original trigger point
  delay: 100, // values from 0 to 3000, with step 50ms
  duration: 500, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false // whether animation should happen only once - while scrolling down

});


// Testimonial Slider

$('.marca-slider-container').slick({

  autoplay: true,
  autoplaySpeed: 3000,
  speed: 500,
  arrows: false,
  accesibility: true,
  dots: true,
  fade: false,
  infinite: true,
  pauseOnHover: true,
  pauseOnDotsHover: true,
  slidesToShow: 1,
  slidesToScroll: 1

});

// Why Us Slider

$('.testimonial-slider-container').slick({

  autoplay: true,
  autoplaySpeed: 3000,
  speed: 500,
  arrows: true,
  accesibility: true,
  dots: true,
  fade: false,
  infinite: true,
  pauseOnHover: true,
  pauseOnDotsHover: true,
  slidesToShow: 1,
  slidesToScroll: 2

});

//  Image Lazy loading
document.addEventListener("DOMContentLoaded", function () {
  var lazyloadImages;

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function (image) {
      imageObserver.observe(image);
    });
  } else {
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");

    function lazyload() {
      if (lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }

      lazyloadThrottleTimeout = setTimeout(function () {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function (img) {
          if (img.offsetTop < (window.innerHeight + scrollTop)) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
          }
        });
        if (lazyloadImages.length == 0) {
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
})

// Background image lazy load
document.addEventListener("DOMContentLoaded", function () {
  var lazyloadImages;

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function (image) {
      imageObserver.observe(image);
    });
  } else {
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");

    function lazyload() {
      if (lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }

      lazyloadThrottleTimeout = setTimeout(function () {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function (img) {
          if (img.offsetTop < (window.innerHeight + scrollTop)) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
          }
        });
        if (lazyloadImages.length == 0) {
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
})


// COUNTER
// const counterUp = window.counterUp.default

// const callback = entries => {
// 	entries.forEach( entry => {
// 		const el = entry.target
// 		if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
// 			counterUp( el, {
// 				duration: 2000,
// 				delay: 16,
// 			} )
// 			el.classList.add( 'is-visible' )
// 		}
// 	} )
// }

// const IO = new IntersectionObserver( callback, { threshold: 1 } )

// const el = document.querySelector( '.counter' )
// IO.observe( el )

$(".counter").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 2000,
        easing: "swing",
        step: function (now) {
          now = Number(Math.ceil(now)).toLocaleString('en');
                                $(this).text(now);
        },
      }
    );
});

// Pop up Gallery
lightGallery(document.getElementById('lightgallery'), {
  speed: 500,
  download: false
  
});

// Accordion FAQ

var allPanels = $('.accordion > dd').hide();

$('.accordion > dt').click(function() {
  allPanels.slideUp();

  $(this).filter('.open').removeClass('open').addClass('closing')
  $('.accordion > dt ').removeClass('open');
  $(this).not(".closing").addClass('open').next().slideDown();
  $('.accordion > dt').removeClass('closing');
  
  return false;
});


// FILTERABLE GALLERY BLOG

$('#portfolio-filter-category span').click(function () {
  //   Remove class 'active' from any <span> that is currently active
  $('#portfolio-filter-category .active').removeClass('active');

  //   Give this <span> that was clicked on a class of 'active'
  $(this).addClass('active');

  //   Get the name of the category from this <span> remove up to two spaces from the text and replace them with dashes, and make it lowercase
  var filterVal = $(this).text().replace(' ', '-').replace(' ', '-').toLowerCase();

  console.log('filterVal has been set' + filterVal);

  //   This is something new, it's an 'each' function which is basically iterates through each element that matches the selector and applies the function one by one.
  $('#filterable-gallery-category .gallery-item-category').each(function () {

    //     If the filter value that they have clicked on is 'all' then remove the class of hidden from each gallery-item.
    if (filterVal == 'all') {
      $(this).removeClass('hidden');
    }

    //     if it's not all, then
    else {
      if ($(this).hasClass(filterVal)) {
        $(this).removeClass('hidden');
        //         show those that have the filter class
      }
      else {
        $(this).addClass('hidden');
        //         hide those that do not have the filter
      }
    }

  });
});

