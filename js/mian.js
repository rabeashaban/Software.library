let menuoSidbar=document.getElementById('menuoSidbar');
let Sidbar = document.getElementById('Sidbar');
let CloseMuneo =document.getElementById('CloseMuneo');
let scrollTop=document.getElementById('scrollTop');



menuoSidbar.onclick = function(){
    Sidbar.style.right=0;
}
CloseMuneo.onclick = function(){
    Sidbar.style.right='-700px';
    Sidbar.style.transition='all 0.6s ease 0s'
}


/********************* */
window.onload =function(){
    if(scrollY >= 10){
        // scrollTop.style.bottom = 50;
        scrollTop.style.bottom =`+100px`;   
        // scrollTop.style.display ='block';

    }
    else{
        scrollTop.style.bottom=`-100px`;

    }
}
window.onscroll = function(){
    if(scrollY >= 10){
        scrollTop.style.bottom =`+100px`;   
    }
    else{
        scrollTop.style.bottom=`-100px`;
    }
}
scrollTop.onclick = function(){
 scroll({
    left:0,
    top:0,
    behavior:"smooth"
 })
}


// dark

let dark=document.getElementById('dark');
let what=document.getElementById('what');
let box=document.querySelectorAll('.box');
let btn=document.querySelectorAll('#btn');

dark.onclick =function(){
    dark.style.display="none";
    what.style.display="block";
    document.body.style.background='#ffffff2e';
    document.body.style.color='#000';
    for(let x=0 ; x <box.length;x++){
        box[x].style.background="#aea6a6";
        box[x].style.color="#000000";
        btn[x].style.background="#DDD";
        btn[x].style.color="#222";
    }
}

what.onclick =function(){
    what.style.display="none";
    dark.style.display="block";

    document.body.style.background='#0b061d';
    document.body.style.color='#fff';

    for(let x=0 ; x <box.length;x++){
        box[x].style.background="#1b0a4b68";
        box[x].style.color="#FFF";

        
        btn[x].style.background="#0d69d5";
        btn[x].style.color="#fff";
    }
}