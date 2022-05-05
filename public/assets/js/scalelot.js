// Active Class JS
function toggleActive(Id, db) {
  var element = document.querySelector(Id);
  element.classList.toggle(db);
}
function addActiveD(Id1, db1) {
  var element = document.querySelector(Id1);
  element.classList.add(db1);
}
function removeActiveD(Id2, db2) {
  var element = document.querySelector(Id2);
  element.classList.remove(db2);
}
function addActive() {
  var element = document.querySelector('html');
  element.classList.add('dark');
}
function removeActive() {
  var element = document.querySelector('html');
  element.classList.remove('dark');
}

// dark Mode localStorage
// $(document).ready(function() {
//   if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//     document.documentElement.classList.add('dark')
//   } else {
//     document.documentElement.classList.remove('dark')
//   }
//   localStorage.theme = 'light'
//   localStorage.theme = 'dark'
//   localStorage.removeItem('theme');
// });

// Slider Swiper
$(document).ready(function() {
  // Swiper Slider JS
  new Swiper(".recentWork", {
    slidesPerView: "auto",
    centeredSlides: true,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    spaceBetween: 30,
    pagination: {
      el: ".recentWork-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".navArrowNext",
      prevEl: ".navArrowPrev",
    },
  });

  // new Swiper(".navArrow", {
  // });
  new Swiper(".autoPlay", {
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        centeredSlides: false,
      },
    },
    pagination: {
      el: ".autoPlay-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".navArrowNextAP",
      prevEl: ".navArrowPrevAP",
    },
  });

  new Swiper(".clientsSay", {
    slidesPerView: "auto",
    spaceBetween: 30,
    autoHeight: false,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".clientsSay-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".navArrowNextCS",
      prevEl: ".navArrowPrevCS",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1280: {
        slidesPerView: 3,
      },
    },
  });

  new Swiper(".verticalSL", {
    effect: "fade",
    allowTouchMove: false,
    autoplay: {
      delay: 8000,
    },
  });
});

// Accordion + Tab
$(document).ready(function() {
  function checkPosition() {
    if (window.matchMedia('(max-width: 767px)').matches) {
      var $titleTab = $('.title_tab-rep');
      $titleTab.on('click', function(e) {
      e.preventDefault();
        if ( $(this).hasClass('active') ) {
          $(this).removeClass('active');
          $(this).next().stop().slideUp(500);
          $(this).next().find('p').removeClass('show');
        } else {
          $(this).addClass('active');
          $(this).next().stop().slideDown(500);
          $(this).parent().siblings().children('.title_tab-rep').removeClass('active');
          $(this).parent().siblings().children('.inner_content-rep').slideUp(500);
          $(this).parent().siblings().children('.inner_content-rep').find('p').removeClass('show');
          $(this).next().find('p').addClass('show');
        }
      });
      
      new Swiper(".ourServices_slider", {
        slidesPerView: "auto",
        centeredSlides: true,
        slidesPerGroup: 1,
        loop: true,
        spaceBetween: 30,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".recentWork-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        navigation: {
          nextEl: ".navArrowNextOS",
          prevEl: ".navArrowPrevOS",
        },
      });
    }
  }
  var $titleTab = $('.title_tab');
  $titleTab.on('click', function(e) {
  e.preventDefault();
    if ( $(this).hasClass('active') ) {
      $(this).removeClass('active');
      $(this).next().stop().slideUp(500);
      $(this).next().find('p').removeClass('show');
    } else {
      $(this).addClass('active');
      $(this).next().stop().slideDown(500);
      $(this).parent().siblings().children('.title_tab').removeClass('active');
      $(this).parent().siblings().children('.inner_content').slideUp(500);
      $(this).parent().siblings().children('.inner_content').find('p').removeClass('show');
      $(this).next().find('p').addClass('show');
    }
  });

  checkPosition();
});

// Tabs
$(document).on("click", ".tabsBox .tabsHead a", function() {
	var numberIndex = $(this).index();
	if (!$(this).is("active")) {
		$(".tabsBox .tabsHead a").removeClass("active");
		$(".tabsBox .tabsCompBox .tabsCompIn").removeClass("active");
    // 
		$(this).addClass("active");
		$(".tabsBox .tabsCompBox").find(".tabsCompIn:eq(" + numberIndex + ")").addClass("active");
    // 
		var listItemHeight = $(".tabsBox .tabsCompBox").find("tabsCompIn:eq(" + numberIndex + ")").innerHeight();
		$(".tabsBox .tabsCompBox").height(listItemHeight + "px");
	}
});

// Progress bar width Sem Height
$(document).ready(function() {
  let imgBoxResize = $('.getBoxWidth').outerWidth();
  $('.printBoxWidth').css('width', imgBoxResize);
});
$(window).resize(function() {
  let imgBoxResize = $('.getBoxWidth').outerWidth();
  $('.printBoxWidth').css('width', imgBoxResize);
});

// New MMenu
document.addEventListener(
  "DOMContentLoaded", () => {
    new Mmenu( "#menu", {
      "offCanvas": {
        "position": "right-front"
      },
      "theme": "light",
      "counters": {
        "add": true
      },
      "iconbar": {
        "use": true,
        "top": [
          '<a href="#" class="pb-0 pt-4 hover:opacity-75 anim"><img class="w-8 mx-auto h-auto hidden dark:block" src="/assets/images/flag/inr-dark.gif" alt="" /><img class="w-8 mx-auto h-auto block dark:hidden" src="/assets/images/flag/inr-light.gif" alt="" /></a>',
          '<a href="#" class="pb-0 pt-4 hover:opacity-75 anim"><img class="w-8 mx-auto h-auto hidden dark:block" src="/assets/images/flag/us-dark.gif" alt="" /><img class="w-8 mx-auto h-auto block dark:hidden" src="/assets/images/flag/us-light.gif" alt="" /></a>',
          '<a href="#" class="pb-0 pt-4 hover:opacity-75 anim"><img class="w-8 mx-auto h-auto hidden dark:block" src="/assets/images/flag/ca-dark.gif" alt="" /><img class="w-8 mx-auto h-auto block dark:hidden" src="/assets/images/flag/ca-light.gif" alt="" /></a>',
          '<a href="#" class="pb-0 pt-4 hover:opacity-75 anim"><img class="w-8 mx-auto h-auto hidden dark:block" src="/assets/images/flag/fr-dark.gif" alt="" /><img class="w-8 mx-auto h-auto block dark:hidden" src="/assets/images/flag/fr-light.gif" alt="" /></a>',
        ],
        "bottom": [
          "<a href='https://www.facebook.com/scalelottech' class='icon-facebook text-lg pb-4 pt-0 hover:text-scalelot-secondary'></a>",
          "<a href='https://www.instagram.com/scalelot/' class='icon-instagram text-lg pb-4 pt-0 hover:text-scalelot-secondary'></a>",
          "<a href='https://www.linkedin.com/in/scalelot-technologies-a61027221/' class='icon-linkedin text-lg pb-4 pt-0 hover:text-scalelot-secondary'></a>",
          "<a href='https://twitter.com/ScalelotT' class='icon-twitter text-lg pb-4 pt-0 hover:text-scalelot-secondary'></a>",
          "<a href='https://join.skype.com/invite/y01KBTjj8kTx' class='icon-skype text-lg pb-4 pt-0 hover:text-scalelot-secondary'></a>",
        ]
      },
      navbars: [
        {
            content: ["prev", "breadcrumbs", "close"],
        },
        {
            position: "bottom",
            content: [
              '<div class="block px-5 py-3.5"><label class="toSwitch bg-white dark:bg-scalelot-darkPlus border border-scalelot-grayLight dark:border-scalelot-primary text-scalelot-darkPlus dark:text-white relative block h-11 md:h-14 w-full rounded-full mx-auto"><span class="block w-1/2 h-full absolute top-0 left-0 rounded-full bg-scalelot-grayLight bg-opacity-30 dark:bg-scalelot-primary anim dark:translate-x-full"></span><div class="flex items-center text-center h-full relative cursor-pointer"><span class="w-1/2 flex items-center justify-center text-scalelot-darkPlus dark:text-white text-sm md:text-base" onclick="removeActive();"><span class="icon-light text-base md:text-xl block md:w-8 mr-2 text-yellow-400"></span> Light</span><span class="w-1/2 flex items-center justify-center text-scalelot-darkPlus dark:text-white text-sm md:text-base" onclick="addActive();"><span class="icon-dark text-base md:text-xl block md:w-8 mr-2"></span> Dark</span></div></label></div>'
            ],
        },
      ],
    });
  }
);

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 2;
var navbarHeight = $('.scrollJS').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}
// Hide Header on on scroll down ulta
var didScroll;
var lastScrollTop = 0;
var delta = 2;
var navbarHeight = $('.scrollJS').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('#toTop').removeClass('arrow-down').addClass('arrow-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('#toTop').removeClass('arrow-up').addClass('arrow-down');
        }
    }
    
    lastScrollTop = st;
}

// Scroll to top
$(window).scroll(function() {
  if ($(this).scrollTop()) {
    $('#toTop').fadeIn();
  } else {
    $('#toTop').fadeOut();
  }
});

$("#toTop").click(function () {
 //1 second of animation time
 //html works for FFX but not Chrome
 //body works for Chrome but not FFX
 //This strange selector seems to work universally
 $("html, body").animate({scrollTop: 0});
});



// Pulse mins
$(document).ready(function(){  
  // Increment value in quantity input  
  $('.qty-plus').each(function(index) {
    $(this).click(function(e) {
      e.preventDefault();
      var current = $(this).siblings("input.quantity").val();
      var currentVal = parseInt($(this).siblings("input.quantity").val());
      if (!isNaN(currentVal)) {
        $(this).siblings("input.quantity").val(currentVal + 1);
      } else {
        $(this).siblings("input.quantity").val(0);
        console.log("Failed!")
      }
    });
  });
  // Decrement value in quantity input  
  $(".qty-minus").each(function(index) {
    $(this).click(function(e) {
      e.preventDefault();
      var currentVal = parseInt($(this).siblings("input.quantity").val());
      if (!isNaN(currentVal) && currentVal > 1) {
        $(this).siblings("input.quantity").val(currentVal - 1);
      } else {
        $(this).siblings("input.quantity").val(0);
      }
    });
  });
});

$(function() {
  var output = document.querySelectorAll('output')[0];
  $(document).on('input', 'input[type="range"]', function(e) {
    output.innerHTML = e.currentTarget.value;
  });
  $('input[type=range]').rangeslider({
    polyfill: false
  });
});


// Select2
$("select.tags").select2({
  multiple: true,
  tags: true,
  width: 'resolve' // need to override the changed default
});

// Drag And Drop

// File Upload

const INPUT_FILE = document.querySelector('#upload-files');
const INPUT_CONTAINER = document.querySelector('#upload-container');
const FILES_LIST_CONTAINER = document.querySelector('#files-list-container');
const FILE_LIST = [];
let UPLOADED_FILES = [];

const multipleEvents = (element, eventNames, listener) => {
  const events = eventNames.split(' ');

  events.forEach(event => {
    element.addEventListener(event, listener, false);
  });
};

const previewImages = () => {
  FILES_LIST_CONTAINER.innerHTML = '';
  if (FILE_LIST.length > 0) {
    FILE_LIST.forEach((addedFile, index) => {
      const content = `
        <div class="form__image-container js-remove-image" data-index="${index}">
          <img class="form__image" src="${addedFile.url}" alt="${addedFile.name}">
        </div>
      `;

      FILES_LIST_CONTAINER.insertAdjacentHTML('beforeEnd', content);
    });
  } else {
    console.log('empty');
    INPUT_FILE.value = "";
  }
};

const fileUpload = () => {
  if (FILES_LIST_CONTAINER) {
    multipleEvents(INPUT_FILE, 'click dragstart dragover', () => {
      INPUT_CONTAINER.classList.add('active');
    });

    multipleEvents(INPUT_FILE, 'dragleave dragend drop change blur', () => {
      INPUT_CONTAINER.classList.remove('active');
    });

    INPUT_FILE.addEventListener('change', () => {
      const files = [...INPUT_FILE.files];
      console.log("changed");
      files.forEach(file => {
        const fileURL = URL.createObjectURL(file);
        const fileName = file.name;
        if (!file.type.match("image/")) {
          alert(file.name + " is not an image");
          console.log(file.type);
        } else {
          const uploadedFiles = {
            name: fileName,
            url: fileURL };


          FILE_LIST.push(uploadedFiles);
        }
      });

      console.log(FILE_LIST); //final list of uploaded files
      previewImages();
      UPLOADED_FILES = document.querySelectorAll(".js-remove-image");
      removeFile();
    });
  }
};

const removeFile = () => {
  UPLOADED_FILES = document.querySelectorAll(".js-remove-image");

  if (UPLOADED_FILES) {
    UPLOADED_FILES.forEach(image => {
      image.addEventListener('click', function () {
        const fileIndex = this.getAttribute('data-index');

        FILE_LIST.splice(fileIndex, 1);
        previewImages();
        removeFile();
      });
    });
  } else {
    [...INPUT_FILE.files] = [];
  }
};

fileUpload();
removeFile();