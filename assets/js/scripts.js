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
  // {
  //   noChange: "CP-CV:~ ",
  //   before: "cd programmer",
  //   after: "programmer$"
  // },
  "- HTML",
  "- CSS",
  "- CSS",
  "- CSS",
  "- CSS",
  "- CSS",
  "- CSS",
  "- CSS",
  "- CSS",
  "- CSS",
  "- CSS",
  "- CSS",
  "- CSS",
  "- CSS",
  "- CSS",
  "- CSS",
  "- CSS",
  "- CSS",
  "- CSS",
  "- CSS",
  "- CSS",
  "- CSS",
  "- CSS",
]
const speedText = 100

class TerminalEffect {
  constructor(lines, speedText, $wrapper){
    this.lines = lines
    this.speedText = speedText
    this.$wrapper = $wrapper
    this.turn = 0
    this.indexLine = 0
  }
  start(){
    const actualLine = this.lines[this.indexLine]
    if(actualLine){
      actualLine.split("")
      const $span = document.createElement("span")
      this.sto = setInterval(()=>{
        const str = document.createTextNode(actualLine[this.turn])
        $span.appendChild(str)
        this.$wrapper.appendChild($span)
        
        this.turn++
        if(this.turn == actualLine.length){
          this.newLine()
        }

      },this.speedText)
    }else{
      this.stop()
    }
  }
  newLine(){
    clearInterval(this.sto)
    this.turn = 0
    this.indexLine++
    this.start()
  }
  stop(){
    clearInterval(this.sto)
    this.turn = 0
  }
}
const AnyLine = new TerminalEffect(programmerLines, speedText, $terminal)

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
})
/* END SCROLL EVENT */
