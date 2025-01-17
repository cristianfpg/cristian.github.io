(()=>{ // INIT ANONYMOUS FUNCION

const ACTIVECLASS = "active"
const $about = document.getElementById("about")

/* ---- EFFECTS --- */

/* INIT BUTTON SMOOTH SCROLL */
// https://github.com/cferdinandi/smooth-scroll
new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
  updateURL: false
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
  $hello.classList.add(ACTIVECLASS)
  
  $greetings.forEach(($e)=>{
    $e.classList.add(ACTIVECLASS)
  })
  document.addEventListener("mousemove",(e) => {
    if(window.innerWidth <= 768) return
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

const $terminal = document.getElementById("lines")

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

    let $line
    if(!getText || !getText.animated) return

    if(getText.isLink){
      $line = document.createElement("a")
      $line.href = getText.url
      $line.target = "_blank"
    }else{
      $line = document.createElement("span")
    }
    if(getText.beginLine) {
      $line.innerText = getText.beginLine
    }

    $line.classList.add("line")
    const animated = getText.animated.split("")
    this.$wrapper.appendChild($line)

    this.sto = setInterval(()=>{
      $line.innerText = $line.innerText + animated[this.turn]
      this.turn++
      if(this.turn == animated.length) this.handleNewLine(getText.clear)
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
  handleNewLine(isClear){
    clearInterval(this.sto)
    setTimeout(()=>{
      if(isClear) this.$wrapper.innerText = ""
      this.turn = 0
      this.indexLine++
      this.animateLine()
    },1)
  }
  stop(){
    clearInterval(this.sto)
  }
}

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
  const limitAbout = $about.offsetTop - (windowHeight/2)
  const isAboutActive = $about.classList.contains(ACTIVECLASS)

  if(scrollTop > limitAbout && !isAboutActive){
    // IT ONLY HAPPENS ONCE FROM HERE...
    $about.classList.add(ACTIVECLASS)
    Effect.start()
  }
})
/* END SCROLL EVENT */

/* INIT TERMINAL CLICK EVENT */
const $terminalButtons = document.querySelectorAll(".terminal-button")
const TERMINALNAME = "CP-CV:~ "
const terminalLines = {
  "Programmer": [
    {
      beginLine: TERMINALNAME,
      animated: "clear",
      clear: true
    },
    {
      beginLine: TERMINALNAME,
      animated: "programmer_skills",
    },
    " ",
    "Skills",
    " ",
    "- HTML",
    "- CSS / SASS",
    "- BEM",
    "- Javascript",
    "- React",
    "- Hubspot CMS",
    "- PHP",
    "- Illustrator / Figma",
    "- Web accessibility and performance optimization",
    "- Understanding of SEO and security best practices",
    "- Communication and collaboration skills",
    "- Familiarity with Scrum processes"
  ],
  "videogames": [
    {
      beginLine: TERMINALNAME,
      animated: "clear",
      clear: true
    },
    {
      beginLine: TERMINALNAME,
      animated: "gamer_profiles",
    },
    " ",
    {
      animated: "League of legends",
      isLink: true,
      url: "https://lan.op.gg/summoner/userName=Inferno%20Trigger"
    },
    {
      animated: "Teamfight Tactics",
      isLink: true,
      url: "https://lolchess.gg/profile/lan/infernotrigger"
    },
    {
      animated: "Overwatch",
      isLink: true,
      url: "https://www.overbuff.com/players/pc/Blackbeard-11273"
    },
    {
      animated: "CSGO",
      isLink: true,
      url: "https://csgorankings.com/profile/76561198140295691"
    }
  ],
  "metal": [
    {
      beginLine: TERMINALNAME,
      animated: "clear",
      clear: true
    },
    {
      beginLine: TERMINALNAME,
      animated: "spotify_playlists",
    },
    " ",
    {
      animated: "ᕙ(⇀‸↼‶)ᕗ <= Main playlist",
      isLink: true,
      url: "https://open.spotify.com/playlist/3aH2AWZTGslk1qkNNRBa72"
    },
    {
      animated: "(づ｡◕ _ ◕｡)づ <= Rock",
      isLink: true,
      url: "https://open.spotify.com/playlist/7yXEtoCySa2eyhZyMBPSAa"
    },
    {
      animated: "☆(◒‿◒)☆ <= Latin Music",
      isLink: true,
      url: "https://open.spotify.com/playlist/6dxjMypjN0ZKisnUymGE7h"
    },
    " ",
    {
      animated: "Spotify profile",
      isLink: true,
      url: "https://open.spotify.com/user/12174964187?si=l2TUQomxQp--Zno6xDUTTQ"
    }
  ]
}

const speedText = 30

let Effect = new TerminalEffect({
  lines: terminalLines["Programmer"], 
  speedText: speedText, 
  wrapper: $terminal
})

$terminalButtons.forEach((e)=>{
  e.addEventListener("click", (e)=>{
    if(!$about.classList.contains(ACTIVECLASS)) return
    const dataLines = e.target.innerText 
    Effect.stop()
    Effect = new TerminalEffect({
      lines: terminalLines[dataLines],
      speedText: speedText, 
      wrapper: $terminal
    })
    Effect.start()
    gtag('event', 'btntrack', {'event_category': 'terminalbtn', 'event_label': dataLines});
  })
})
/* END TERMINAL CLICK EVENT */

/* INIT SNIPPET CLICK EVENT */

const $tabs = document.querySelectorAll("#snippets .tabs .tab")
const $snippets = document.querySelectorAll("#snippets .wrapper .snippet")

$tabs.forEach((e,i)=>{
  e.addEventListener("click", (e)=>{
    const $text = document.querySelector("#snippets .description .text")
    const $url = document.querySelector("#snippets .description .url")
    const activeTab = e.target
    const $activeTab = document.querySelector(`#snippets .tabs .tab.${ACTIVECLASS}`)
    const $activeSnippet = document.querySelector(`#snippets .wrapper .snippet.${ACTIVECLASS}`)
    
    $activeTab.classList.remove(ACTIVECLASS)
    $activeSnippet.classList.remove(ACTIVECLASS)

    activeTab.classList.add(ACTIVECLASS)
    $snippets[i].classList.add(ACTIVECLASS)
    $text.innerText = activeTab.dataset.description
    $url.innerText = ""

    if(activeTab.dataset.cta && activeTab.dataset.url){
      $url.innerText = activeTab.dataset.cta
      $url.href = activeTab.dataset.url
    }
    gtag('event', 'btntrack', {'event_category': 'workbtn', 'event_label': activeTab.innerText});
  })
})

/* END SNIPPET CLICK EVENT */

})() // END ANONYMOUS FUNCION