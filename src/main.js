//El proposito de main es manipular el DOM (eso incluye invocar funciones)
//--------------------------------------------------------
// import {filterResults} from './data.js'
import {filterResults} from './data.js';
import rickandmorty from './data/rickandmorty/rickandmorty.js';

//Eventos
document.addEventListener('DOMContentLoaded',()=>{
  
    showData(information);
})

//variables
let results = document.getElementById('character')
let information = rickandmorty.results;
const species = document.querySelector('#specie'),
      status = document.querySelector('#status'),
      gender = document.querySelector('#gender'),
      type = document.querySelector('#type'),
      order = document.querySelector('#order');

//Event listener para los selects de la busqueda
species.addEventListener('change', e => {
    // searchData.species = e.target.value;
    information.species = e.target.value;
    
    const result = filterResults();
    if(result.length){
      showData(result);
      }else{
        noResult();
      }
  })

  status.addEventListener('change', e => {
    information.status = e.target.value;
    
    const result = filterResults();
    if(result.length){
      showData(result);
      }else{
        noResult();
      }
  })

  gender.addEventListener('change', e => {
    information.gender = e.target.value;
    const result = filterResults();
    if(result.length){
      showData(result);
      }else{
        noResult();
      }
  })

  type.addEventListener('change', e => {
    information.type = e.target.value;

    const result = filterResults();
    if(result.length){
      showData(result);
      }else{
        noResult();
      }
  })

  order.addEventListener('change', e => {
    // console.log('evento de order');
    information.order = e.target.value;

   const result = filterResults(information.order);
   if(result.length){
     showData(result);
     }else{
       noResult();
     }
  })

function showData(information){
  CleanHTML();  //limpia el html previo
  information.forEach( element => {
    const divHtml = document.createElement('div');
    divHtml.className = 'card';
        divHtml.innerHTML=`
        <img src='${element.image}'/><br><br>
        <p> <b>Id</b>: ${element.id}</P>
        <p> <b>Name:</b> ${element.name}</P>
        <p> <b>Status:</b> ${element.status}</P>
        <p> <b>Species:</b> ${element.species}</P>
        <p> <b>Type:</b> ${element.type}</P>
        <p> <b>Gender:</b> ${element.gender}</P>
        <p> <b>Origin:</b> ${element.origin.name}</P>
        <p> <b>Location:</b> ${element.location.name}</P>
        `;
    results.appendChild(divHtml)
  })
}

function CleanHTML(){
  while(results.firstChild){
    results.removeChild(results.firstChild);
  }
}

function noResult(){
  CleanHTML();
  const noResult = document.createElement('div');
  noResult.classList.add('alert')
  noResult.innerHTML = "You're not gonna believe this,<br> because it ussually never happens,<br> 👽 but 👽<br> No matches found";
  results.appendChild(noResult);
}



