const picArr=[
   {img:"6b154291e565321a8d8f5aa7626f115f.jpg",
   title:"Мельница у реки"
},
   {img:"6cfd38545df0a6b826795a261bab82ab.gif",
   title:"Анимированный котик"
},
{
    img:"29f7cfef27abba0e723ddd4d8f1d8f84.jpg",
    title:"Мельница"
},
{img:"d2e08f326079af6cd0ea0eaf2af76a58.jpg",
title:"горы"
}
   
]


function addPic(){
   let div=document.querySelectorAll('.cards')   
    for(i=0;i<4;i++){
      div[i].innerHTML=`<img class="imges" src="build/${picArr[i].img}" width="100%" height="90%">
      <P>${picArr[i].title}</p>     
      `  
    }
}
addPic()
console.log(div)