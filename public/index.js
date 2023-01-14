
window.addEventListener('DOMContentLoaded', function () {
    overlayBtn.onclick=function on() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("body").style.backgroundColor = "rgba(0,0,0,0.5)";
  }
  
  cancelBtn.onclick=function off() {
   document.getElementById("overlay").style.display = "none";
   document.getElementById("body").style.backgroundColor = "white"
   
  }


});