function timelineone(){
    var t1 = gsap.timeline({
        scrollTrigger:{
            trigger:"#home",
            start:"top top",
            scrub:1,
            pin:true,
            end:"bottom -250%"
        }
    })
    
    t1
       .to("#circle #btm img",{
        scale:1,
        rotate:"-180deg",
        duration:1,
        stagger:.1,
        ease:"power1"
    },"hello")
       .to("#circle #top img",{
        scale:1,
        duration:1,
        stagger:.1,
        ease:"power1"
    },"hello")
       .to("#cimage img",{
        scale:"0",
        duration:1,
        stagger:1,
        ease:"power1"
    },"hello")
       .to("#centering h5",{
        opacity:0,
        stagger:1,
        ease:"power1"
    },"hello")
       .to("#circle",{
        scale:.6,
        ease:"power1"
    },"hello")
       .to("#overlay>h1#gallary",{
        bottom:"-50%",
        ease:"power1"
    },"hello")
       .to("#gola",{
        top:"50%",
        scale:2,
        ease:"power1"
    },"hello")
    
    
       .to("#gola",{
        opacity:0,
        ease:"power1"
    },"hello2")
       .to("#smcircle",{
        scale:0,
        ease:"power1"
    },"hello2")
       .to("#circle",{
        scale:0,
        ease:"power1"
    },"hello2")
       .to("#overlay>h1#pf",{
        rotate:0,
        bottom:"2%",
        ease:"power1"
    },"hello2")
       .to("#pink_right",{
        top:"2.5%",
        duration:4,
        ease: "power2.inOut"
    },"hello2")
    .to("#pink_right",{
        top:"-100%",
        duration:2,
        ease: "power2.inOut"
    })
}

function timelinetwo(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:"#second",
            scrub:1,
            start:"top top",
            /*markers:true,*/
            end:"buttom -150%",
            pin:true
        }
    })
    tl2
    .to(".circle",{
            top:"50%",
            stagger:.1,
            ease:"power1"
        })
        .to(".circle",{
            left:"50%",
            stagger:.1,
            ease:"power1"
        })
        .to(".pi",{
            scale:10,
            ease:"power1"
        })
        .to(".pi",{
            background:"linear-gradient(to right,#D5A7B4,#B4DAD5)",
            ease:"power1"
        }) 
        .to("#stop h1",{
            left:"-150%",
            duration:8,
            ease:"power1"
        },"a")
        .to("#sbtm #two",{
            opacity:0,
            duration:3,
            ease:"power1"
        },"a")
        .to("#sbtm #one",{
            opacity:1,
            delay:1,
            duration:3,
            ease:"power1"
        },"a")
        
    

}


timelineone();
timelinetwo();