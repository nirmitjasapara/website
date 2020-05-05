function attachMenu() {
    $('.hamburger').on('click', function(){
    $(".navbar").toggleClass("showmenu");
});
}
$(attachMenu);