let w=0;
console.log("Hello world");
let input=document.querySelector(".input");
let submit=document.querySelector(".submit");
let content=document.querySelector(".content");
submit.addEventListener('click',function(){
    
    // console.log(input.value);
      content.innerText=`Hi,${input.value}`;
})