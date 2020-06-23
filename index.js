$(function(){
  $(window).scroll(function(){
    var winTop = $(window).scrollTop();
    if(winTop >= 30){
      $("body").addClass("sticky-header");
    }else{
      $("body").removeClass("sticky-header");
    }
  })
})

$( ".inner-switch" ).on("click", function() {
    if( $( "body" ).hasClass( "dark" )) {
      $( "body" ).removeClass( "dark" );
      $( ".inner-switch" ).text( "OFF" );
      $("#dark-css").remove();
      $("#avatar-dark").hide();
      $("#avatar-light").show();
      $("#opinions-dark").hide();
      $("#opinions-light").show();
    } else {
      $( "body" ).addClass( "dark" );
      $( ".inner-switch" ).text( "ON" );
      $( "head" ).append('<link href="dark.css" rel="stylesheet" type="text/css" id="dark-css">');
      $("#avatar-light").hide();
      $("#avatar-dark").show();
      $("#opinions-light").hide();
      $("#opinions-dark").show();
    }
});
