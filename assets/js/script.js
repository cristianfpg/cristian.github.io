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