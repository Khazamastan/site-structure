$(window).on("load", function(){
  w3.includeHTML(function(){
    var current = location.pathname;
    if(current !="/"){
      $('.nav a').each(function(){
          var $this = $(this);
          if($this.attr('href').indexOf(current) > -1){
              $this.addClass('active');
          }
      });
    }else{
      $('.nav a').eq(0).addClass('active');
    }
    var heroSwiper = new Swiper ('#hero-slider', {
      pagination: {
        el: '.swiper-pagination',
        clickable : true
      }
    })

    var practiceSwiper = new Swiper ('#practice-slider', {
      pagination: {
        el: '.swiper-pagination',
        clickable : true
      },
      navigation: { 
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    })
    $('.book-online').on('click', function(){
      $('#choose-location').modal({show : true});
    });

    $(document).on('choose-doctors', function(){
      $('#choose-doctor').modal({show : true});
    })
    $(document).on('book-appointment', function(){
      $('#book-appointment').modal({show : true});
    })
    $(document).on('done', function(){
      $('#done').modal({show : true});
    })
  });
});