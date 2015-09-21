$(".edu").on("click" ,function(){
  $('body').animate({scrollTop:$('#cont1').position().top}, 'slow');
});
$(".form").on("click" ,function(){
  $('body').animate({scrollTop:$('#cont2').position().top}, 'slow');
});
$(".contact").on("click" ,function(){
  $('body').animate({scrollTop:$('#cont3').position().top}, 'slow');
});
$(".home").on("click" ,function(){
  $('body').animate({scrollTop:$('.lp').position().top}, 'slow');
});

////////////////////////////////////////////////////////////////

var waypoint = new Waypoint({
  element: document.getElementById('cont2'),
  handler: function() {
    // ingrese codigo aqui
    //$(".dot").animate({height: "50px",width: "50px"});
  }
})