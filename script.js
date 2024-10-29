function init(){
    gsap.registerPlugin(ScrollTrigger);



const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".wrapper"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy(".wrapper", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
 
  pinType: document.querySelector(".wrapper").style.transform ? "transform" : "fixed"
});




ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


ScrollTrigger.refresh();

}
init()


// PAGE 1 KA ANIMATION

function cursor(){
    window.addEventListener("mousemove",function(dets){
        gsap.to(".cursor",{
            left:dets.x-10,
            top:dets.y-10,
        })
    })
}
cursor()

function page1(){
    

gsap.from(".home .left h1",{
    x:-100,
    opacity:0,
    ease:"power 3",
    delay:.2,
    duration:1,
    
},"chacha")

gsap.from(".home .left p",{
    x:-100,
    opacity:0,
    ease:"power3",
    delay:1.1,
    duration:1,
})

gsap.from(".home .icon i",{
    y:50,
    opacity:0,
    delay:1.5,
    duration:1,
    ease:"power3",
})

gsap.from(".right img",{
    x:100,
    opacity:0,
    delay:.2,
    ease:"power3",
    duration:1,
},"chacha")


gsap.from(".home .c .circle",{
    y:200,
    opacity:0,
    duration:1,
    ease:"power3",
})



var tl = gsap.timeline({
    
    scrollTrigger:{
        trigger:".home .c .circle",
        scroller:".wrapper",
        // markers:true,
        start:"top 80%",
        end:"top 60%",
        scrub:3,
    }
})

tl.to(".circle",{
    y:"-20%",
    scrub:1,
})

var tl2 = gsap.timeline({
    
    scrollTrigger:{
        trigger:".page-2",
        scroller:".wrapper",
        // markers:true,
        start:"top 80%",
        end:"top 0%",
        scrub:3,
    }
})

tl2.to(".page-2",{
    backgroundColor:"white",
})
}
page1()



// PAGE 2 KA ANIMATION

function page2(){

    var h1 = gsap.timeline({
    
        scrollTrigger:{
            trigger:".page-2 h1",
            scroller:".wrapper",
            // markers:true,
            start:"top 100%",
            end:"top 80%",
            scrub:3,
        }
    })

    h1.from(".page-2 h1",{
        y:150,
        opacity:0,
        scrub:2,
    })
    
var tl = gsap.timeline({
    
    scrollTrigger:{
        trigger:".page-2 .l-krish",
        scroller:".wrapper",
        // markers:true,
        start:"top 70%",
        end:"top 50%",
        scrub:3,
    }
})

tl.from(".page-2 .l-krish",{
    x:-1000,
    opacity:0,
    duration:1.5,
    ease:"power3",

})

var t2 = gsap.timeline({
    
    scrollTrigger:{
        trigger:".page-2 .r-shaurya",
        scroller:".wrapper",
        // markers:true,
        start:"top 70%",
        end:"top 50%",
        scrub:3,
    }
})

t2.from(".page-2 .r-shaurya",{
    x:1000,
    opacity:0,
    duration:1.5,
    ease:"power3",

})

var t3 = gsap.timeline({
    
    scrollTrigger:{
        trigger:".page-2 .l-ansh",
        scroller:".wrapper",
        // markers:true,
        start:"top 70%",
        end:"top 50%",
        scrub:3,
    }
})

t3.from(".page-2 .l-ansh",{
    x:-1000,
    opacity:0,
    duration:1,
    ease:"power3",

})

var t2 = gsap.timeline({
    
    scrollTrigger:{
        trigger:".page-2 .r-praveen",
        scroller:".wrapper",
        // markers:true,
        start:"top 70%",
        end:"top 50%",
        scrub:3,
    }
})

t2.from(".page-2 .r-praveen",{
    x:1000,
    opacity:0,
    duration:1.5,
    ease:"power3",

})

var t3 = gsap.timeline({
    
    scrollTrigger:{
        trigger:".page-2 .l-ashu",
        scroller:".wrapper",
        // markers:true,
        start:"top 70%",
        end:"top 50%",
        scrub:3,
    }
})

t3.from(".page-2 .l-ashu",{
    x:-1000,
    opacity:0,
    duration:1,
    ease:"power3",

})

}
page2()



