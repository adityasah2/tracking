function dayNight(x){
      let t = document.getElementsByTagName(x)[0];
  t.classList.toggle("dark-mode");
  
}

function darkWeb(){
  dayNight("body");
  dayNight("header");
   
}
