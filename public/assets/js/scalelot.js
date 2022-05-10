// Active Class JS

function toggleActive(Id, db) {
  var element = document.querySelector(Id);
  element.classList.toggle(db);
}
function addActiveD(Id1, db1, description, imageId, webFrameworks, programmingLanguages, miscellaneous, libraries, uiFrameworks, designingLanguage, designingTools) {
  var element = document.querySelector(Id1);
  document.getElementById("popupImage").setAttribute("src", "/assets/images/dynamic-images/" + imageId);

  if(!webFrameworks || webFrameworks.length == 0) {
    document.getElementById("descriptionParent") && document.getElementById("descriptionParent").remove();
  }
  else {
    document.getElementById("description").innerHTML = description;
  }

  if(!webFrameworks || webFrameworks.length == 0) {
    document.getElementById("descriptionMobileParent") && document.getElementById("descriptionMobileParent").remove();
  }
  else {
    document.getElementById("descriptionMobile").innerHTML = description;
  }

  if(!webFrameworks || webFrameworks.length == 0) {
    document.getElementById("webFrameworksParent") && document.getElementById("webFrameworksParent").remove();
  }
  else {
    document.getElementById("webFrameworks").innerHTML = webFrameworks;
  }

  if(!webFrameworks || webFrameworks.length == 0) {
    document.getElementById("programmingLanguagesParent") && document.getElementById("programmingLanguagesParent").remove();
  }
  else {
    document.getElementById("programmingLanguages").innerHTML = programmingLanguages;
  }

  if(!webFrameworks || webFrameworks.length == 0) {
    document.getElementById("miscellaneousParent") && document.getElementById("miscellaneousParent").remove();
  }
  else {
    document.getElementById("miscellaneous").innerHTML = miscellaneous;
  }

  if(!webFrameworks || webFrameworks.length == 0) {
    document.getElementById("librariesParent") && document.getElementById("librariesParent").remove();
  }
  else {
    document.getElementById("libraries").innerHTML = libraries;
  }

  if(!webFrameworks || webFrameworks.length == 0) {
    document.getElementById("uiFrameworksParent") && document.getElementById("uiFrameworksParent").remove();
  }
  else {
    document.getElementById("uiFrameworks").innerHTML = uiFrameworks;
  }

  if(!webFrameworks || webFrameworks.length == 0) {
    document.getElementById("designingToolsParent") && document.getElementById("designingToolsParent").remove();
  }
  else {
    document.getElementById("designingTools").innerHTML = designingTools;
  }

  if(!webFrameworks || webFrameworks.length == 0) {
    document.getElementById("designingLanguageParent") && document.getElementById("designingLanguageParent").remove();
  }
  else {
    document.getElementById("designingLanguage").innerHTML = designingLanguage;
  }

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
          '<a href="#" class="pb-0 pt-4 hover:opacity-75 anim"><img class="w-8 mx-auto h-auto hidden dark:block" src="/assets/images/flag/inr-dark.gif" alt="indian flag" /><img class="w-8 mx-auto h-auto block dark:hidden" src="/assets/images/flag/inr-light.gif" alt="indian flag" /></a>',
          '<a href="#" class="pb-0 pt-4 hover:opacity-75 anim"><img class="w-8 mx-auto h-auto hidden dark:block" src="/assets/images/flag/us-dark.gif" alt="usa flag" /><img class="w-8 mx-auto h-auto block dark:hidden" src="/assets/images/flag/us-light.gif" alt="usa flag" /></a>',
          '<a href="#" class="pb-0 pt-4 hover:opacity-75 anim"><img class="w-8 mx-auto h-auto hidden dark:block" src="/assets/images/flag/ca-dark.gif" alt="canada flag" /><img class="w-8 mx-auto h-auto block dark:hidden" src="/assets/images/flag/ca-light.gif" alt="canada flag" /></a>',
          '<a href="#" class="pb-0 pt-4 hover:opacity-75 anim"><img class="w-8 mx-auto h-auto hidden dark:block" src="/assets/images/flag/fr-dark.gif" alt="united kingdom flag" /><img class="w-8 mx-auto h-auto block dark:hidden" src="/assets/images/flag/fr-light.gif" alt="united kingdom flag" /></a>',
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

// jQuery(function() {
  var output = document.querySelectorAll('output')[0];
  jQuery(document).on('input', 'input[type="range"]', function(e) {
    output.innerHTML = e.currentTarget.value;
  });
  // jQuery('input[type=range]').rangeslider({
  //   polyfill: false
  // });
// });


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



// Input File
// document.getElementById('fileInput').onchange = function () {
//   var text = this.value;
//   const myArray = text.split("/");
//   document.getElementById('fileName').innerHTML = myArray[myArray.length -1];
//   // alert('Selected file: ' + this.value);
// };


// function alertFilename()
// {
//     var thefile = document.getElementById('fileInput');
//     alert(thefile.value);
// }


// Portfolio
jQuery(document).ready(function () {
  //Pagination JS
  //how much items per page to show
  var show_per_page = 9;
  //getting the amount of elements inside pagingBox div
  var number_of_items = $("#pagingBox").children().size();
  //calculate the number of pages we are going to have
  var number_of_pages = Math.ceil(number_of_items / show_per_page);

  //set the value of our hidden input fields
  $("#current_page").val(0);
  $("#show_per_page").val(show_per_page);

  //now when we got all we need for the navigation let's make it '

  /* 
		what are we going to have in the navigation?
			- link to previous page
			- links to specific pages
			- link to next page
		*/
  var navigation_html =
    '<a class="previous_link" href="javascript:previous();">Prev</a>';
  var current_link = 0;
  while (number_of_pages > current_link) {
    navigation_html +=
      '<a class="page_link" href="javascript:go_to_page(' +
      current_link +
      ')" longdesc="' +
      current_link +
      '">' +
      (current_link + 1) +
      "</a>";
    current_link++;
  }
  navigation_html += '<a class="next_link" href="javascript:next();">Next</a>';

  $("#page_navigation").html(navigation_html);

  //add active_page class to the first page link
  $("#page_navigation .page_link:first").addClass("active_page");

  //hide all the elements inside pagingBox div
  $("#pagingBox").children().addClass("show");

  //and show the first n (show_per_page) elements
  $("#pagingBox").children().slice(0, show_per_page).removeClass("show");
});

//Pagination JS

function previous() {
  new_page = parseInt($("#current_page").val()) - 1;
  //if there is an item before the current active link run the function
  if ($(".active_page").prev(".page_link").length == true) {
    go_to_page(new_page);
  }
}

function next() {
  new_page = parseInt($("#current_page").val()) + 1;
  //if there is an item after the current active link run the function
  if ($(".active_page").next(".page_link").length == true) {
    go_to_page(new_page);
  }
}
function go_to_page(page_num) {
  //get the number of items shown per page
  var show_per_page = parseInt($("#show_per_page").val());

  //get the element number where to start the slice from
  start_from = page_num * show_per_page;

  //get the element number where to end the slice
  end_on = start_from + show_per_page;

  //hide all children elements of pagingBox div, get specific items and show them
  $("#pagingBox")
    .children()
    .addClass("show")
    .slice(start_from, end_on)
    .removeClass("show");

  /*get the page link that has longdesc attribute of the current page and add active_page class to it
	and remove that class from previously active page link*/
  $(".page_link[longdesc=" + page_num + "]")
    .addClass("active_page")
    .siblings(".active_page")
    .removeClass("active_page");

  //update the current page input field
  $("#current_page").val(page_num);
}