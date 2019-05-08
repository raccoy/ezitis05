var McButton = $("[data=hamburger-menu]");
var McBar1 = McButton.find("b:nth-child(1)");
var McBar2 = McButton.find("b:nth-child(2)");
var McBar3 = McButton.find("b:nth-child(3)");
var overlay = document.getElementById('overlay');
var closeMenu = document.getElementById('close-menu');
var colorc = document.getElementById('open-menu');



McButton.click( function() {
  $(this).toggleClass("active");
  
  if (McButton.hasClass("active")) {
    McBar1.velocity({ top: "50%" }, {duration: 200, easing: "swing"});
    McBar3.velocity({ top: "50%" }, {duration: 200, easing: "swing"})
    			.velocity({rotateZ:"90deg"}, {duration: 800, delay: 200, easing: [500,20] });
    McButton.velocity({rotateZ:"135deg"}, {duration: 800, delay: 200, easing: [500,20] });
  } else {
    McButton.velocity("reverse");
		McBar3.velocity({rotateZ:"0deg"}, {duration: 800, easing: [500,20] })
    			.velocity({ top: "100%" }, {duration: 200, easing: "swing"});
  	McBar1.velocity("reverse", {delay: 800});
  }
});


$('.js-anchor-link').click(function(e){
  e.preventDefault();
  var target = $($(this).attr('href'));
  if(target.length){
    var scrollTo = target.offset().top;
    $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
  }
});
$('.js-anchor-link-menu').click(function(e){
  e.preventDefault();
  var target = $($(this).attr('href'));
  if(target.length){
    var scrollTo = target.offset().top;
    $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
  }

  $(McButton).toggleClass("active");
  
  if (McButton.hasClass("active")) {
    McBar1.velocity({ top: "50%" }, {duration: 200, easing: "swing"});
    McBar3.velocity({ top: "50%" }, {duration: 200, easing: "swing"})
    			.velocity({rotateZ:"90deg"}, {duration: 800, delay: 200, easing: [500,20] });
    McButton.velocity({rotateZ:"135deg"}, {duration: 800, delay: 200, easing: [500,20] });
  } else {
    McButton.velocity("reverse");
		McBar3.velocity({rotateZ:"0deg"}, {duration: 800, easing: [500,20] })
    			.velocity({ top: "100%" }, {duration: 200, easing: "swing"});
  	McBar1.velocity("reverse", {delay: 800});
  }

  if (overlay.classList.contains('show-menu')){
    overlay.classList.add('hide-menu');
    overlay.classList.remove('show-menu');
    
    colorc.classList.remove('color-sw');
    colorc.classList.add('McButtonc');
}

});
// scrolll one
$(".imgback").paroller({
  factor: 0.2,            // multiplier for scrolling speed and offset
  factorXs: 0.1,           // multiplier for scrolling speed and offset
  type: 'foreground',     // background, foreground
  direction: 'horizontal', // vertical, horizontal
  transition: 'transform all 0.2s ease-out',//transition: 'transform .5s ease-in-out' // CSS transition
});

$(".paroller").paroller({
  factor: -0.2,            // multiplier for scrolling speed and offset
  factorXs: 0.1,           // multiplier for scrolling speed and offset
  type: 'foreground',     // background, foreground
  direction: 'horizontal', // vertical, horizontal
  transition: 'transform all 0.2s ease-out',//transition: 'transform .5s ease-in-out' // CSS transition
});