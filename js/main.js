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

$('.cd-testimonials-wrapper').flexslider({
    //declare the slider items
    selector: ".cd-testimonials > li",
    animation: "slide",
    //do not add navigation for paging control of each slide
    controlNav: false,
    slideshow: false,
    //Allow height of the slider to animate smoothly in horizontal mode
    smoothHeight: true,
    start: function(){
       $('.cd-testimonials').children('li').css({
          'opacity': 1,
          'position': 'relative'
       });
    }
 });