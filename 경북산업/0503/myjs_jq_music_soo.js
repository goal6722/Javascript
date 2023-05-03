$ (function() {
 // const sounds = document.querySelectorAll('Audio')
 const sounds = $('audio')
  //const pads = document.querySelectorAll('.pads div')
  const pads = $('.pads div')

  //1. 변동 안됨
  //2.메모리 관리 할 때 용이하다.
  // const visual = document.querySelector('.visual')
  const visual = $('.visual')
  //const title = document.querySelector('.title')
  const title = $('.title')

  const colors = ['red', 'orange', 'yellow','green', 'blue','plum' ]
  // sounds.forEach(
  //   function(soundFile){
  //     soundFile.onended=function(){
  //       visual.innerHTML=''
  //       title.innerHTML=''
  //     }
  //   }
  // )
  sounds.each(function(pad,index){

  })
// pads.forEach(function(pad,index){
//   pad.addEventListener('click',()=>{
//     sounds.forEach(function(inx) {
//       inx.pause()
//       if(sounds[index])
//       {
//         sounds[index].currentTime=0
//         sounds[index].play()
//         const srtArray = sounds[index].src.split('sound/')
//         title.innerHTML = srtArray[1].split('.')[0]

//       }
//       createBubbles(index)
//     })
//   })
// })
pads.each(function(index,pad){
  $(pad).on('click',function(){
    sounds.each(function(index,soundFile){
      soundFile.pause()
    })
    if(sounds[index]){
      sounds[index].currentTime=0
      sounds[index].play()

      const srtArray = sounds[index].src.split('sound/')
      title.text(strArray[1].split('.')[0])
    }
    createBubbles(index)
  })
})
const createBubbles = function(index) {
  visual.innerHTML=''
  const bubble = document.createElement('div')
  visual.appendChild(bubble)
  bubble.style.backgroundColor = colors[index]
  bubble.style.top='300px'
  bubble.style.animation='animation 2000ms linear infinites'

})
