var menu_open = document.getElementsByClassName('menu-func');
var popBlock = document.getElementById('collapseBlock2');
var closeBtn = document.getElementById('closeBtn2');
var flightBtn = document.getElementsByClassName('itemOne');
var gallerySlide = document.getElementsByClassName('gallerySlide');

menu_open[0].addEventListener("click", function () {
    popBlock.style.display = "block";
    popBlock.classList.add('fadeInDown');
    popBlock.classList.remove('fadeOutUp');
});

closeBtn.addEventListener("click", function () {
    popBlock.classList.remove('fadeInDown');
    popBlock.classList.add('fadeOutUp');

})

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}




// card layout

$(function() {
    $('.material-card > .mc-btn-action').click(function () {
        var card = $(this).parent('.material-card');
        var icon = $(this).children('i');
        icon.addClass('fa-spin-fast');

        if (card.hasClass('mc-active')) {
            card.removeClass('mc-active');

            window.setTimeout(function() {
                icon
                    .removeClass('fa-arrow-left')
                    .removeClass('fa-spin-fast')
                    .addClass('fa-bars');

            }, 800);
        } else {
            card.addClass('mc-active');

            window.setTimeout(function() {
                icon
                    .removeClass('fa-bars')
                    .removeClass('fa-spin-fast')
                    .addClass('fa-arrow-left');

            }, 800);
        }
    });
});