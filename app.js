const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
  });
  
  Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: .4,
  });
  
  Shery.makeMagnet("#nav a" , {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  
  gsap.from(".nlink", {
    stagger: .2,
    y:20,
    duration: 1.3, 
    ease: Power3,
    opacity: 0
  })
  Shery.textAnimate("#headings h1" , {
    style: 2,
    y: 10,
    delay: .2,
    duration: 1.7,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });
  
  
  gsap.from(".anime2 ", {
    y:50,
    stagger:.3,
    opacity:0,
    ease:Expo,
    duration:1
  });
  
  Shery.imageEffect("#imagetext img",{
    style:3 ,
    config: {"uFrequencyX":{"value":4.58,"range":[0,100]},"uFrequencyY":{"value":2.29,"range":[0,100]},"uFrequencyZ":{"value":39.69,"range":[0,100]},"geoVertex":{"range":[1,64],"value":29.85},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.8196735535881863},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.24,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    // debug:true,
  
  });
  Shery.imageEffect("#susimagewrapper img", {
    style:4,
    config: {"uColor":{"value":true},"uSpeed":{"value":0.46,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":2.48,"range":[0,5]},"uFrequency":{"value":6.34,"range":[0,10]},"geoVertex":{"range":[1,64],"value":9.66},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.31,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    // debug:true,
  });
  Shery.imageEffect("#picimg img",{
    style:4 ,
    config: {"uColor":{"value":true},"uSpeed":{"value":1.69,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":0.92,"range":[0,5]},"uFrequency":{"value":2.75,"range":[0,10]},"geoVertex":{"range":[1,64],"value":20.24},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.625004197188589},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.58,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}} ,
    // debug:true,
  
  });
  gsap.from("#imagetext img",{
    z: "10",
    duration:2,
    opacity:0,
    ease:Expo.easeInOut
  })
  
  Shery.imageEffect("#bimg",{
    style:5,
    gooey:true,
   config: {"a":{"value":3.89,"range":[0,30]},"b":{"value":-0.94,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.135547851965241},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":2.71,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.24,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":35}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.08,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  })
  
  document.querySelector("#ftext button")
  .addEventListener('mouseover', function(){
    gsap.to("#future video", {
      opacity:1,
      duration:1.5,
      ease: Power4
    })
  })
  
  document.querySelector("#ftext button")
  .addEventListener('mouseleave', function(){
    gsap.to("#future video", {
      opacity:0,
      duration:1.5,
      ease: Power4
    })
  })
  