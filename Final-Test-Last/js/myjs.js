$(document).ready(function(){
    $(".navbar-toggle").on("click", function () {
        $(this).toggleClass("active");
    });
    
    $(window).scroll(function(){
        if($(document).scrollTop()>=200)
            $(".ico-top").show("slow");else $(".ico-top").hide("slow");
    });
    
  });
 