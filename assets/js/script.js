/* bg-animate*/
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
/*animate gotosection*/
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
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
// animacion adobe animate
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

  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:171.2,regY:172,scaleX:0.99,scaleY:0.99,rotation:127.7,x:215.1,y:197.2},0).wait(1).to({rotation:121.7,x:214.8,y:195.7},0).wait(1).to({rotation:116,x:214.2,y:194.3},0).wait(1).to({rotation:110.5,x:213.6,y:193},0).wait(1).to({rotation:105.3,x:212.9,y:191.9},0).wait(1).to({rotation:100.4,x:212.1,y:190.8},0).wait(1).to({rotation:95.8,x:211.4,y:190},0).wait(1).to({rotation:91.4,x:210.6,y:189.2},0).wait(1).to({rotation:87.4,x:209.7,y:188.5},0).wait(1).to({rotation:83.6,x:209,y:187.9},0).wait(1).to({rotation:80.1,x:208.2,y:187.4},0).wait(1).to({rotation:76.8,x:207.4,y:187},0).wait(1).to({rotation:73.9,x:206.8,y:186.7},0).wait(1).to({rotation:71.2,x:206.1,y:186.5},0).wait(1).to({rotation:68.9,x:205.6,y:186.2},0).wait(1).to({rotation:66.8,x:205.1,y:186},0).wait(1).to({rotation:64.9,x:204.6,y:185.9},0).wait(1).to({rotation:63.4,x:204.2},0).wait(1).to({rotation:62.1,x:203.8,y:185.8},0).wait(1).to({rotation:61.2,x:203.6,y:185.7},0).wait(1).to({rotation:60.5,x:203.4,y:185.6},0).wait(1).to({rotation:60,y:185.7},0).wait(1).to({rotation:59.9,x:203.3,y:185.6},0).wait(1));

  // 2
  this.instance_1 = new lib.Group_2();
  this.instance_1.setTransform(200.1,199.9,0.572,0.572,0,0,0,321.6,260.4);

  this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:75.2,regY:251.1,rotation:-5.8,x:59.2,y:208.8},0).wait(1).to({rotation:-11.3,x:60.7,y:222.2},0).wait(1).to({rotation:-16.5,x:63.3,y:234.9},0).wait(1).to({rotation:-21.5,x:66.9,y:246.6},0).wait(1).to({rotation:-26.2,x:71.2,y:257.4},0).wait(1).to({rotation:-30.7,x:76.1,y:267.3},0).wait(1).to({rotation:-34.9,x:81.5,y:276.3},0).wait(1).to({rotation:-38.9,x:87,y:284.3},0).wait(1).to({rotation:-42.6,x:92.7,y:291.5},0).wait(1).to({rotation:-46.1,x:98.4,y:297.8},0).wait(1).to({rotation:-49.3,x:104.1,y:303.3},0).wait(1).to({rotation:-52.2,x:109.4,y:308.1},0).wait(1).to({rotation:-54.9,x:114.6,y:312.3},0).wait(1).to({rotation:-57.4,x:119.5,y:315.8},0).wait(1).to({rotation:-59.5,x:124,y:318.7},0).wait(1).to({rotation:-61.4,x:128,y:321.2},0).wait(1).to({rotation:-63.1,x:131.5,y:323.2},0).wait(1).to({rotation:-64.5,x:134.6,y:324.9},0).wait(1).to({rotation:-65.7,x:137.1,y:326.2},0).wait(1).to({rotation:-66.6,x:139,y:327.2},0).wait(1).to({rotation:-67.2,x:140.5,y:327.8},0).wait(1).to({rotation:-67.6,x:141.4,y:328.2},0).wait(1).to({rotation:-67.7,x:141.6,y:328.4},0).wait(1));

  // 3
  this.instance_2 = new lib.Group_9();
  this.instance_2.setTransform(199.9,199.8,0.572,0.572,-103.5,0,0,212.3,209.5);

  this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:202.9,regY:210.2,rotation:-100.9,x:201.3,y:205},0).wait(1).to({rotation:-98.4,x:201},0).wait(1).to({rotation:-96,x:200.8,y:205.1},0).wait(1).to({rotation:-93.7,x:200.6},0).wait(1).to({rotation:-91.5,x:200.4},0).wait(1).to({rotation:-89.4,x:200.2},0).wait(1).to({rotation:-87.5,x:200,y:205.2},0).wait(1).to({rotation:-85.6,x:199.9},0).wait(1).to({rotation:-83.9,x:199.7,y:205.1},0).wait(1).to({rotation:-82.3,x:199.6,y:205.2},0).wait(1).to({rotation:-80.9,x:199.5},0).wait(1).to({rotation:-79.5,x:199.3,y:205.1},0).wait(1).to({rotation:-78.3,x:199.2},0).wait(1).to({rotation:-77.1,x:199.1},0).wait(1).to({rotation:-76.1,x:199},0).wait(1).to({rotation:-75.3,x:198.9},0).wait(1).to({rotation:-74.5,x:198.8,y:205},0).wait(1).to({rotation:-73.8,y:205.1},0).wait(1).to({rotation:-73.3,x:198.7,y:205},0).wait(1).to({rotation:-72.9},0).wait(1).to({rotation:-72.6,y:205.1},0).wait(1).to({rotation:-72.4,x:198.6,y:205},0).wait(2));

  // 4
  this.instance_3 = new lib.Group_6();
  this.instance_3.setTransform(199.9,200.3,0.572,0.572,-10.8,0,0,234.3,232.8);

  this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:201.8,regY:231.7,rotation:-11.8,x:181.5,y:203.5},0).wait(1).to({rotation:-12.7,x:181.6,y:203.7},0).wait(1).to({rotation:-13.5,y:204},0).wait(1).to({rotation:-14.3,x:181.7,y:204.3},0).wait(1).to({rotation:-15.1,x:181.8,y:204.5},0).wait(1).to({rotation:-15.8,y:204.7},0).wait(1).to({rotation:-16.4,x:181.9,y:204.9},0).wait(1).to({rotation:-17.1,y:205.2},0).wait(1).to({rotation:-17.7,x:182,y:205.3},0).wait(1).to({rotation:-18.2,x:182.1,y:205.5},0).wait(1).to({rotation:-18.7,y:205.6},0).wait(1).to({rotation:-19.2,y:205.8},0).wait(1).to({rotation:-19.6,x:182.2,y:205.9},0).wait(1).to({rotation:-20,y:206},0).wait(1).to({rotation:-20.3,y:206.1},0).wait(1).to({rotation:-20.6,x:182.3,y:206.2},0).wait(1).to({rotation:-20.9,y:206.3},0).wait(1).to({rotation:-21.1,y:206.4},0).wait(1).to({rotation:-21.3},0).wait(1).to({rotation:-21.5,y:206.5},0).wait(1).to({rotation:-21.6,x:182.4},0).wait(3));

  // 5
  this.instance_4 = new lib.Group_8();
  this.instance_4.setTransform(199.9,200.1,0.572,0.572,122.3,0,0,222.2,222.9);

  this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:178.7,regY:222.2,rotation:124.5,x:214.3,y:179.8},0).wait(1).to({rotation:126.7,x:215,y:180.3},0).wait(1).to({rotation:128.7,x:215.7,y:180.9},0).wait(1).to({rotation:130.7,x:216.3,y:181.5},0).wait(1).to({rotation:132.5,x:217,y:182},0).wait(1).to({rotation:134.2,x:217.5,y:182.5},0).wait(1).to({rotation:135.9,x:218,y:183},0).wait(1).to({rotation:137.4,x:218.4,y:183.5},0).wait(1).to({rotation:138.9,x:218.8,y:184},0).wait(1).to({rotation:140.2,x:219.2,y:184.4},0).wait(1).to({rotation:141.5,x:219.5,y:184.9},0).wait(1).to({rotation:142.6,x:219.9,y:185.3},0).wait(1).to({rotation:143.7,x:220.1,y:185.6},0).wait(1).to({rotation:144.6,x:220.4,y:186},0).wait(1).to({rotation:145.5,x:220.6,y:186.3},0).wait(1).to({rotation:146.2,x:220.7,y:186.6},0).wait(1).to({rotation:146.9,x:220.9,y:186.8},0).wait(1).to({rotation:147.4,x:221,y:187},0).wait(1).to({rotation:147.9,x:221.1,y:187.1},0).wait(1).to({rotation:148.2,x:221.2,y:187.3},0).wait(1).to({rotation:148.5,x:221.3,y:187.4},0).wait(1).to({rotation:148.6,y:187.5},0).wait(1).to({rotation:148.7},0).wait(1));

  // 6
  this.instance_5 = new lib.Group_5();
  this.instance_5.setTransform(200,200,0.572,0.572,-63.9,0,0,281.9,279.8);

  this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:190.4,regY:278.7,rotation:-65.8,x:178,y:247.5},0).wait(1).to({rotation:-67.8,x:179.6,y:248.2},0).wait(1).to({rotation:-69.6,x:181.2,y:248.9},0).wait(1).to({rotation:-71.4,x:182.7,y:249.4},0).wait(1).to({rotation:-73,x:184.1,y:249.9},0).wait(1).to({rotation:-74.6,x:185.5,y:250.3},0).wait(1).to({rotation:-76.1,x:186.8,y:250.7},0).wait(1).to({rotation:-77.5,x:188,y:251},0).wait(1).to({rotation:-78.8,x:189.2,y:251.3},0).wait(1).to({rotation:-80,x:190.3,y:251.4},0).wait(1).to({rotation:-81.2,x:191.3,y:251.6},0).wait(1).to({rotation:-82.2,x:192.3,y:251.8},0).wait(1).to({rotation:-83.1,x:193.1,y:251.9},0).wait(1).to({rotation:-84,x:193.9,y:252},0).wait(1).to({rotation:-84.8,x:194.6,y:252.1},0).wait(1).to({rotation:-85.4,x:195.2},0).wait(1).to({rotation:-86,x:195.7,y:252.2},0).wait(1).to({rotation:-86.5,x:196.2},0).wait(1).to({rotation:-86.9,x:196.6},0).wait(1).to({rotation:-87.2,x:196.9,y:252.3},0).wait(1).to({rotation:-87.5,x:197},0).wait(1).to({rotation:-87.6,x:197.2},0).wait(1).to({rotation:-87.7},0).wait(1));

  // 7
  this.instance_6 = new lib.Group_7();
  this.instance_6.setTransform(200,199.8,0.572,0.572,-176.9,0,0,190.8,188.4);

  this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:172.2,regY:192.2,rotation:-160.7,x:210.8,y:201.2},0).wait(1).to({rotation:-145.4,x:210,y:204},0).wait(1).to({rotation:-130.8,x:208.6,y:206.4},0).wait(1).to({rotation:-116.8,x:206.7,y:208.3},0).wait(1).to({rotation:-103.6,x:204.6,y:209.6},0).wait(1).to({rotation:-91.1,x:202.4,y:210.3},0).wait(1).to({rotation:-79.4,x:200.2,y:210.6},0).wait(1).to({rotation:-68.3,x:198.1,y:210.4},0).wait(1).to({rotation:-57.9,x:196.2,y:209.9},0).wait(1).to({rotation:-48.3,x:194.6,y:209.1},0).wait(1).to({rotation:-39.4,x:193.2,y:208.2},0).wait(1).to({rotation:-31.2,x:192.1,y:207.1},0).wait(1).to({rotation:-23.7,x:191.2,y:206},0).wait(1).to({rotation:-16.9,x:190.5,y:204.9},0).wait(1).to({rotation:-10.8,x:190,y:203.9},0).wait(1).to({rotation:-5.5,x:189.6,y:203},0).wait(1).to({rotation:-0.8,x:189.4,y:202.1},0).wait(1).to({rotation:3.1,y:201.4},0).wait(1).to({rotation:6.3,x:189.2,y:200.7},0).wait(1).to({rotation:8.8,y:200.3},0).wait(1).to({rotation:10.6,y:200},0).wait(1).to({rotation:11.6,y:199.7},0).wait(1).to({rotation:12},0).wait(1));

  // 8
  this.instance_7 = new lib.Group();
  this.instance_7.setTransform(200.2,200,0.572,0.572,0,0,0,235,235.6);

  this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:227.5,regY:235,rotation:14.4,x:196.1,y:198.6},0).wait(1).to({rotation:28.1,x:196.6,y:197.7},0).wait(1).to({rotation:41.2,x:197.2,y:196.9},0).wait(1).to({rotation:53.6,x:197.9,y:196.3},0).wait(1).to({rotation:65.4,x:198.8,y:195.9},0).wait(1).to({rotation:76.6,x:199.5,y:195.7},0).wait(1).to({rotation:87.1,x:200.3},0).wait(1).to({rotation:97,x:201.1,y:195.8},0).wait(1).to({rotation:106.3,x:201.7,y:195.9},0).wait(1).to({rotation:114.9,x:202.3,y:196.3},0).wait(1).to({rotation:122.8,x:202.8,y:196.6},0).wait(1).to({rotation:130.2,x:203.2,y:196.9},0).wait(1).to({rotation:136.9,x:203.5,y:197.3},0).wait(1).to({rotation:142.9,x:203.8,y:197.7},0).wait(1).to({rotation:148.4,x:204,y:198},0).wait(1).to({rotation:153.2,x:204.1,y:198.4},0).wait(1).to({rotation:157.3,x:204.2,y:198.6},0).wait(1).to({rotation:160.8,x:204.3,y:198.9},0).wait(1).to({rotation:163.7,y:199.1},0).wait(1).to({rotation:165.9,x:204.4,y:199.3},0).wait(1).to({rotation:167.5,y:199.4},0).wait(1).to({rotation:168.5},0).wait(1).to({rotation:168.8,y:199.5},0).wait(1));

  // 9
  this.instance_8 = new lib.Group_4();
  this.instance_8.setTransform(200.2,199.9,0.572,0.572,0,0,0,254,251.8);

  this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:228.4,regY:252.6,rotation:7.2,x:185.5,y:198.5},0).wait(1).to({rotation:14.1,x:185.8,y:196.8},0).wait(1).to({rotation:20.7,x:186.3,y:195.1},0).wait(1).to({rotation:27,x:186.9,y:193.7},0).wait(1).to({rotation:32.9,x:187.6,y:192.4},0).wait(1).to({rotation:38.6,x:188.4,y:191.2},0).wait(1).to({rotation:43.9,x:189.2,y:190.1},0).wait(1).to({rotation:48.8,x:190.2,y:189.2},0).wait(1).to({rotation:53.5,x:191.1,y:188.5},0).wait(1).to({rotation:57.8,x:192,y:187.7},0).wait(1).to({rotation:61.9,x:192.8,y:187.2},0).wait(1).to({rotation:65.5,x:193.7,y:186.8},0).wait(1).to({rotation:68.9,x:194.4,y:186.4},0).wait(1).to({rotation:72,x:195.2,y:186.1},0).wait(1).to({rotation:74.7,x:195.9,y:185.9},0).wait(1).to({rotation:77.1,x:196.4,y:185.8},0).wait(1).to({rotation:79.2,x:196.9,y:185.6},0).wait(1).to({rotation:81,x:197.4,y:185.5},0).wait(1).to({rotation:82.4,x:197.8},0).wait(1).to({rotation:83.5,x:198,y:185.4},0).wait(1).to({rotation:84.3,x:198.2},0).wait(1).to({rotation:84.8,x:198.4},0).wait(1).to({rotation:85},0).wait(1));

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
