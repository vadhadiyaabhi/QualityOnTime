$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20 ){
            $(".custom-navbar").addClass("sticky");
        }
        else{
            $(".custom-navbar").removeClass("sticky");
        }
    });

    $('.menu-toggler').click(function(){
        $(this).toggleClass("active");
        $('.custom-navbar-menu').toggleClass("active");
    });
});