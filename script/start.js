var musics = {
  samba:function(){
    document.body.appendChild(new Audio('https://s3-ap-northeast-1.amazonaws.com/pochi-sozai/nyan-bunch/audio/samba.mp3')).play();
    var script = document.createElement("script");
    script.src = "https://s3-ap-northeast-1.amazonaws.com/pochi-sozai/nyan-bunch/script/congra.js";
    document.body.appendChild(script);
  },
  fox:function(){
    document.body.appendChild(new Audio('https://s3-ap-northeast-1.amazonaws.com/pochi-sozai/nyan-bunch/audio/fox.mp3')).play();
  },
  abarenbo:function(){
    document.body.appendChild(new Audio('https://s3-ap-northeast-1.amazonaws.com/pochi-sozai/nyan-bunch/audio/abarenbo.mp3')).play();
  },
  darthvader:function(){
    document.body.appendChild(new Audio('https://s3-ap-northeast-1.amazonaws.com/pochi-sozai/nyan-bunch/audio/darthvader.mp3')).play();
  },
  followme:function(){
    //document.body.appendChild(new Audio('https://s3-ap-northeast-1.amazonaws.com/pochi-sozai/nyan-bunch/audio/followme.m4a')).play();
    var script = document.createElement("script");
    script.src = "https://s3-ap-northeast-1.amazonaws.com/pochi-sozai/nyan-bunch/script/congra.js";
    document.body.appendChild(script);
  },
  followmeLive:function(){
    document.body.appendChild(new Audio('https://s3-ap-northeast-1.amazonaws.com/pochi-sozai/nyan-bunch/audio/followmeLive.mp3')).play();
  }
};

window.addEventListener('load', function(){
  var sceneQuery = document.location.search.substr(1).split('scene=')[1],
      musicName = sceneQuery ? sceneQuery.split('&')[0] : 0;
  musics[musicName] ? musics[musicName]() : console.log('クエリに曲名入れて音楽ながしてちょ=====================================');
});

