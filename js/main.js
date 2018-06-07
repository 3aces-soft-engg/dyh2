var menu_open = document.getElementsByClassName('menu-func');
var popBlock = document.getElementById('collapseBlock');
var closeBtn = document.getElementById('closeBtn');

menu_open[0].addEventListener("click", function () {
    popBlock.style.display = "block";
});

closeBtn.addEventListener("click", function () {
    popBlock.style.display = "none";
})
