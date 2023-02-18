const btn = document.getElementById("btn")

let index = 0;

const color = ["Blue","red","pink","green","yellow","purple","white"];

btn.addEventListener('click',function myfunc(){
   btn.style.backgroundColor = color[index];

   index = index >= color.length - 1 ? 0 :index +1 
});


