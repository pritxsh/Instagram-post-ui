let con = document.querySelector("#container");
let heart = document.querySelector(".whiteheart");
let engage = document.querySelector(".engage");
let hero = document.getElementById("hero");
 var click =1;
   
function heartfunc(){
   heart.style.transform='translate(-50%,-50%) scale(1)';
   heart.style.opacity="0.8";
   setTimeout(function(){
        heart.style.opacity="0";
   },1000)
   setTimeout(function(){
    heart.style.transform='translate(-50%,-50%) scale(0)';
   },2000)
}
con.addEventListener("dblclick",heartfunc)

function likefunc(){
   if(click==1){
      heartfunc();
   hero.classList.add('ri-heart-3-fill','redheart');
   hero
   hero.classList.remove('ri-heart-line');
   click=0;
   }
   else if(click==0){
      hero.classList.remove('ri-heart-3-fill','redheart');
      hero
      hero.classList.add('ri-heart-line');
      click=1;
   }
}