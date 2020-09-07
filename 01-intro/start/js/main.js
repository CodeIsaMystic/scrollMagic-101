$(document).ready(function(){

  //  Init scrollMagic
  const controller = new ScrollMagic.Controller();

  //  Build a scene
  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#project01 img',
    duration: '90%',
    triggerHook: 0.9
  })
  .setClassToggle('#project01', 'fade-in') // add class to the project
  .addIndicators({
    name: 'fade scene',
    colorTrigger: 'black',
    colorStart: '#75C695',
    colorEnd: 'pink'
  }) // require a plugin file
  .addTo(controller); 

  //  Build a second scene
  var ourScene2 = new ScrollMagic.Scene({
    triggerElement: '#project02 img',
    duration: '90%',
    triggerHook: 0.9
  })
  .setClassToggle('#project02', 'fade-in') // add class to the project
  .addIndicators({
    name: 'fade scene 2',
    colorTrigger: 'black',
    colorStart: '#75C695',
    colorEnd: 'pink'
  }) // need to add the plugin file
  .addTo(controller); 

  //  Build a third scene
  var ourScene3 = new ScrollMagic.Scene({
    triggerElement: '#project03 img',
    triggerHook: 0.9
  })
  .setClassToggle('#project03', 'fade-in') // add class to the project
  .addIndicators({
    name: 'fade scene 3',
    colorTrigger: 'black',
    colorStart: '#75C695'
  }) // need to add the plugin file
  .addTo(controller); 

});


















