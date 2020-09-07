$(document).ready(function(){

  //  Init scrollMagic
  const controller = new ScrollMagic.Controller();

  //  pin scene 01
  const pinIntroScene = new ScrollMagic.Scene({
    triggerElement: '#intro',
    triggerHook: 0,
    duration: '20%'
  })
  .setPin('#intro', {pushFollowers: false})
  .addTo(controller);

  //  pin scene 02
  const pinIntroScene2 = new ScrollMagic.Scene({
    triggerElement: '#project01',
    triggerHook: 0.2
  })
  .setPin('#intro', {pushFollowers: false})
  .addTo(controller);

  //  loop through each .project element
  $('.project').each(function() {

    // look what "this" return
    console.log(this);

    //  Build a scene
    const ourScene = new ScrollMagic.Scene({
      triggerElement: this.children[0], // changing the target element to "this" keyword and target the children(img)
      triggerHook: 0.9,
      //duration: '90%'
    })
    .setClassToggle(this, 'fade-in') // add class to the project // changing the target element to "this" keyword
    .addIndicators({
      name: 'fade scene',
      colorTrigger: 'black',
      colorStart: '#75C695',
      colorEnd: 'pink'
    }) // require a plugin file
    .addTo(controller); 
  });

});


















