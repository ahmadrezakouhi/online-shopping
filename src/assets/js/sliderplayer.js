 var slider=$(document).ready(function () {
      $("#content-slider").lightSlider({
        loop: true,
        keyPress: true,
        auto:true,
        item:2,
controls:true,
        prevHtml: '&#10094;',
        nextHtml: 'n',
        addClass:'w3-xxlarge w3-text-white'
      });

    });
