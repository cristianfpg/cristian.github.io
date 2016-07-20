/* bg-animate landing page*/
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
/* portfolio random colors */
var colors = ['#991E00','#A22706','#AC2F0C','#B53813','#BE4119','#C74A1F','#D15225','#DA5B2B'];
var random;
for(var i = 0; i < $('#portfolio').children().length; i++){
  random = Math.floor((Math.random() * colors.length));
  $('#portfolio').children(':nth-child('+(i+1)+')').css('background-color',colors[random]);
  colors.splice(random, 1);
}
/* animate scroll/gotosection */
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() { // get all anchors (a) that contains # in href but exclude anchors with href exaclty equals to #
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
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
/* waypoints */
var valid = true;
var waypoint1 = new Waypoint({
  element: document.getElementById('titles'),
  handler: function() {
    $('#btns').removeClass();
    $('#btns').css('opacity','1').addClass('animated bounceInUp');
    var initOnce = function(valid){
      if(valid == true)init();
    }
    initOnce(valid);
    valid = false;
  }
});
var waypoint2 = new Waypoint({
  element: document.getElementById('titles'),
  handler: function() {
    if($('#btns').css('opacity') == 1){
      $('#btns').removeClass();
      $('#btns').addClass('animated bounceOutDown');
    }
  }
});
/* form contact */
$('.btnContact').click(function(){
  $('#contact').removeClass();
  $('#contact').css('opacity','1').addClass('animated fadeInRight');
});
$('.close').click(function(){
  $('#contact').removeClass();
  $('#contact').addClass('animated fadeOutRight');
});
/* thanks message*/
$.fn.extend({
    animateCss: function () {
        $('#contact').removeClass();
        $('#contact').addClass('animated fadeOutRight');
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated fadeInUp').one(animationEnd, function() {
            setTimeout(function(){
              $('#thanks').removeClass('animated fadeInUp');
              $('#thanks').addClass('animated fadeOutUp').one(animationEnd, function(){
                window.location.replace('');
              });
            }, 1000);
        });
    }
});
if (location.hash == '#thanks') {
  $('#thanks').animateCss();
}

/* adobe animation */
(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
  width: 400,
  height: 400,
  fps: 30,
  color: "#FFFFFF",
  manifest: []
};



// symbols:



(lib.Symbol1 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFD317").s().p("AyZVqQi8i7h+jnIBHgWQghg8gdg+IhFAVQhPiugoi7Qgoi9AAjEQAAljCElGQAgAUA8AiQg3CKgdCPIAMAFQgjCpAACqQAAHXDyGTQDqGHGODfIAAA1IgCgBIAABTQj8iCjMjMgA3yrCQCEkKDVjWQC2i1Deh8QDdh7D2g5IAXA/QBDgPBEgKIgYhAQCMgWCMAAQFtAAFMCKQFMCJECECQC+C/B+DqQg2AoggAWIgJgQIgGAFQg/h1hShrIAGgFQg1hFg8g/Qgwg0g1gvIgFAEQjnjRkhhxQkqh2lEAAQmIAAlgCsQlVCnjvEoIgKgGQh4CVhXCwQg4gggjgWg");
  this.shape.setTransform(171.2,172);

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,342.4,344.1);


(lib.Group_9 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#DD6D03").s().p("AAZgiQk3kgmSiBIBAi9QHBCQFaFFQFYFCCuG3IjCAzQigmFk2keg");
  this.shape.setTransform(336.9,74.2);

  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#DD6D03").s().p("AvNDAIA6jAQEeBdEvAAQE/AAEphkQEghkD0i5ICYCHQkSDWlHB0QlTB4loAAQlNAAk6hlg");
  this.shape_1.setTransform(243,391.1);

  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#DD6D03").s().p("AiSCHQkik0iSmNQBpgbBbgVQCEFaD9EPQD7ENFNCdIgGAQQgbBYgZBaQmAiukfk2g");
  this.shape_2.setTransform(71.3,340);

  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#DD6D03").s().p("AysNbQAAmrClmGQCgl4EjkjQEjkjF4igQGGilGrAAQCTAACSAUQgpB3gYBKQhwgNh0AAQmCAAliCWQlTCQkHEIQkIEHiQFTQiWFiAAGCQAACrAdClQhyAahQAVQgji9AAjCg");
  this.shape_3.setTransform(119.8,124.3);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,405.8,420.5);


(lib.Group_8 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFC356").s().p("AxzGLIjNiaIhzhaQE0kyGPioQGdivHCAAQF2AAFfB5QFRB0EfDaIjEDeQiwDJgFADQjRiXjzhQQj8hTkMAAQk5AAkkByQkaBwjgDMg");
  this.shape.setTransform(211.4,50);

  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFC356").s().p("AglE5Qkghtj3i4QA+hdBgiOICfjsQCzCKDOBUQDVBWDmAZIAAI6Qk9gaklhxg");
  this.shape_1.setTransform(147.2,399.2);

  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFC356").s().p("Ak7JtQifmNAAmtQAAkoBMkbQBKkTCNj3QEFC8DPCJQhdCwgyDBQgxDHAADQQgBEmBmEUQBiELC3DbIhxCYQg4BIhVBqIhlB+QkZkvial/g");
  this.shape_2.setTransform(47.6,243.3);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,357.5,444.4);


(lib.Group_7 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#F0A540").s().p("AoibrQlZiTkKkKQkKkKiSlZQiYllAAmGQAAmFCYllQCSlZEKkKQEKkKFZiSQFliYGFAAQHIAAGVDMQGIDGENFcIhQA8Qj/lKl0i7Ql/jBmwAAQlwAAlTCQQlHCKj8D9Qj9D8iKFHQiQFTAAFwQAAFyCQFSQCKFHD9D8QD8D9FHCKQFTCQFwAAQCpAACggeIAABlQigAdipAAQmFAAlliXg");
  this.shape.setTransform(172.2,192.2);

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,344.5,384.5);


(lib.Group_6 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFD317").s().p("AKCgHQmRi6m7AAQklAAkXBTQkOBQjvCWIi4iqQgUgUgbgQQEgjHFOhnQFPhpFjAAQHOAAGnCvQGnCwFJFGQApAqAnArIjLDhQkblDmDiyg");
  this.shape.setTransform(252.1,49.4);

  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFD317").s().p("ADYRuQmlivlIlIQlIlJiwmlQivmnAAnQQAAiZAUiVIEfCEQgHBXAABTQAAGaCfF3QCZFnEYEYQEXEXFoCZQF3CfGaAAQA3AAA2gDIAAEtQg9ACgwAAQnQAAmoivg");
  this.shape_1.setTransform(121.4,332.5);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,403.7,463.5);


(lib.Group_5 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFD317").s().p("Ao9DiQmtiWlpkWIARgVQBFhYA5hFQFLEAGJCHQGXCOGwAAQHhAAG/isIBdDPQnrDBoSAAQnYAAm8ibg");
  this.shape.setTransform(244.4,519.3);

  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFD317").s().p("AiDAxQjqAAjmAqIhLjYQELg0EQAAQGaAAGIB2IAADtQmIiBmaAAg");
  this.shape_1.setTransform(292,17.9);

  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFD317").s().p("AsOU4Qh3mJAAmfQAAmuCAmUQB7mJDplVQDnlRE6kBQFAkEF7ibIBLDYQlaCPkjDuQkfDtjRE1QjVE4hwFoQh1FxABGJQAAFxBlFeQBkFUC8ErQhKBJhcBbQjalNhzl9g");
  this.shape_2.setTransform(90.3,225.9);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,380.8,557.5);


(lib.Group_4 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFD317").s().p("AANgJQjCiwjjiDIAcg7QEoCpDxDwQCLCNByCbIgvAuQibjUjDitg");
  this.shape.setTransform(415.8,70.5);

  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFD317").s().p("AykCoIgBgCQEri5FThiQFVhiFmAAQERAAEIA5QEGA4DzBsIgdA7QnijYoTAAQlcAAlOBgQlEBckgCzg");
  this.shape_1.setTransform(237.9,21.7);

  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFD317").s().p("AoGJPQAAn7C/nLQC/nOFklmQB6h6CMhqQAIAVAPARIAOAQQnFFYj/H6QkJIIAAJOQAAGjCKGLIg+ATQiMmTAAmug");
  this.shape_2.setTransform(52,193.6);

  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFD317").s().p("AC7IZQmui9lTlTQlElEi9mbIA/gUQEfJrI1GAQJBGMK7AeIgBA/QncgTmwi+g");
  this.shape_3.setTransform(132.3,430.5);

  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFD317").s().p("ArtD8QGXgVF2iWQFtiPEvj9IAyAsQk+EMl/CUQl+CXmgAUg");
  this.shape_4.setTransform(340.3,473.5);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,456.8,505.2);


(lib.Group_2 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFD317").s().p("EAClAkLQm6m8jto8Qjto7AAp0QAApyDto7QDto8G6m8QDdjeEHivQAsBEA7BTQpiGUleKAQlrKUAALzQAAJ3EBI8QD4IpG9GdIAADyQhthbhphpg");
  this.shape.setTransform(75.2,251.1);

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150.5,502.3);


(lib.Group = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#F0A540").s().p("AwCLGQCym2FSlQQE3k3GLiwQGLiwG0gWQgVAbgCAoIgBAiQqLAroPGCQoFF6jxJPg");
  this.shape.setTransform(120,75.3);

  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#F0A540").s().p("AKJDNQjHkAkHi/QonmSqqgZIACgeQAAgqgVgdQHFANGbCxQGZCxFBFBQCzCwCIDUQCGDPBYDpIhiAYQh2kxjJkEg");
  this.shape_1.setTransform(348.3,77.1);

  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#F0A540").s().p("AmaBSIAMhiQBqAKBgAAQE0AAErhVIAABnQkpBPk2ABQhmAAhwgKg");
  this.shape_2.setTransform(254.9,460.9);

  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#F0A540").s().p("AAYDQQk1ilj9j6QhQhQhGhWIBOhAQD1EpFJDEQFNDLF/BMQAEANAFAHIgKBTQlahCk1ikg");
  this.shape_3.setTransform(122.8,422.1);

  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#F0A540").s().p("AiHFuQhmlOAAlgQAAlYBflDIBdApQhYExAAFBQAAFSBjFCQBeE3C2ERIhPBAQjBkhhllNg");
  this.shape_4.setTransform(23.9,267.2);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,455,470.1);


// stage content:
(lib.photoanimate = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // timeline functions:
  this.frame_23 = function() {
    this.stop();
  }

  // actions tween:
  this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

  // 1
  this.instance = new lib.Symbol1();
  this.instance.setTransform(200.6,200.3,0.983,0.983,134.1,0,0,182.7,181.8);
  this.instance.alpha = 0;

  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:171.2,regY:172,scaleX:0.99,scaleY:0.99,rotation:127.8,x:215.2,y:197.2,alpha:0.084},0).wait(1).to({rotation:121.9,x:214.9,y:195.8,alpha:0.164},0).wait(1).to({rotation:116.2,x:214.3,y:194.4,alpha:0.24},0).wait(1).to({rotation:110.8,x:213.7,y:193.1,alpha:0.313},0).wait(1).to({rotation:105.7,x:213,y:191.9,alpha:0.382},0).wait(1).to({rotation:100.8,x:212.3,y:191,alpha:0.448},0).wait(1).to({rotation:96.2,x:211.5,y:190.1,alpha:0.51},0).wait(1).to({rotation:91.9,x:210.7,y:189.3,alpha:0.568},0).wait(1).to({rotation:87.9,x:209.9,y:188.6,alpha:0.622},0).wait(1).to({rotation:84.1,x:209.1,y:188,alpha:0.673},0).wait(1).to({rotation:80.6,x:208.4,y:187.6,alpha:0.72},0).wait(1).to({rotation:77.4,x:207.6,y:187.2,alpha:0.764},0).wait(1).to({rotation:74.5,x:207,y:186.8,alpha:0.804},0).wait(1).to({rotation:71.8,x:206.4,y:186.5,alpha:0.84},0).wait(1).to({rotation:69.4,x:205.7,y:186.3,alpha:0.872},0).wait(1).to({rotation:67.2,x:205.2,y:186.1,alpha:0.901},0).wait(1).to({rotation:65.4,x:204.8,y:185.9,alpha:0.926},0).wait(1).to({rotation:63.8,x:204.3,y:185.8,alpha:0.948},0).wait(1).to({rotation:62.5,x:204,y:185.7,alpha:0.965},0).wait(1).to({rotation:61.4,x:203.7,alpha:0.98},0).wait(1).to({rotation:60.6,x:203.5,alpha:0.99},0).wait(1).to({rotation:60.1,x:203.4,y:185.6,alpha:0.997},0).wait(1).to({rotation:59.9,alpha:1},0).wait(1));

  // 2
  this.instance_1 = new lib.Group_2();
  this.instance_1.setTransform(200.1,199.9,0.572,0.572,0,0,0,321.6,260.4);
  this.instance_1.alpha = 0;

  this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:75.2,regY:251.1,rotation:-5.7,x:59.2,y:208.6,alpha:0.084},0).wait(1).to({rotation:-11.2,x:60.7,y:221.9,alpha:0.165},0).wait(1).to({rotation:-16.4,x:63.3,y:234.5,alpha:0.242},0).wait(1).to({rotation:-21.3,x:66.8,y:246.2,alpha:0.315},0).wait(1).to({rotation:-26,x:71,y:256.9,alpha:0.384},0).wait(1).to({rotation:-30.5,x:75.8,y:266.8,alpha:0.45},0).wait(1).to({rotation:-34.7,x:81,y:275.7,alpha:0.512},0).wait(1).to({rotation:-38.6,x:86.6,y:283.7,alpha:0.57},0).wait(1).to({rotation:-42.3,x:92.2,y:290.9,alpha:0.625},0).wait(1).to({rotation:-45.8,x:97.9,y:297.2,alpha:0.676},0).wait(1).to({rotation:-48.9,x:103.4,y:302.8,alpha:0.723},0).wait(1).to({rotation:-51.9,x:108.8,y:307.6,alpha:0.766},0).wait(1).to({rotation:-54.6,x:114,y:311.7,alpha:0.806},0).wait(1).to({rotation:-57,x:118.9,y:315.3,alpha:0.842},0).wait(1).to({rotation:-59.2,x:123.4,y:318.3,alpha:0.874},0).wait(1).to({rotation:-61.2,x:127.4,y:320.9,alpha:0.903},0).wait(1).to({rotation:-62.9,x:131,y:323,alpha:0.928},0).wait(1).to({rotation:-64.3,x:134.1,y:324.6,alpha:0.949},0).wait(1).to({rotation:-65.5,x:136.7,y:326,alpha:0.967},0).wait(1).to({rotation:-66.4,x:138.7,y:327,alpha:0.981},0).wait(1).to({rotation:-67.1,x:140.3,y:327.8,alpha:0.991},0).wait(1).to({rotation:-67.5,x:141.2,y:328.1,alpha:0.997},0).wait(1).to({rotation:-67.7,x:141.6,y:328.4,alpha:1},0).wait(1));

  // 3
  this.instance_2 = new lib.Group_9();
  this.instance_2.setTransform(199.9,199.8,0.572,0.572,-103.5,0,0,212.3,210);
  this.instance_2.alpha = 0;

  this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:202.9,regY:210.2,rotation:-101,x:201,y:205.1,alpha:0.084},0).wait(1).to({rotation:-98.5,x:200.7,alpha:0.165},0).wait(1).to({rotation:-96.1,x:200.5,alpha:0.242},0).wait(1).to({rotation:-93.8,x:200.3,alpha:0.315},0).wait(1).to({rotation:-91.6,x:200.1,y:205.2,alpha:0.384},0).wait(1).to({rotation:-89.5,x:199.9,alpha:0.45},0).wait(1).to({rotation:-87.6,x:199.8,y:205.1,alpha:0.512},0).wait(1).to({rotation:-85.8,x:199.6,y:205.2,alpha:0.57},0).wait(1).to({rotation:-84.1,x:199.4,alpha:0.625},0).wait(1).to({rotation:-82.5,x:199.3,y:205.1,alpha:0.676},0).wait(1).to({rotation:-81,x:199.1,alpha:0.723},0).wait(1).to({rotation:-79.7,x:199,alpha:0.766},0).wait(1).to({rotation:-78.4,x:198.9,alpha:0.806},0).wait(1).to({rotation:-77.3,x:198.8,y:205,alpha:0.842},0).wait(1).to({rotation:-76.3,x:198.7,y:205.1,alpha:0.874},0).wait(1).to({rotation:-75.4,x:198.6,y:205,alpha:0.903},0).wait(1).to({rotation:-74.6,x:198.5,alpha:0.928},0).wait(1).to({rotation:-73.9,alpha:0.949},0).wait(1).to({rotation:-73.4,alpha:0.967},0).wait(1).to({rotation:-73,x:198.4,alpha:0.981},0).wait(1).to({rotation:-72.6,alpha:0.991},0).wait(1).to({rotation:-72.4,y:204.9,alpha:0.997},0).wait(1).to({x:198.3,alpha:1},0).wait(1));

  // 4
  this.instance_3 = new lib.Group_6();
  this.instance_3.setTransform(199.9,200.3,0.572,0.572,-10.8,0,0,234.3,232.8);
  this.instance_3.alpha = 0;

  this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:201.8,regY:231.7,rotation:-11.8,x:181.5,y:203.5,alpha:0.085},0).wait(1).to({rotation:-12.7,x:181.6,y:203.7,alpha:0.166},0).wait(1).to({rotation:-13.5,y:204,alpha:0.244},0).wait(1).to({rotation:-14.3,x:181.7,y:204.3,alpha:0.318},0).wait(1).to({rotation:-15.1,x:181.8,y:204.5,alpha:0.388},0).wait(1).to({rotation:-15.8,y:204.7,alpha:0.454},0).wait(1).to({rotation:-16.4,x:181.9,y:204.9,alpha:0.516},0).wait(1).to({rotation:-17.1,y:205.2,alpha:0.575},0).wait(1).to({rotation:-17.7,x:182,y:205.3,alpha:0.629},0).wait(1).to({rotation:-18.2,x:182.1,y:205.5,alpha:0.681},0).wait(1).to({rotation:-18.7,y:205.6,alpha:0.728},0).wait(1).to({rotation:-19.2,y:205.8,alpha:0.771},0).wait(1).to({rotation:-19.6,x:182.2,y:205.9,alpha:0.811},0).wait(1).to({rotation:-20,y:206,alpha:0.847},0).wait(1).to({rotation:-20.3,y:206.1,alpha:0.879},0).wait(1).to({rotation:-20.6,x:182.3,y:206.2,alpha:0.907},0).wait(1).to({rotation:-20.9,y:206.3,alpha:0.932},0).wait(1).to({rotation:-21.1,y:206.4,alpha:0.953},0).wait(1).to({rotation:-21.3,alpha:0.97},0).wait(1).to({rotation:-21.5,y:206.5,alpha:0.983},0).wait(1).to({rotation:-21.6,x:182.4,alpha:0.992},0).wait(1).to({alpha:0.998},0).wait(1).to({alpha:1},0).wait(1));

  // 5
  this.instance_4 = new lib.Group_8();
  this.instance_4.setTransform(199.9,200.1,0.572,0.572,122.3,0,0,222.2,222.9);
  this.instance_4.alpha = 0;

  this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:178.7,regY:222.2,rotation:124.5,x:214.3,y:179.8,alpha:0.085},0).wait(1).to({rotation:126.6,x:215,y:180.3,alpha:0.166},0).wait(1).to({rotation:128.7,x:215.7,y:180.9,alpha:0.243},0).wait(1).to({rotation:130.6,x:216.3,y:181.4,alpha:0.316},0).wait(1).to({rotation:132.5,x:216.9,y:182,alpha:0.386},0).wait(1).to({rotation:134.2,x:217.5,y:182.5,alpha:0.452},0).wait(1).to({rotation:135.8,x:217.9,y:183,alpha:0.514},0).wait(1).to({rotation:137.4,x:218.4,y:183.5,alpha:0.572},0).wait(1).to({rotation:138.8,x:218.8,y:184,alpha:0.627},0).wait(1).to({rotation:140.2,x:219.2,y:184.4,alpha:0.678},0).wait(1).to({rotation:141.4,x:219.6,y:184.8,alpha:0.725},0).wait(1).to({rotation:142.6,x:219.8,y:185.3,alpha:0.769},0).wait(1).to({rotation:143.6,x:220.1,y:185.6,alpha:0.808},0).wait(1).to({rotation:144.6,x:220.4,y:186,alpha:0.844},0).wait(1).to({rotation:145.4,x:220.5,y:186.3,alpha:0.877},0).wait(1).to({rotation:146.2,x:220.7,y:186.5,alpha:0.905},0).wait(1).to({rotation:146.8,x:220.9,y:186.8,alpha:0.93},0).wait(1).to({rotation:147.4,x:221,y:187,alpha:0.951},0).wait(1).to({rotation:147.9,x:221.1,y:187.2,alpha:0.968},0).wait(1).to({rotation:148.2,x:221.2,y:187.3,alpha:0.982},0).wait(1).to({rotation:148.5,y:187.4,alpha:0.992},0).wait(1).to({rotation:148.6,x:221.3,alpha:0.998},0).wait(1).to({rotation:148.7,y:187.5,alpha:1},0).wait(1));

  // 6
  this.instance_5 = new lib.Group_5();
  this.instance_5.setTransform(200,200,0.572,0.572,-63.9,0,0,281.9,279.8);
  this.instance_5.alpha = 0;

  this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:190.4,regY:278.7,rotation:-65.8,x:178,y:247.5,alpha:0.085},0).wait(1).to({rotation:-67.8,x:179.6,y:248.3,alpha:0.166},0).wait(1).to({rotation:-69.6,x:181.2,y:248.8,alpha:0.243},0).wait(1).to({rotation:-71.3,x:182.7,y:249.4,alpha:0.316},0).wait(1).to({rotation:-73,x:184.1,y:249.9,alpha:0.386},0).wait(1).to({rotation:-74.6,x:185.5,y:250.3,alpha:0.452},0).wait(1).to({rotation:-76.1,x:186.8,y:250.6,alpha:0.514},0).wait(1).to({rotation:-77.5,x:187.9,y:251,alpha:0.572},0).wait(1).to({rotation:-78.8,x:189.1,y:251.2,alpha:0.627},0).wait(1).to({rotation:-80,x:190.2,y:251.5,alpha:0.678},0).wait(1).to({rotation:-81.1,x:191.2,y:251.6,alpha:0.725},0).wait(1).to({rotation:-82.1,x:192.2,y:251.8,alpha:0.769},0).wait(1).to({rotation:-83.1,x:193,y:251.9,alpha:0.808},0).wait(1).to({rotation:-83.9,x:193.8,y:252,alpha:0.844},0).wait(1).to({rotation:-84.7,x:194.5,y:252.1,alpha:0.877},0).wait(1).to({rotation:-85.4,x:195.1,alpha:0.905},0).wait(1).to({rotation:-86,x:195.7,y:252.2,alpha:0.93},0).wait(1).to({rotation:-86.5,x:196.2,alpha:0.951},0).wait(1).to({rotation:-86.9,x:196.5,y:252.3,alpha:0.968},0).wait(1).to({rotation:-87.2,x:196.8,alpha:0.982},0).wait(1).to({rotation:-87.5,x:197,alpha:0.992},0).wait(1).to({rotation:-87.6,x:197.1,alpha:0.998},0).wait(1).to({rotation:-87.7,x:197.2,alpha:1},0).wait(1));

  // 7
  this.instance_6 = new lib.Group_7();
  this.instance_6.setTransform(200,199.8,0.572,0.572,-176.9,0,0,190.8,188.4);
  this.instance_6.alpha = 0;

  this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:172.2,regY:192.2,rotation:-160.7,x:210.8,y:201.2,alpha:0.085},0).wait(1).to({rotation:-145.4,x:210,y:204,alpha:0.166},0).wait(1).to({rotation:-130.8,x:208.6,y:206.4,alpha:0.244},0).wait(1).to({rotation:-116.8,x:206.7,y:208.3,alpha:0.318},0).wait(1).to({rotation:-103.6,x:204.6,y:209.6,alpha:0.388},0).wait(1).to({rotation:-91.1,x:202.4,y:210.3,alpha:0.454},0).wait(1).to({rotation:-79.4,x:200.2,y:210.6,alpha:0.516},0).wait(1).to({rotation:-68.3,x:198.1,y:210.4,alpha:0.575},0).wait(1).to({rotation:-57.9,x:196.2,y:209.9,alpha:0.629},0).wait(1).to({rotation:-48.3,x:194.6,y:209.1,alpha:0.681},0).wait(1).to({rotation:-39.4,x:193.2,y:208.2,alpha:0.728},0).wait(1).to({rotation:-31.2,x:192.1,y:207.1,alpha:0.771},0).wait(1).to({rotation:-23.7,x:191.2,y:206,alpha:0.811},0).wait(1).to({rotation:-16.9,x:190.5,y:204.9,alpha:0.847},0).wait(1).to({rotation:-10.8,x:190,y:203.9,alpha:0.879},0).wait(1).to({rotation:-5.5,x:189.6,y:203,alpha:0.907},0).wait(1).to({rotation:-0.8,x:189.4,y:202.1,alpha:0.932},0).wait(1).to({rotation:3.1,y:201.4,alpha:0.953},0).wait(1).to({rotation:6.3,x:189.2,y:200.7,alpha:0.97},0).wait(1).to({rotation:8.8,y:200.3,alpha:0.983},0).wait(1).to({rotation:10.6,y:200,alpha:0.992},0).wait(1).to({rotation:11.6,y:199.7,alpha:0.998},0).wait(1).to({rotation:12,alpha:1},0).wait(1));

  // 8
  this.instance_7 = new lib.Group();
  this.instance_7.setTransform(200.2,200,0.572,0.572,0,0,0,235,235.6);
  this.instance_7.alpha = 0;

  this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:227.5,regY:235,rotation:14.2,x:196.1,y:198.6,alpha:0.084},0).wait(1).to({rotation:27.8,x:196.6,y:197.7,alpha:0.165},0).wait(1).to({rotation:40.8,x:197.2,y:196.9,alpha:0.242},0).wait(1).to({rotation:53.1,x:197.9,y:196.3,alpha:0.315},0).wait(1).to({rotation:64.8,x:198.7,y:195.9,alpha:0.384},0).wait(1).to({rotation:75.9,x:199.5,y:195.7,alpha:0.45},0).wait(1).to({rotation:86.4,x:200.3,alpha:0.512},0).wait(1).to({rotation:96.2,x:201,y:195.8,alpha:0.57},0).wait(1).to({rotation:105.4,x:201.6,y:195.9,alpha:0.625},0).wait(1).to({rotation:114,x:202.2,y:196.2,alpha:0.676},0).wait(1).to({rotation:122,x:202.8,y:196.5,alpha:0.723},0).wait(1).to({rotation:129.3,x:203.1,y:196.9,alpha:0.766},0).wait(1).to({rotation:136.1,x:203.5,y:197.2,alpha:0.806},0).wait(1).to({rotation:142.1,x:203.8,y:197.6,alpha:0.842},0).wait(1).to({rotation:147.6,x:204,y:197.9,alpha:0.874},0).wait(1).to({rotation:152.4,x:204.2,y:198.3,alpha:0.903},0).wait(1).to({rotation:156.7,y:198.6,alpha:0.928},0).wait(1).to({rotation:160.2,x:204.3,y:198.8,alpha:0.949},0).wait(1).to({rotation:163.2,x:204.4,y:199.1,alpha:0.967},0).wait(1).to({rotation:165.5,y:199.2,alpha:0.981},0).wait(1).to({rotation:167.2,y:199.4,alpha:0.991},0).wait(1).to({rotation:168.3,alpha:0.997},0).wait(1).to({rotation:168.8,y:199.5,alpha:1},0).wait(1));

  // 9
  this.instance_8 = new lib.Group_4();
  this.instance_8.setTransform(200.2,199.9,0.572,0.572,0,0,0,254,251.8);
  this.instance_8.alpha = 0;

  this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:228.4,regY:252.6,rotation:7.2,x:185.5,y:198.5,alpha:0.085},0).wait(1).to({rotation:14.1,x:185.8,y:196.7,alpha:0.166},0).wait(1).to({rotation:20.6,x:186.3,y:195.1,alpha:0.243},0).wait(1).to({rotation:26.9,x:186.8,y:193.7,alpha:0.316},0).wait(1).to({rotation:32.8,x:187.6,y:192.4,alpha:0.386},0).wait(1).to({rotation:38.4,x:188.4,y:191.2,alpha:0.452},0).wait(1).to({rotation:43.7,x:189.2,y:190.2,alpha:0.514},0).wait(1).to({rotation:48.6,x:190.1,y:189.3,alpha:0.572},0).wait(1).to({rotation:53.3,x:191.1,y:188.5,alpha:0.627},0).wait(1).to({rotation:57.6,x:191.9,y:187.8,alpha:0.678},0).wait(1).to({rotation:61.6,x:192.8,y:187.3,alpha:0.725},0).wait(1).to({rotation:65.3,x:193.6,y:186.8,alpha:0.769},0).wait(1).to({rotation:68.7,x:194.4,y:186.4,alpha:0.808},0).wait(1).to({rotation:71.8,x:195.1,y:186.1,alpha:0.844},0).wait(1).to({rotation:74.5,x:195.8,y:185.9,alpha:0.877},0).wait(1).to({rotation:76.9,x:196.4,y:185.8,alpha:0.905},0).wait(1).to({rotation:79,x:196.9,y:185.6,alpha:0.93},0).wait(1).to({rotation:80.8,x:197.3,y:185.5,alpha:0.951},0).wait(1).to({rotation:82.3,x:197.7,alpha:0.968},0).wait(1).to({rotation:83.4,x:198,y:185.4,alpha:0.982},0).wait(1).to({rotation:84.3,x:198.3,alpha:0.992},0).wait(1).to({rotation:84.8,alpha:0.998},0).wait(1).to({rotation:85,x:198.4,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(176.7,160.2,477.3,477.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
var canvas, stage, exportRoot;
function init() {
  // --- write your JS code here ---
  
  canvas = document.getElementById("canvas");
  exportRoot = new lib.photoanimate();

  stage = new createjs.Stage(canvas);
  stage.addChild(exportRoot);
  stage.update();

  createjs.Ticker.setFPS(lib.properties.fps);
  createjs.Ticker.addEventListener("tick", stage);
}
