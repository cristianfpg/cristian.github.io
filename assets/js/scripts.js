/* ---- EFFECTS --- */

/* INIT BUTTON SMOOTH SCROLL */
// https://github.com/cferdinandi/smooth-scroll
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1500,
	speedAsDuration: true
})
/* END BUTTON SMOOTH SCROLL */

/* INIT HELLO DISTORTION */
// https://blotter.js.org/
setTimeout(()=>{
  const text = new Blotter.Text("HELLO.", {
    family : "monument_extendedultrabold",
    size : 200,
    fill : "#000",
    leading : 0.9,
    paddingTop: 20
  }) 
  const material = new Blotter.ChannelSplitMaterial()
  const blotter = new Blotter(material, { 
    texts : text
  })
  const scope = blotter.forText(text)
  
  const findAngle = (x,y) => {
    let theta = Math.atan2(y, x) 
    theta *= -180 / Math.PI
    return theta
  }
  
  const pythagorean = (sideA, sideB) =>{
    return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2))
  }
  
  const $hello = document.getElementById("hello")
  const $greetings = document.querySelectorAll(".greetings")
  
  scope.appendTo($hello)
  $hello.classList.add("active")
  
  $greetings.forEach(($e)=>{
    $e.classList.add("active")
  })
  document.addEventListener("mousemove",(e) => {
    const halfSize = {
      w: window.innerWidth/2,
      h: window.innerHeight/2
    }
    const posX = e.clientX - halfSize.w
    const posY = halfSize.h - e.clientY
  
    material.uniforms.uRotation.value = findAngle(posX, posY)
    material.uniforms.uOffset.value = pythagorean(posX, posY)*0.00007
  })
},500)
/* END HELLO DISTORTION */

/* INIT TERMINAL EFFECT */
// http://vanilla-js.com/
const $terminal = document.getElementById("terminal")
const programmerLines = [
  {
    beginLine: "CP-CV:~ ",
    animated: "node programmer",
  },
  "- CSS: 9/10",
  "- Javascript: 8/10",
  "- React: 7.5/10",
  "- PHP: 7/10",
  "- Python: 6/10",
]

class TerminalEffect {
  constructor(params){
    this.lines = params.lines
    this.speedText = params.speedText
    this.$wrapper = params.wrapper
    this.turn = 0
    this.indexLine = 0
  }
  start(){
    this.animateLine()
  }
  animateLine(){
    const getText = this.getLine()
    if(!getText.animated) return
    const animated = getText.animated.split("")
    const $span = document.createElement("span")

    if(getText.beginLine) {
      const beginLine = document.createTextNode(getText.beginLine)
      $span.appendChild(beginLine)
    }

    this.sto = setInterval(()=>{
      const letter = document.createTextNode(animated[this.turn])
      $span.appendChild(letter)
      this.$wrapper.appendChild($span)
      
      this.turn++
      if(this.turn == animated.length){
        this.handleNewLine()
      }
    },this.speedText)
  }
  getLine(){
    const actualLine = this.lines[this.indexLine]
    if(typeof actualLine === "undefined"){
      return false
    }else if(typeof actualLine === "string" || typeof actualLine.animated === "string"){
      return actualLine.animated ? actualLine : { animated: actualLine }
    }
  }
  handleNewLine(){
    clearInterval(this.sto)
    this.turn = 0
    this.indexLine++
    this.animateLine()
  }
  stop(){
    clearInterval(this.sto)
    this.turn = 0
  }
}
const AnyLine = new TerminalEffect({
  lines: programmerLines, 
  speedText: 120, 
  wrapper: $terminal
})

/* END TERMINAL EFFECT */

/* ---- EVENTS --- */
/* INIT SCROLL EVENT */
document.addEventListener("scroll",(e) => {
  /* INIT NAVBAR TRANSITION */
  const $bar = document.getElementById("bar")
  const $scrollbar = document.getElementById("scrollbar")
  
  const scrollTop = window.pageYOffset
  const windowHeight = window.innerHeight
  const bodyHeight = document.body.offsetHeight - windowHeight
  const spacebar = $scrollbar.offsetHeight - $bar.offsetHeight

  const scrollPercent = (scrollTop*100) / bodyHeight
  const barPercent = (spacebar*scrollPercent) / 100

  $bar.style.top = barPercent+"px"
  /* END NAVBAR TRANSITION */

  /* INIT TRIGGER TERMINAL EFFECT */
  const $about = document.getElementById("about")
  const limitAbout = $about.offsetTop - (windowHeight/2)
  const ACTIVECLASS = "active"
  const isAboutActive = $about.classList.contains(ACTIVECLASS)

  if(scrollTop > limitAbout && !isAboutActive){
    $about.classList.add(ACTIVECLASS)
    AnyLine.start()
  }
})
/* END SCROLL EVENT */
