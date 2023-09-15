var card=document.querySelector("#elem");
var img=document.querySelector("#elem img");


card.addEventListener("mousemove",function(dets){
  
    img.style.left=dets.x+"px";;
    img.style.top=dets.y+"px"
})
card.addEventListener("mouseenter",function(){
    img.style.opacity=1
})
card.addEventListener("mouseleave",function(){
    img.style.opacity=0
})

var card=document.querySelector("#elem1");
var img=document.querySelector("#elem1 img");


card.addEventListener("mousemove",function(dets){
  
    img.style.left=dets.x+"px";;
    img.style.top=dets.y+"px"
})
card.addEventListener("mouseenter",function(){
    img.style.opacity=1
})
card.addEventListener("mouseleave",function(){
    img.style.opacity=0
})


var card=document.querySelector("#elem2");
var img=document.querySelector("#elem2 img");


card.addEventListener("mousemove",function(dets){
  
    img.style.left=dets.x+"px";;
    img.style.top=dets.y+"px"
})
card.addEventListener("mouseenter",function(){
    img.style.opacity=1
})
card.addEventListener("mouseleave",function(){
    img.style.opacity=0
})