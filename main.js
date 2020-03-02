// panel one text
TweenMax.set(".p1", { scaleY: 0 });
TweenMax.to(".p1", 0.5, { scaleY: 1, y: -10, delay: 1 });

// panel two text
const TLpanelTwoText = new TimelineMax();

TLpanelTwoText.set(".p2", { y: -100 })
    .to(".p2", 1.5, { y: 0, ease: Back.easeOut, delay: 4.5, })
    .to(".p2", 0.2, { scaleY: 0, y: 10, ease: Power4.easeIn, delay: 4 });

// panel three text
const TLpanelThreeText = new TimelineMax();

TLpanelThreeText.set(".p3", { y: -60 })
    .to(".p3", 0.2, { y: -27, ease: Power4.easeIn, delay: 9.95 })
    .to(".p3", 1, { x: 500, delay: 2 });

// panel four text
TweenMax.set(".p4", { opacity: 0 });
TweenMax.to(".p4", 1, { opacity: 1, delay: 14 });


// image one fade out
TweenMax.to(".panelOne", 2, { opacity: 0, delay: 3 });

// image two fade in
TweenMax.set(".imageTwo", { x: -360, y: -370, scale: 0.4, opacity: 0 });
TweenMax.to(".imageTwo", 2, { opacity: 1, delay: 3 });

// image two pan/zoom
const TLanimation = new TimelineMax();
TLanimation.to(".imageTwo", 3.5, { x: -540, delay: 5.5 })
    .to(".imageTwo", 2, { x: -450, y: -375, scale: 0.25, delay: 3 });