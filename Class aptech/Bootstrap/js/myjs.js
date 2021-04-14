var i = 0;
function myFunction(){
    i = i +1;
    document.getElementById("giohang").innerHTML = i;
}
var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,

    },
    autoplay: true,
    loop: true,
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
      },
      breakpoints: {
        
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
      
    
      
});
$(".swiper-container").hover(function() {
    (this).swiper.autoplay.stop();
}, function() {
    (this).swiper.autoplay.start();
});