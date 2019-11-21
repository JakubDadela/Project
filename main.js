var eurtodol=0.85;
var doltoeur=1.20;
var pltodol=0.29;
var doltopl=3.45;
var eurtopln=0.24;
var plntoeur=4.15;
var dozamiany=document.getElementById('val1');
var najak=document.getElementById('val2');
var dow=document.getElementById('Pole');
var bt=document.querySelector('.btn');
var ow=document.querySelector('p');
function Oblicz(event){
    event.preventDefault();
    let war=dow.value;
    let co=dozamiany.value;
    let naco=najak.value;
    let res=0;
    if(co="Zlotowki"){
        if(naco="Euro") result=war*plntoeur;
        else if(naco="Dolary") result=war*pltodol;
        else return 0;
    }else if(co=="Euro"){
        if(naco=="Dolary") result=war*eurtodol;
        else if(naco="Zlotowki") result=war*eurtopln;
        else return 0;
    }else{
        if(naco=="Euro") result=war*doltoeur;
        else if(naco="Zlotowki") result=war*doltopl;
        else return 0;
    }
    ow.innerText=result.toString();
}

bt.addEventListener('click',Oblicz);
