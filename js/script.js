/* document.ready 혹은 자기실행함수 */
;(function($){
  $(function(){
    
    // main swiper slide
    var mainSwiper = new Swiper("#main_slide", {
      // 옵션 작성
      loop: true, // 무한루프 (기본값 false)
      autoplay: { // 자동재생
        delay: 6000,
        disableOnInteraction: false, // 사용자 상호작용 (터치, 드래그, 마우스오버 등) 후에도 스와이퍼가 비활성화 (정지) 되지 않음. 모바일에서 여러 문제가 생길 수 있으므로 false로 설정해놓는게 좋음.
      },

    });

    // seller swiper slide
    var sellerSwiper = new Swiper("#seller_swiper", {
      loop: true, // 무한루프
      slidesPerView: 'auto', // 한 화면에 보여줄 슬라이드 수 (기본값 1) , auto - css 너비를 그대로 유지한 상태로 슬라이드 기능만 적용됨.
      spaceBetween: 33, // 슬라이드 사이 간격 (px 생략)
      autoplay: { // 자동재생
        delay: 4000,
        disableOnInteraction: false, // 사용자 상호작용 (터치, 드래그, 마우스오버 등) 후에도 스와이퍼가 비활성화 (정지) 되지 않음. 모바일에서 여러 문제가 생길 수 있으므로 false로 설정해놓는게 좋음.
      },
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
    });


  });
})(jQuery);