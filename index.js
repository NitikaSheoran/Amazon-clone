const header_img = document.querySelectorAll(".header-img");
const prev = document.querySelector(".control-prev");
const next = document.querySelector(".control-next");
let n = 0;

function hideimg(){
    for(let i=0; i<header_img.length; i++){
        header_img[i].style.display = "none";
    }
    header_img[n].style.display = "block";
}

prev.addEventListener('click',(e)=>{
    if(n>0){
        n--;
    }else{
        n = header_img.length -1;
    }
    hideimg();
})

next.addEventListener('click',(e)=>{
    if(n<header_img.length -1){
        n++;
    }else{
        n=0;
    }
    hideimg();
})

const scrollbar = document.querySelectorAll(".products");
for(const item of scrollbar){
    item.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    })
}