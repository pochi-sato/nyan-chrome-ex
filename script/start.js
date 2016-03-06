var musics = {
  samba:function(){
    document.body.appendChild(new Audio('https://s3-ap-northeast-1.amazonaws.com/pochi-sozai/nyan-bunch/samba.mp3')).play();
  },
  fox:function(){
    document.body.appendChild(new Audio('https://s3-ap-northeast-1.amazonaws.com/pochi-sozai/nyan-bunch/fox.mp3')).play();
  },
  abarenbo:function(){
    document.body.appendChild(new Audio('https://s3-ap-northeast-1.amazonaws.com/pochi-sozai/nyan-bunch/abarenbo.mp3')).play();
  },
  darthvader:function(){
    document.body.appendChild(new Audio('https://s3-ap-northeast-1.amazonaws.com/pochi-sozai/nyan-bunch/darthvader.mp3')).play();
  },
  followme:function(){
    document.body.appendChild(new Audio('https://s3-ap-northeast-1.amazonaws.com/pochi-sozai/nyan-bunch/followme.m4a')).play();
  },
  followmeLive:function(){
    document.body.appendChild(new Audio('https://s3-ap-northeast-1.amazonaws.com/pochi-sozai/nyan-bunch/followmeLive.mp3')).play();
  }
};

window.addEventListener('load', function(){
  var sceneQuery = document.location.search.substr(1).split('scene=')[1],
      musicName = sceneQuery ? sceneQuery.split('&')[0] : 0;
  musics[musicName] ? musics[musicName]() : console.log('クエリに曲名入れて音楽ながしてちょ=====================================');
});

