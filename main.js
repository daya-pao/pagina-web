const navegacion = document.querySelector('.navegacion');
const verificar = submenu.classList.contains('display__none');

function mostrarsudmenu(submenuId,arrowiconclass){
    const submenu= document.getElementById(submenuId);
    const arrowicon = document.querySelector(arrowiconclass); 
    console.log(verificar);
   if(verificar){
    submenu.classList.remove('display__none');
    arrowicon.src='images/icon-arrow-up.svg';
   }else{
    submenu.classList.add('display__none');
    arrowicon.src = 'images/icon-arrow-down.svg';
   } 
}
function ocultarMostarMenu(){
    navegacion.classList.toggle('display__none');
}