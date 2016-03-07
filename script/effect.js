// function stringifyDefineObject(name, obj){
// 	return 'var ' + name + ' = ' + JSON.stringify(obj);
// }
function getSceneName(){
  var sceneQuery = document.location.search.substr(1).split('scene=')[1];
  return sceneQuery ? sceneQuery.split('&')[0] : 0;
}

function nyanpiCallBack(volumeInfo){
  var volumeEffect = {
        sounds: {
          nya:function(){
            document.body.appendChild(new Audio('https://s3-ap-northeast-1.amazonaws.com/pochi-sozai/nyan-bunch/audio/cat.mp3')).play();
          },
          dearin:function() {
            document.body.appendChild(new Audio('https://s3-ap-northeast-1.amazonaws.com/pochi-sozai/nyan-bunch/audio/dearin.wav')).play();
          },
          mario:function() {
            document.body.appendChild(new Audio('https://s3-ap-northeast-1.amazonaws.com/pochi-sozai/nyan-bunch/audio/mario.wav')).play();
          },
          he:function() {
            document.body.appendChild(new Audio('https://s3-ap-northeast-1.amazonaws.com/pochi-sozai/nyan-bunch/audio/he.mp3')).play();
          },
          hokuto_atatata:function() {
            document.body.appendChild(new Audio('https://s3-ap-northeast-1.amazonaws.com/pochi-sozai/nyan-bunch/audio/hokuto_atatata.wav')).play();
          },
          hokuto_shindeiru:function() {
            document.body.appendChild(new Audio('https://s3-ap-northeast-1.amazonaws.com/pochi-sozai/nyan-bunch/audio/hokuto_shindeiru.wav')).play();
          }
        },
        visuals: {
          snow:function(volume){
            nyanSnow(volume);
          },
          egirls:function() {
          },
          fubuki:function(volume){
            window.NYAN = {
              numConfetti : volume*10,
              colors : [[85, 71, 106], [174, 61, 99], [219, 56, 83], [244, 92, 68], [248, 182, 70]],
              pi2 : 2 * Math.PI
            };
            //window.Confetti.draw();
            //window.step();
          }
        }
      },
      triggerEffect = {
        sounds: {
          samba: function(){
            //document.body.appendChild(new Audio('https://s3-ap-northeast-1.amazonaws.com/pochi-sozai/nyan-bunch/audio/hokuto_atatata.wav')).play();
            document.body.appendChild(new Audio('https://s3-ap-northeast-1.amazonaws.com/pochi-sozai/nyan-bunch/audio/ueei.mp3')).play();
          },
          fox: function(){},
          abarenbo: function(){},
          darthvader: function(){}
        },
        visuals: {
          samba:function(){
            var ueei = document.createElement('img');
            ueei.classList.add("trigger-effect-visual");
            if((Math.random() + "").substr(2,1)-0 >= 8){
              ueei.classList.add("trigger-effect-visual-1");
            } else if((Math.random() + "").substr(2,1)-0 >= 6){
              ueei.classList.add("trigger-effect-visual-2");
            } else if((Math.random() + "").substr(2,1)-0 >= 3){
              ueei.classList.add("trigger-effect-visual-3");
            } else {
              ueei.classList.add("trigger-effect-visual-4");
            }
            //ueei.style.top = Math.round((window.innerHeight - 70) / (("" + Math.random()).substr(2,1) - 0)) + "px !important";
            //console.log("*****")
            //console.log(Math.round((window.innerHeight - 70) / (("" + Math.random()).substr(2,1) - 0)))
            //console.log("*****")
            //ueei.style.left = Math.round((window.innerWidth - 100) / (("" + Math.random()).substr(2,1) - 0)) + "px !important";
            ueei.src = "https://s3-ap-northeast-1.amazonaws.com/pochi-sozai/nyan-bunch/img/ueei.png";
            //document.querySelector('video-view[client="client"]').appendChild(ueei);
            //document.querySelector("main").appendChild(ueei);
            ueei.style.display = "block";
            document.body.appendChild(ueei);
            setTimeout(function(){
              ueei.style.display = "none";
            }, 1800);
          },
          fox: function(){},
          abarenbo: function(){},
          darthvader: function(){}
        }
      },
      triggerCount = volumeInfo.trigger,
      scene = getSceneName();
      volume = volumeInfo.volume;
  if(volumeInfo.status === "ended"){
    console.log('ended!!!')
    window.close();
    return;
  }
  console.log('started!!!')
  console.log(volume)
  switch (true) {
    //case volume < 10:
    //
    //  //volumeEffectSounds.he();
    //  break;
    //case volume < 15:
    //  //volumeEffectVisuals.fubuki(volume);
    //  //volumeEffectSounds.hokuto_shindeiru();
    //  break;
    //case volume < 18:
    //  //volumeEffectVisuals.fubuki(volume);
    //  //volumeEffectSounds.nya();
    //  break;
    case volume < 20:
      volumeEffect.visuals.snow(volume);
      //volumeEffectVisuals.fubuki(volume);
      //volumeEffectSounds.mario();
      document.body.querySelector("body>div.content>div>div").style.fontSize = "1px !important";
      break;
    //case volume < 24:
    //  //volumeEffectVisuals.fubuki(volume);
    //  //volumeEffectSounds.hokuto_atatata();
      //break;
    case volume >= 25:
      volumeEffect.visuals.snow(volume);
      //volumeEffectVisuals.fubuki(volume);
      //volumeEffectSounds.dearin();
      document.body.querySelector("body>div.content>div>div").style.fontSize = "100px !important";
      break;
    case volume >= 29:
      volumeEffect.visuals.snow(volume);
      //volumeEffectVisuals.fubuki(volume);
      //volumeEffectSounds.dearin();
      document.body.querySelector("body>div.content>div>div").style.fontSize = "250px !important";
      break;
  }
  for(var i = 0; i < triggerCount; i++){
    console.log('出た=====================================')
    triggerEffect.sounds[scene]();
    triggerEffect.visuals[scene]();
  }
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

window.addEventListener('load', function(){
  // addGlobalScope([stringifyDefineObject('decorations', decorations), nyanpiCallBack]);
  addGlobalScope([nyanpiCallBack,getSceneName]);

  var script = document.createElement("script");
  script.src = "https://nyan.jsoizo.com/effects?callback=nyanpiCallBack&time=" + (+new Date());
  setTimeout(function(){
    setInterval(function(){
      document.body.appendChild(script.cloneNode());
    }, 4000);
  }, 3000);
});

// window.onload = function() {
// 	//WebSocketオープン
// 	socket = new WebSocket("ws://192.168.12.50:10080");
// 	socket.onmessage = function(event) {
// 		document.getElementById('news').innerHTML = event.data;
// 	}
// }

