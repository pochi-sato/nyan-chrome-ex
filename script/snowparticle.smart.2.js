function nyanSnow(volume){
  (function(doc,body,win,volume){
    var totalParticleNum = 20,
        myInnerHeight = win.innerHeight,
        myScrollTop = doc.documentElement.scrollTop || body.scrollTop,
        myScrollBottom = myScrollTop+myInnerHeight+10,
        particles = [],
        particleParent,
        particleTops = [],
        particleLefts = [],
        horizontalVelos = [],
        verticalVelos = [],
        particlePhases = [];

    body.style.overflowX = 'hidden';
    doc.addEventListener('scroll',function(){myScrollTop = doc.documentElement.scrollTop || body.scrollTop;myScrollBottom = myScrollTop+myInnerHeight+10;},false);

    if(doc.getElementById('snowparticle')){
      particleParent = doc.getElementById('snowparticle');
    } else {
      particleParent = doc.createElement('div');
      particleParent.id = 'snowparticle';
      body.appendChild(particleParent);
    }
    for(var i=0;i<totalParticleNum;i++){
      var particle,
          coefficient = Math.random()*7+3;
      if(doc.getElementById('yuki'+i)){
        particle = doc.getElementById('yuki'+i);
      } else {
        particle = doc.createElement('div');
        particle.id = 'yuki'+i;
        particleParent.appendChild(particle);
      }
      particle.setAttribute('class','snow');

      particles[i] = doc.getElementById('yuki'+i);
      particleTops[i] = Math.random()*-myInnerHeight+Math.random()*(myInnerHeight/2)+myScrollTop;
      particleLefts[i] = Math.random()*win.innerWidth;
      horizontalVelos[i] = Math.random()*25+0.1;
      verticalVelos[i] = Math.random()*4+0.7;
      particlePhases[i] = 0;

      // particle color
      //console.log(volume)
      var rgbStr = '255,255,255';
      //rgbStr = (255 - volume*8) + ',' + volume*5 + ',' + volume*8;
      switch (true) {
        case volume < 15:
          rgbStr = '179,213,255';
          break;
        case volume < 16:
          rgbStr = '128,196,255';
          break;
        case volume < 17:
          rgbStr = '92,141,255';
          break;
        case volume < 18:
          rgbStr = '127,107,255';
          break;
        case volume < 19:
          rgbStr = '176,128,255';
          break;
        case volume < 20:
          rgbStr = '209,117,255';
          break;
        case volume < 21:
          rgbStr = '247,118,254';
          break;
        case volume < 22:
          rgbStr = '254,123,147';
          break;
        case volume < 23:
          rgbStr = '254,77,83';
          break;
        case volume >= 23:
          rgbStr = '254,57,64';
          break;
      }
      particle.setAttribute('style','position:absolute;z-index:'+(9999+i)+';top:-'+particleTops[i]+'px;width:'+coefficient+'px;height:'+coefficient+'px;background:rgba(' + rgbStr + ',0.95);-webkit-box-shadow: 0 0 2px 2px rgba(' + rgbStr + ',0.3);-moz-box-shadow: 0 0 2px 2px rgba(' + rgbStr + ',0.3);box-shadow: 0 0 2px 2px rgba(' + rgbStr + ',0.3);border-radius:5px;left:'+particleLefts+'px;');
    }

    // 雪の横の動き
    setInterval(function(){
      for(var i=0;i<totalParticleNum;i++){
        if(myScrollBottom>particleTops[i]){
          if(horizontalVelos[i]>=particlePhases[i]){
            particleLefts[i] = particleLefts[i]+0.5+Math.random()*0.5*(volume/10);
          }else{
            particleLefts[i] = particleLefts[i]-0.5-Math.random()*0.5*(volume/10);
          }
          if((horizontalVelos[i]*2)<=particlePhases[i]){
            particlePhases[i] = 0;
          }
        }else{
          particleTops[i] = myScrollTop-10;
          particleLefts[i] = Math.random()*win.innerWidth;
        }
        particleTops[i] = particleTops[i]+verticalVelos[i];
        particles[i].style.top = particleTops[i]+'px';
        particles[i].style.left = particleLefts[i]+'px';
        particlePhases[i]++;
      }
    },60);
  })(document,document.body,window,volume);
}
function addGlobalScope(functions) {
  var script = document.createElement("script"),
      text = '';
  functions.forEach(function(func){
    text = text + func.toString() + '\n;\n';
  });
  script.appendChild(document.createTextNode(text));
  document.body.appendChild(script);
}

window.addEventListener("load", function(){
  addGlobalScope([nyanSnow]);
});
