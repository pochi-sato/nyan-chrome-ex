// function stringifyDefineObject(name, obj){
// 	return 'var ' + name + ' = ' + JSON.stringify(obj);
// }
function nyanpiCallBack(volumeInfo){
  var soundEffetcs = {
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
      visualEffetcs = {
        snow:function(volume){
          nyanSnow(volume);
        },
        egirls:function() {
        }
      },
      volume = volumeInfo.volume;
  if(volumeInfo.status === "ended"){
    console.log('ended!!!')
    window.close();
    return;
  }
  console.log('started!!!')
  console.log(volume)
  switch (true) {
    case volume < 10:
      //soundEffetcs.he();
      break;
    case volume < 15:
      //visualEffetcs.snow(volume);
      //soundEffetcs.hokuto_shindeiru();
      break;
    case volume < 18:
      //visualEffetcs.snow(volume);
      //soundEffetcs.nya();
      break;
    case volume < 21:
      //visualEffetcs.snow(volume);
      //soundEffetcs.mario();
      break;
    case volume < 24:
      //visualEffetcs.snow(volume);
      //soundEffetcs.hokuto_atatata();
      break;
    case volume >= 24:
      //visualEffetcs.snow(volume);
      //soundEffetcs.dearin();
      break;
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
  addGlobalScope([nyanpiCallBack]);

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

