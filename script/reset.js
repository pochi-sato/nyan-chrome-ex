// setTimeout(function(){
// //
// // // 全体を黒く
// // var div = document.createElement('div');
// // div.style.backgroundColor = 'black';
// // div.style.width = window.innerWidth + 'px';
// // div.style.height = window.innerHeight + 'px';
// // div.style.zIndex = 1000;
// // div.style.position = 'absolute';
// // div.style.top = 0;
// // div.style.left = 0;
// // document.body.appendChild(div);
// //
//
// alert('hey')
// // 相手の映像を取得
//   var videos = document.getElementsByTagName('video-view'),
//   	partnerVideo,
// 		localVideo;
//   for(var i = 0, len = videos.length; i < len; i++){
//   if(videos[i].getAttribute("client") === "client"){
//     partnerVideo = videos[i];
// 	} else if(videos[i].getAttribute("client") === "localClient"){
// 	    localVideo = videos[i];
//   }
//   }
//   // localVideo.style.display = "none";
//   var main = document.getElementsByTagName('main')[0]
//   var mainChilds = main.children;
//   // for(var i = 0, len = mainChilds.length; i < len; i++){
//   // 	mainChilds[i].style.display = 'none';
//   // }
//   partnerVideo.parentNode.parentNode.style.display = 'block';
//   // main.style.background = 'black';
//   // main.style.padding = '0 0 0 0';
//   // partnerVideo.style.top = 0;
//   // partnerVideo.style.left = 0;
//   partnerVideo.parentNode.style.top = 0;
//   partnerVideo.parentNode.style.left = 0;
//   var videoWrapper = main.getElementsByClassName('video-wrapper')[0];
//   videoWrapper.style.margin = '0 0 0 0';
// }, 15000);
