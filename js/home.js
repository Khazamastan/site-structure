$(window).on("load", function(){
  w3.includeHTML(function(){
    // $('#choose-location').modal({show : true});
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
    var onBackClick = function(){

    }
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
    $('body').on('click','.toggle-nav', function(){
      $('.navbarItems').toggle();
    });

    var triggers = ['.book-online','.choose-doctor', '.book-appointment', '.request-done' ]
    var ids = ['#chooseLocation', '#chooseDoctor', '#bookappointment', '#done'];
    var idx = 0;
    triggers.forEach(function(trigger,i){
      $('body').on('click',trigger, function(){
        if(i < 1){
          $('#choose-location').modal({show : true});
        }
        idx = i;
        var showBack = (i!=0 & i!=(ids.length-1))
        showModalItem(ids[i], showBack);
      });
    })


    $('.modal .back').on('click', function(){
      showModalItem(ids[idx-1], ((idx-1)!=0))
    })

    function showModalItem(item, back){
      $('.modal .item').hide();
      $(item).show();
      if(back){
        $('.modal .back').show();
      }else{
        $('.modal .back').hide();
      }
    }
  });
});