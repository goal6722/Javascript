window.onload = function() {
  const sounds = document.querySelector('Audio')
  const pads = document.querySelector('.padd div')
  const visual = document.querySelector('.visual')
  const title = document.querySelector('.title')

  const colors=['red', 'orange', 'yellow', 'green', 'blue', 'plum']
  
  sounds.forEach(
    function(soundFile){
      soundFile.onended=function(){
        visual.innerHTML=''
        title.innerHTML=''
      }
    }
  )
}