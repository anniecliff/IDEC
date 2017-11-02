$(function(){
   if($(window).width() < 992) {
      $(".button-collapse").sideNav({
         edge: 'left'
      });
   }
   else {
      $(".button-collapse").sideNav();
   }
   $('select').material_select();
   $('.datepicker').pickadate({
      closeOnSelect: false,
      selectYears: 15,
      
   });
  
   $(".owl-carousel").owlCarousel({
      items: 1,
      nav: true,
      navText: ['<i class="material-icons">chevron_left</i>','<i class="material-icons">chevron_right</i>'],
      onInitialized: function(event) {
         var element   = event.target;
         if($(element).hasClass("owl-controls")) {
            $(element).add(".owl-nav").show();
         }
      }
   });
   
});