$(document).ready(function(){
  
  var swiper = new Swiper(".mySwiper", {
    autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false
      delay : 2000,   // 시간 설정
      disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
  });


});
