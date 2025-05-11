window.transitionToPage = function(href){
  document.querySelector('p').style.opacity=0
  setTimeout(function(){
    window.location.href = href
  },500)
}

document.addEventListener('DOMContentLoaded', function(event){
  document.querySelector('p').style.opacity = 1
})
