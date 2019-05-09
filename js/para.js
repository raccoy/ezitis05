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