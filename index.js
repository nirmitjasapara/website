function attachMenu() {
    $('.hamburger').on('click', function(){
    $(".menu").toggleClass("showmenu");
});
}
$(attachMenu);