$(".navbar__liens").on("click",function(){
    $(".navbar__check:checked ~ .navbar__plan, .navbar__plan, .navbar__nav, .navbar__liens").hide(1000);
   });

$(".navbar__check").on("click",function(){
    $(".navbar__check:checked ~ .navbar__plan, .navbar__plan, .navbar__nav, .navbar__liens").show();
   });

