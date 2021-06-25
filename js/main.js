$(document).ready(function(){
  
  var swiper = new Swiper(".mySwiper", {
    loop:true,
    // autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false
    //   delay :3500,   // 시간 설정
    //   disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    // },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
  });

  var swiper = new Swiper(".sc02-slider", {
    loop:true,
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false
      delay :3500,   // 시간 설정
      disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
    breakpoints: { //반응형 조건 속성
      1024: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      540: { //640 이상일 경우
        slidesPerView: 2, //레이아웃 2열
      },
      320: { //640 이상일 경우
        slidesPerView: 1, //레이아웃 2열
      },
      0: { //640 이상일 경우
        slidesPerView: 1, //레이아웃 2열
      },
    }
  });

  var swiper = new Swiper(".sc05-slide02", {
    loop:true,
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: { //반응형 조건 속성
      540: { //640 이상일 경우
        slidesPerView: 2, //레이아웃 2열
      },
      320: { //640 이상일 경우
        slidesPerView: 1, //레이아웃 2열
      },
      0: { //640 이상일 경우
        slidesPerView: 1, //레이아웃 2열
      },
    }
  });

  var menu = [ "키친" , "바스" ,"도어" ,"중문","벽바닥재" ,"빌트인가구"]
  var swiper = new Swiper(".sc05-slide01", {
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function(index,className){
        return '<span class="' + className + '">' + (menu[index]) + '</span>';
      }
    },
  });

  //  sc02 tabs  ----------------------------------
  
  $('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});

  //  sc05 tabs  ----------------------------------
  
  $('.sc05-tabs li').click(function(){
		var tab_id2 = $(this).attr('data-tab');

		$('.sc05-tabs li').removeClass('current');
		$('.sc05-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id2).addClass('current');
	});

  

  $('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});


  let cursorMeter =  document.getElementById('cursorMeter');
  document.addEventListener('mouseover',function(e){
    cursorMeter.style.top = e.clientY+'px';
    cursorMeter.style.left = e.clientX+'px';
  })

  let percent = document.getElementById('percent');
  let pregressBar = document.getElementById('pregressBar');

  let totalHeight = document.body.scrollHeight - window.innerHeight;

  window.onscroll = function(){
    let progress = (window.pageYOffset / totalHeight) * 90;
    pregressBar.style.width = progress + '%'
    percent.innerHTML = "Page Sscrolled" + Math.round(progress) + "%"
  }


  
  // 스크롤 매직, 컨트롤러
var controller = new ScrollMagic.Controller();

// 적용해야하는 애니메이션
var tween2 = gsap.to('.tabs', .5 , {
  backgroundColor: "#333333",
    y: "1150px" , //transform: translateX 의 줄임말
    //background-color 같이 '-'가 들어갈경우에는 낙타 표기법으로 써준다 (backgroundColor)
});



// 스크롤매직 씬 생성
var scene2 = new ScrollMagic.Scene({
	triggerElement: ".tab-content",
  triggerHook:  .3 , //0~1 ,
  offset: 0,
	duration: "100%",
})

.setTween(tween2) // 애니메이션 등록
.addTo(controller) // 컨트롤러 등록






});
