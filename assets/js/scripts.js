// https://github.com/cferdinandi/smooth-scroll
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1500,
	speedAsDuration: true
});

// https://blotter.js.org/
setTimeout(function(){
  var text = new Blotter.Text("HELLO.", {
    family : "monument_extendedultrabold",
    size : 200,
    fill : "#000",
    leading : 0.9,
    paddingTop: 20
  }); 
  var material = new Blotter.ChannelSplitMaterial();
  var blotter = new Blotter(material, { 
    texts : text
  });
  var scope = blotter.forText(text);
  
  function findAngle(x,y) {
    var theta = Math.atan2(y, x); 
    theta *= -180 / Math.PI;
    return theta;
  }
  
  function pythagorean(sideA, sideB){
    return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
  }
  
  var $hello = document.getElementById("hello");
  var $greetings = document.querySelectorAll(".greetings");
  
  scope.appendTo($hello);
  $hello.classList.add("active");
  
  $greetings.forEach(function($e){
    $e.classList.add("active");
  });
  document.addEventListener("mousemove",function(e) {
    var halfSize = {
      w: window.innerWidth/2,
      h: window.innerHeight/2
    }
    var posX = e.clientX - halfSize.w;
    var posY = halfSize.h - e.clientY;
  
    material.uniforms.uRotation.value = findAngle(posX, posY);
    material.uniforms.uOffset.value = pythagorean(posX, posY)*0.00007;
  });
},500);


document.addEventListener("scroll",function(e) {
  var $bar = document.getElementById("bar");
  var $scrollbar = document.getElementById("scrollbar");
  
  var scrollTop = window.pageYOffset;
  var windowHeight = window.innerHeight;
  var bodyHeight = document.body.offsetHeight - windowHeight;
  var spacebar = $scrollbar.offsetHeight - $bar.offsetHeight;

  var scrollPercent = (scrollTop*100) / bodyHeight;
  var barPercent = (spacebar*scrollPercent) / 100;

  $bar.style.top = barPercent+"px";
})