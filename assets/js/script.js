function fadeOut(){$("#bg").stop(true).fadeTo(30,0)};
function fadeIn(link){$("#bg").stop(true).fadeTo(400,1).attr("src",link+".svg")};

function bgAnimate(child,filename){
	$("#links a:nth-child("+child+")").hover(function(){
		fadeIn("assets/svg/bg-"+filename+"");
	},function(){
		fadeOut();
	});
};

bgAnimate(1,"about");
bgAnimate(3,"portfolio");
bgAnimate(5,"contact");

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
  	console.log(location.pathname)
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      console.log(target);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});