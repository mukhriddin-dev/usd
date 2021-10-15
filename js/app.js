"use strict";

const usd=document.querySelector('#usd');
const uzs=document.querySelector('#uzs');
const rub=document.querySelector('#rub');


uzs.addEventListener('input',()=>{

  const request=new XMLHttpRequest();

request.open('GET', 'js/current.json');
request.setRequestHeader('Content-type', 'application/json;');
request.send();

request.addEventListener('readystatechange',()=>{

  if(request.readyState===4 && request.status===200){
const inFo=JSON.parse(request.response);
   console.log(request.response);
   usd.value=+uzs.value/inFo.current.usd;
   rub.value=+uzs.value/inFo.current.rub;

  }else{
usd.value="error";
  }



});









});

