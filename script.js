function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

init()

gsap.from(".page1 h1,.page1 h2", {
    y: 10,
    rotate: 10,
    opacity: 0,
    delay: 0.3,
    duration: 0.7
})
gsap.from(".page1 .video", {
    y:20,
    opacity:0,
    delay:0.3,
    duration:0.7
})
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        //markers:true,
        start: "top 270",
        end: "top 0",
        scrub: 3
    }
})
tl.to(".page1 h1", {
    x: -100,
}, "anim")
tl.to(".page1 h2", {
    x: 200
}, "anim")
tl.to(".page1 .video ", {
    width:"100%",
    height:"1000px"
}, "anim")


var t = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        //markers:true,
        start: "top -900",
        end: "top -1200",
        scrub: 3
    }
})
t.to(".page1", {
    opacity:0,
})

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        //markers:true,
        start: "top -1150",
        end: "top -1200",
        scrub: 3
    }
})
tl2.to(".main", {
    backgroundColor: "#FF3D00",
})

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top -2800",
        end: "top -3000",
        scrub: 3
    }
})

tl3.to(".main",{
    backgroundColor:"#111"
})


var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att = elem.getAttribute("data-image")
        crsr.style.width = "470px"
        crsr.style.height = "370px"
        crsr.style.borderRadius = "0"
        crsr.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor = "transparent"
        crsr.style.width = "20px"
        crsr.style.height = "20px"
        crsr.style.borderRadius = "50%"
        crsr.style.backgroundImage = `none`
    })
})


var h2 = document.querySelector("#nav h4:nth-child(2)");
var white1 = document.querySelector("#white1");
    h2.addEventListener("mouseenter",function(){
        white1.style.display = "block"   
        white1.style.opacity = "1"
    });
    h2.addEventListener("mouseleave",function(){
        white1.style.display = "none"   
        white1.style.opacity = "0"
    });


var h3 = document.querySelector("#nav h4:nth-child(3)");
var white2 = document.querySelector("#white2");
    h3.addEventListener("mouseenter",function(){
        white2.style.display = "block"   
        white2.style.opacity = "1"
    });
    h3.addEventListener("mouseleave",function(){
        white2.style.display = "none"   
        white2.style.opacity = "0"
    });

var h4 = document.querySelector("#nav h4:nth-child(4)");
var white3 = document.querySelector("#white3");
    h4.addEventListener("mouseenter",function(){
        white3.style.display = "block"   
        white3.style.opacity = "1"
    });
    h4.addEventListener("mouseleave",function(){
        white3.style.display = "none"   
        white3.style.opacity = "0"
    });


$(document).ready(function () {
    $("#btn1")
      .on("mouseenter", function (e) {
        var parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
        $(this).find("span").css({
          top: relY,
          left: relX,
        });
      })
      .on("mouseout", function (e) {
        var parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
        $(this).find("span").css({
          top: relY,
          left: relX,
        });
      });
  });

  $(document).ready(function () {
    $("#btn2")
      .on("mouseenter", function (e) {
        var parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
        $(this).find("span").css({
          top: relY,
          left: relX,
        });
      })
      .on("mouseout", function (e) {
        var parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
        $(this).find("span").css({
          top: relY,
          left: relX,
        });
      });
  });


  document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".item");
    items.forEach((item) => {
        item.addEventListener("mouseenter", shuffleAnimation);
    });
});

 function getRandomCharacter(){
    const chars=
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return chars [Math.floor(Math.random()*chars.length)];
 }

function shuffleAnimation(event){
    const target =event.currentTarget;
    if(target.dataset.animating){
        return;
    }
    target.dataset.animating=true;
    const words=target.querySelectorAll(".word");
    const originalWords= Array.from(words).map((word)=>word.textContent);

    let shuffles=0;
    const maxShuffles=10;
    const intervalDuration=500/maxShuffles;

    let animationInterval=setInterval(()=>{
        if(shuffles>= maxShuffles){
            clearInterval(animationInterval);
            words.forEach((word,index)=>{
                word.textContent=originalWords[index];
            });

            delete target.dataset.animating;
        }
        else{
            words.forEach((word)=>{
                const length = word.textContent.length;
                let shuffledText="";
                for(let i=0;i<length;i++){
                    shuffledText+=getRandomCharacter();
                }
                word.textContent=shuffledText;
            });
            shuffles++;
        }
    },intervalDuration);
}