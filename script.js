let tl = gsap.timeline()

tl.from(".navbar",{
    y:-50,
    duration:1,
    delay:1
})
tl.from(".display h1",{
    y:80,
    duration:1,
    opacity:0,
    stagger:0.1
})
tl.from(".display img",{
    opacity:0,
    scale:0,
    duration:0.7,
    stagger:0.2
})
tl.to(".scroll",{
    y:-5,
    repeat:-1,
    yoyo:true,
    duration:0.7,
    opacity:1
})
tl.to(".icons i",{
    opacity:1,

    duration:0.5,

})