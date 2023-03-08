var container, rays;

container = document.getElementById("container");
rays = document.getElementById("rays");

for (var i = 1; i < 300; i++) {
  _r = this['r' + i];
  _r = document.getElementById("r0").cloneNode(true);
  _r.id = "r" + i;
  start(_r, i)
  rays.appendChild(_r);
}

function start(_r, i) {
  var _h = (window.innerWidth > window.innerHeight) ? window.innerWidth : window.innerHeight;
  TweenMax.set(_r, {
    rotation: 360 * Math.random()
  });
  TweenMax.fromTo(_r.children[0], 1, {
    alpha: .15,
    scaleY: 1,
    height: 0,
    y: _h / 5 * Math.random()
  }, {
    alpha: 1,
    y: _h / 2 + _h / 2 * Math.random(),
    delay: i / 150,
    height: _h,
    onComplete: end,
    onCompleteParams: [_r],
    ease: Power4.easeIn
  });
}

function end(_r) { //console.log(rc)
  TweenMax.fromTo(_r.children[0], .3, {
    transformOrigin: "0% 100%"
  }, {
    scaleY: 0,
    ease: Linear.easeNone,
    onComplete: start,
    onCompleteParams: [_r]
  });
}