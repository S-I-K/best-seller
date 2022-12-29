/* document.ready 혹은 자기실행함수 */
(function ($) {
  $(function () {
    // main swiper slide
    var mainSwiper = new Swiper("#main_slide", {
      // 옵션 작성
      loop: true, // 무한루프 (기본값 false)
      autoplay: {
        // 자동재생
        delay: 6000,
        disableOnInteraction: false, // 사용자 상호작용 (터치, 드래그, 마우스오버 등) 후에도 스와이퍼가 비활성화 (정지) 되지 않음. 모바일에서 여러 문제가 생길 수 있으므로 false로 설정해놓는게 좋음.
      },
    });

    // seller swiper slide
    var sellerSwiper = new Swiper("#seller_swiper", {
      loop: true, // 무한루프
      slidesPerView: "auto", // 한 화면에 보여줄 슬라이드 수 (기본값 1) , auto - css 너비를 그대로 유지한 상태로 슬라이드 기능만 적용됨.
      spaceBetween: 24, // 슬라이드 사이 간격 (px 생략)
      centeredSlides: true,
      autoplay: {
        // 자동재생
        delay: 4000,
        disableOnInteraction: false, // 사용자 상호작용 (터치, 드래그, 마우스오버 등) 후에도 스와이퍼가 비활성화 (정지) 되지 않음. 모바일에서 여러 문제가 생길 수 있으므로 false로 설정해놓는게 좋음.
      },
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      breakpoints: {
        769: {
          centeredSlides: false,
          spaceBetween: 33,
        },
      },
    });

    /* faq acodian panel */
    /* 
      1. .faq_head를 클릭하면 질문에 대한 .faq_content 보여지고 숨겨지고 반복
    */
    $(".faq_head").click(function () {
      $(this).siblings(".faq_content").stop().slideToggle(400);
      $(this).parents("li").toggleClass("arrow_action");
    });

    /* scroll effect */
    $(".txt_title").scrollToGiveClass({
      class: "scroll",
      baseline: "middle",
      add: 300,
    });
    $(".seller_btn").scrollToGiveClass({
      class: "scroll",
      baseline: "middle",
      add: 300,
    });
    $(".seller_txt").scrollToGiveClass({
      class: "scroll",
      baseline: "middle",
      add: 300,
    });
    $(".title").scrollToGiveClass({
      class: "scroll",
      baseline: "middle",
      add: 300,
    });
    $(".review_item").scrollToGiveClass({
      class: "scroll",
      baseline: "middle",
      add: 300,
    });
    $(".faq_list").scrollToGiveClass({
      class: "scroll",
      baseline: "middle",
      add: 300,
    });

    /* mobile-nav event */
    $(".m_menu").click(function () {
      $(".m_nav").toggle("200");
      $(this).toggleClass("close");
    });
  });
})(jQuery);
