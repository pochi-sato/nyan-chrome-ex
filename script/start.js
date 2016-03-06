var musics = {
  samba:function(){
    document.body.appendChild(new Audio('https://s3-ap-northeast-1.amazonaws.com/pochi-sozai/nyan-bunch/samba.mp3')).play();
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

//function nyanMusic(num){
//  switch (num) {
//    case 'samba':
//      console.log('=====================================');
//      console.log(num);
//      musics.samba();
//      break;
//    default:
//      console.log('クエリに曲名入れて音楽ながしてちょ=====================================');
//      console.log(num);
//      break;
//  }
//}

window.addEventListener('load', function(){
  var sceneQuery = document.location.search.substr(1).split('scene=')[1];
  var musicName = sceneQuery ? sceneQuery.split('&')[0] : 0;
  //nyanMusic(musicName);
  musics[musicName] ? musics[musicName]() : console.log('クエリに曲名入れて音楽ながしてちょ=====================================');
});

