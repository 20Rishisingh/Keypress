const button = document.querySelector('.button');
const keycode = document.querySelector(".keycode");

button.addEventListener("keyup", (e)=>{

keycode.style.display = "block";
keycode.innerText = e.keyCode;
   if(e.target.value === ''){
      keycode.style.display = "none";
   }
});