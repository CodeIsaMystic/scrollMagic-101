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
  }) // need to add the plugin file
  .addTo(controller); 

});


















