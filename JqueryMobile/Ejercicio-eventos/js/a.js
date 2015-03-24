
$(function(){
  $( "div.noclick" ).bind( "tap", tapHandler );

  function tapHandler( event ){
    $( event.target ).toggleClass("noclick").addClass( "click" );
      //toggleclass activa y desactiva
  }
});
