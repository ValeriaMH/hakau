// Mobile menu

function openNav() {
  document.getElementById("myNav").style.width = "85%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

$(document).ready(function () {
  const urlString = window.location.href;
  const url = new URL(urlString);
  const path = window.location.pathname;
  const tabs = document.querySelectorAll(".allies-stories__tab");
  const tabsContainer = document.querySelector(
    ".allies-stories__tab-container"
  );
  const tabsContent = document.querySelectorAll(".allies-stories__content");
  if (path === "/allies") {
    const id = url.searchParams.get("id");
    if (id) {
      tabs.forEach((t) => t.classList.remove("allies-stories__tab--active"));
      tabsContent.forEach((c) =>
        c.classList.remove("allies-stories__content--active")
      );
      document
        .querySelector(`.allies-stories__content--${id}`)
        .classList.add("allies-stories__content--active");
      const activeTab = document.querySelector(
        ".allies-stories__content--active"
      );
      $('.col-12.grid.allies-slider-container').not('.slick-initialized').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 500,
        arrows: true,
        accesibility: true,
        dots: false,
        fade: false,
        infinite: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      });
      $('.col-12.grid.allies-slider-container').slick('refresh');
      activeTab.scrollIntoView();
    } else {
      tabs.forEach((t) => t.classList.remove("allies-stories__tab--active"));
      tabsContent.forEach((c) =>
        c.classList.remove("allies-stories__content--active")
      );
      document
        .querySelector(`.allies-stories__content--1`) // first tab
        .classList.add("allies-stories__content--active");
      $('.col-12.grid.allies-slider-container').not('.slick-initialized').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 500,
        arrows: true,
        accesibility: true,
        dots: false,
        fade: false,
        infinite: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      });
      $('.col-12.grid.allies-slider-container').slick('refresh');
    }
  }

  // $(".hamburger").click(function () {
  //   $(".mobile-menu").fadeToggle(100);
  //   $(this).toggleClass("active");
  // });

  

  // Accordion FAQ

  var allPanels = $(".accordion > dd").hide();

  $(".accordion > dt").click(function () {
    allPanels.slideUp();

    $(this).filter(".open").removeClass("open").addClass("closing");
    $(".accordion > dt ").removeClass("open");
    $(this).not(".closing").addClass("open").next().slideDown();
    $(".accordion > dt").removeClass("closing");

    return false;
  });

  // ALLIES STORIES

  if (tabsContainer) {
    tabsContainer.addEventListener("click", function (e) {
      const clicked = e.target.closest(".allies-stories__tab");
      

      // Guard clause
      if (!clicked) return;

      // Remove active classes
      tabs.forEach((t) => t.classList.remove("allies-stories__tab--active"));
      tabsContent.forEach((c) =>
        c.classList.remove("allies-stories__content--active")
      );

      // Activate tab
      clicked.classList.add("allies-stories__tab--active");

      // Activate content area
      const tabContent = document.querySelector(
        `.allies-stories__content--${clicked.dataset.tab}`
      );
      tabContent.classList.add("allies-stories__content--active");

      //scroll to active
      const activeTab = document.querySelector(
        ".allies-stories__content--active"
      );
      // slickTrack.style.width = `${pageWidth}px`;
      $('.col-12.grid.allies-slider-container').on('init', function () {
        visibility: 'visible';
      });
      $('.col-12.grid.allies-slider-container').not('.slick-initialized').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 500,
        arrows: true,
        accesibility: true,
        dots: false,
        fade: false,
        infinite: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      });
      $('.col-12.grid.allies-slider-container').slick('refresh');
      activeTab.scrollIntoView({ behavior: "smooth" });
    });
  }
  let appended = false;

  $('.dropdown-title-mobile').on('click', function () {
    $('.dropdown-content-mobile').addClass('flex');
    $('#dropdown-arrow-next').addClass('hidden');
    $('.dropdown-title-mobile').addClass('hidden');
  })
  $('#dropdown-arrow-back').on('click', function () {
    if (appended) {
      $('.menu-item').removeClass('hidden');
      appended = false;
      $(`#submenu_1`).remove();
      $(`#submenu_2`).remove();
      $(`#submenu_3`).remove();
      $(`#submenu_4`).remove();
    } else {
      $('.dropdown-content-mobile').removeClass('flex');
      $('#dropdown-arrow-next').removeClass('hidden');
      $('.dropdown-title-mobile').removeClass('hidden');
    }
  })
  function replaceAll(string, search, replace) {
    return string.split(search).join(replace);
  }
  const addSubmenu = (htmlElement, index) => {
    if (!appended) {
      let submenuString = replaceAll(`[${htmlElement.dataset.submenu}]`, '}{', '}, {');
      submenuString = replaceAll(submenuString, '=>', ': ');
      submenuString = replaceAll(submenuString, 'nil', 'null');
      const submenu = JSON.parse(submenuString);
      let listHTML = '';
      for (let i = 0; i < submenu.length; i += 1) {
        listHTML += `
          <li
            style="
              list-style: none;
              margin-bottom: 15px;
              margin-top: 15px;
            "
          >
            <a 
              href="${submenu[i].url}"
              style="
                margin: 0px;
                padding: 0px;
              "
            >${submenu[i].name}</a>
          </li>`;
      }
      const submenusHTML = `
      <div 
        class="submenu"
        style="
            display: flex;
            flex-direction: column;
            margin-left: 10px;
        "
        id="submenu_${index}"
      >
        <ul>
            ${listHTML}
        </ul>      
      </div>`;
      const htmlSubmenu = $(submenusHTML)[0];
      console.log('htmlSubmenu: ', htmlSubmenu);
      htmlElement.append(htmlSubmenu);
      appended = true;
      $('.menu-item').addClass('hidden');
    } else {
      appended = false;
      $(`#submenu_1`).remove();
      $(`#submenu_2`).remove();
      $(`#submenu_3`).remove();
      $(`#submenu_4`).remove();
    }
  };

  $('#menu_1').on('click', () => addSubmenu($('#menu_1')[0], 1));
  $('#menu_2').on('click', () => addSubmenu($('#menu_2')[0], 2));
  $('#menu_3').on('click', () => addSubmenu($('#menu_3')[0], 3));
  $('#menu_4').on('click', () => addSubmenu($('#menu_4')[0], 4));
});

// Animate on scroll - activate
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 300, // offset (in px) from the original trigger point
  delay: 100, // values from 0 to 3000, with step 50ms
  duration: 500, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
});

// Final Banner Slider

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  if (slides[slideIndex - 1]) {
    slides[slideIndex - 1].style.display = "block";
  }
  if (dots[slideIndex - 1]) {
    dots[slideIndex - 1].className += " active";
  }
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

// ALLIES HOME

const tabs = document.querySelectorAll(".allies-home__tab");
const tabsContainer = document.querySelector(".allies-home__tab-container");
const tabsContent = document.querySelectorAll(".allies-home__content");
if (tabsContainer) {
  tabsContainer.addEventListener("click", function (e) {
    const clicked = e.target.closest(".allies-home__tab");

    // Guard clause
    if (!clicked) return;

    // Remove active classes
    tabs.forEach((t) => t.classList.remove("allies-home__tab--active"));
    tabsContent.forEach((c) =>
      c.classList.remove("allies-home__content--active")
    );

    // Activate tab
    clicked.classList.add("allies-home__tab--active");

    // Activate content area
    document
      .querySelector(`.allies-home__content--${clicked.dataset.tab}`)
      .classList.add("allies-home__content--active");
  });
}

// Founders

$('.founders-slider-container').slick({

  autoplay: true,
  autoplaySpeed: 2000,
  speed: 500,
  arrows: true,
  accesibility: true,
  dots: true,
  fade: false,
  infinite: true,
  pauseOnHover: true,
  pauseOnDotsHover: true,
  slidesToShow: 1,
  slidesToScroll: 1

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
          if (img.offsetTop < window.innerHeight + scrollTop) {
            img.src = img.dataset.src;
            img.classList.remove("lazy");
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
});

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
          if (img.offsetTop < window.innerHeight + scrollTop) {
            img.src = img.dataset.src;
            img.classList.remove("lazy");
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
});

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
          now = Number(Math.ceil(now)).toLocaleString("en");
          $(this).text(now);
        },
      }
    );
});

// Pop up Gallery
lightGallery(document.getElementById("lightgallery"), {
  speed: 500,
  download: false,
});

// FILTERABLE GALLERY BLOG ES

$('#portfolio-filter-category-es span').click(function () {
  //   Remove class 'active' from any <span> that is currently active
  $('#portfolio-filter-category-es .active').removeClass('active');

  //   Give this <span> that was clicked on a class of 'active'
  $(this).addClass('active');

  //   Get the name of the category from this <span> remove up to two spaces from the text and replace them with dashes, and make it lowercase
  var filterVal = $(this).text().replace(' ', '-').replace(' ', '-').replace(' ', '-').replace(' ', '-').toLowerCase();

  console.log('filterVal has been set' + filterVal);

  //   This is something new, it's an 'each' function which is basically iterates through each element that matches the selector and applies the function one by one.
  $('#filterable-gallery-category-es .gallery-item-category-es').each(function () {

    //     If the filter value that they have clicked on is 'all' then remove the class of hidden from each gallery-item.
    if (filterVal == 'todos') {
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

// FILTERABLE GALLERY BLOG EN

$('#portfolio-filter-category span').click(function () {
  //   Remove class 'active' from any <span> that is currently active
  $('#portfolio-filter-category .active').removeClass('active');

  //   Give this <span> that was clicked on a class of 'active'
  $(this).addClass('active');

  //   Get the name of the category from this <span> remove up to two spaces from the text and replace them with dashes, and make it lowercase
  var filterVal = $(this).text().replace(' ', '-').replace(' ', '-').replace(' ', '-').replace(' ', '-').toLowerCase();

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
