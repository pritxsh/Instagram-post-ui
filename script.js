let con = document.querySelector("#container");
let heart = document.querySelector(".whiteheart");
let engage = document.querySelector(".engage");
let hero = document.getElementById("hero");
 var likeclick =1;
 var heartclick =1;
   
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
con.addEventListener("dblclick",heartfunc);
con.addEventListener("dblclick",()=>{
   if(heartclick==1){
      likefunc();
      heartclick =0;
   }
});

function likefunc(){
   if(likeclick==1){
      heartfunc();
   hero.classList.add('ri-heart-3-fill','redheart');
   hero
   hero.classList.remove('ri-heart-line');
   likeclick=0;
   }
   else if(likeclick==0){
      hero.classList.remove('ri-heart-3-fill','redheart');
      hero.classList.add('ri-heart-line');
      likeclick=1;
      heartclick=1;
   }
}