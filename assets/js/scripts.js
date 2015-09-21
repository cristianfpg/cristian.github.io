var speed = 600;

$(".edu").on("mouseup" ,function(){
  $('body').animate({scrollTop:$('#cont1').position().top}, speed);
});
$(".form").on("mouseup" ,function(){
  $('body').animate({scrollTop:$('#cont2').position().top}, speed);
});
$(".contact").on("mouseup" ,function(){
  $('body').animate({scrollTop:$('#cont3').position().top}, speed);
});
$(".home").on("mouseup" ,function(){
  $('body').animate({scrollTop:$('.lp').position().top}, speed);
});

////////////////////////////////////////////////////////////////

var waypoint0 = new Waypoint({
  element: document.getElementById('home'),
  handler: function() {
    $("body").animate({backgroundColor: "rgb(0,0,0)"},speed);
  }
});
var waypoint1 = new Waypoint({
  element: document.getElementById('cont1'),
  handler: function() {
    $("body").animate({backgroundColor: "rgb(0,50,0)"},speed);
  }
});
var waypoint2 = new Waypoint({
  element: document.getElementById('cont2'),
  handler: function() {
    $("body").animate({backgroundColor: "rgb(0,0,50)"},speed);
  }
});
var waypoint3 = new Waypoint({
  element: document.getElementById('change3'),
  handler: function() {
    $("body").animate({backgroundColor: "rgb(50,0,0)"},speed);
  }
});
