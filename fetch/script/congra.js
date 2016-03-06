var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
var link2 = link.cloneNode();
link.href = "https://s3-ap-northeast-1.amazonaws.com/pochi-sozai/nyan-bunch/style/congra.css";
link2.href = "https://s3-ap-northeast-1.amazonaws.com/pochi-sozai/nyan-bunch/style/congraFont.css";
document.body.appendChild(link);
document.body.appendChild(link2);

document.body.style.width = window.innerWidth + "px !important";
document.body.style.height = window.innerHeight + "px !important";
document.body.style.background = 'url("https://s3-ap-northeast-1.amazonaws.com/pochi-sozai/nyan-bunch/img/bg.png") 0 0 no-repeat';
document.body.style.backgroundSize = "100% auto";

// *** 下部のデコレーションデザイン
var bottomDeco = document.createElement("div");
bottomDeco.classList.add('content');
var bottomChildDeco = document.createElement("div");
bottomChildDeco.classList.add('box-with-text');
var bottomText = document.createElement("div");
bottomText.classList.add('text');
bottomText.style.fontSize = "250px";
bottomText.style.background = "none";

bottomText.innerHTML = "CONGRA!";
bottomChildDeco.appendChild(bottomText);
bottomDeco.appendChild(bottomChildDeco);
document.body.appendChild(bottomDeco);

function bottomDecoStyle(){
  var videoWrapper = document.querySelector('div.video-frame-wrapper');
  if(videoWrapper){
    setTimeout(function(){
      bottomDeco.style.paddingTop = "500px";
    }, 500);
  } else {
    setTimeout(bottomDecoStyle, 300);
  }
}
bottomDecoStyle();

// *** 下部のデコレーションデザイン ここまで

(function() {
  var COLORS, Confetti, NUM_CONFETTI, PI_2, canvas, confetti, context, drawCircle, i, range, resizeWindow, xpos;

  NUM_CONFETTI = 200;

  COLORS = [[85, 71, 106], [174, 61, 99], [219, 56, 83], [244, 92, 68], [248, 182, 70]];

  PI_2 = 2 * Math.PI;

  // canvas = document.getElementById("canvas");
  canvas = document.createElement("canvas");
  canvas.id = "congra-canvas";
  function fubukiStyle(){
    var videoWrapper = document.querySelector('video-view[client="client"]');
    if(videoWrapper){
      bottomDeco.style.paddingTop = videoWrapper.style.height;
      videoWrapper.appendChild(canvas);
    } else {
      setTimeout(fubukiStyle, 300);
    }
  }
  fubukiStyle();

  //document.body.appendChild(canvas);
  //setTimeout(function(){
  //  document.body.appendChild(canvas);
  //},10000);

  context = canvas.getContext("2d");

  window.w = 0;

  window.h = 0;

  resizeWindow = function() {
    window.w = canvas.width = window.innerWidth;
    return window.h = canvas.height = window.innerHeight;
  };
  resizeWindow();

  window.addEventListener('resize', resizeWindow, false);

  window.onload = function() {
    return setTimeout(resizeWindow, 0);
  };

  range = function(a, b) {
    return (b - a) * Math.random() + a;
  };

  drawCircle = function(x, y, r, style) {
    context.beginPath();
    context.arc(x, y, r, 0, PI_2, false);
    context.fillStyle = style;
    return context.fill();
  };

  xpos = 0.5;

  document.onmousemove = function(e) {
    return xpos = e.pageX / w;
  };

  window.requestAnimationFrame = (function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
        return window.setTimeout(callback, 1000 / 60);
      };
  })();

  Confetti = (function() {
    function Confetti() {
      this.style = COLORS[~~range(0, 5)];
      this.rgb = "rgba(" + this.style[0] + "," + this.style[1] + "," + this.style[2];
      this.r = ~~range(10, 6);
      this.r2 = 2 * this.r;
      this.replace();
    }

    Confetti.prototype.replace = function() {
      this.opacity = 0;
      this.dop = 0.09 * range(1, 4);
      this.x = range(-this.r2, w - this.r2);
      this.y = range(-20, h - this.r2);
      this.xmax = w - this.r;
      this.ymax = h - this.r;
      this.vx = range(0, 2) + 8 * xpos - 5;
      return this.vy = 0.7 * this.r + range(-1, 1);
    };

    Confetti.prototype.draw = function() {
      var ref;
      this.x += this.vx;
      this.y += this.vy;
      this.opacity += this.dop;
      if (this.opacity > 1) {
        this.opacity = 1;
        this.dop *= -1;
      }
      if (this.opacity < 0 || this.y > this.ymax) {
        this.replace();
      }
      if (!((0 < (ref = this.x) && ref < this.xmax))) {
        this.x = (this.x + this.xmax) % this.xmax;
      }
      return drawCircle(~~this.x, ~~this.y, this.r, this.rgb + "," + this.opacity + ")");
    };

    return Confetti;

  })();

  confetti = (function() {
    var j, ref, results;
    results = [];
    for (i = j = 1, ref = NUM_CONFETTI; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
      results.push(new Confetti);
    }
    return results;
  })();

  window.step = function() {
    var c, j, len, results;
    requestAnimationFrame(step);
    context.clearRect(0, 0, w, h);
    results = [];
    for (j = 0, len = confetti.length; j < len; j++) {
      c = confetti[j];
      results.push(c.draw());
    }
    return results;
  };

  step();

}).call(this);
