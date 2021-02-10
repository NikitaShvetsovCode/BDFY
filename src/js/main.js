if(document.getElementById('bannerSlider')){
    var slider = tns({
        // mode:"gallery",
        container: '#bannerSlider',
        items: 1,
        startIndex: 0,
        slideBy: 'page',
        autoplay: false,
        prevButton: '.banner-btn_prev',
        nextButton: '.banner-btn_next',
        nav: false,
        loop: true,
        swipeAngle: true,
      });
}