const navegacion = document.querySelector('.navegacion');
const fondo = document.querySelector('.fondo__negro');

function mostrarsudmenu(submenuId,arrowiconclass){
    const submenu= document.getElementById(submenuId);
    const arrowicon = document.querySelector("."+arrowiconclass); 
    const verificar = submenu.classList.contains('display__none');
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
    fondo.classList.toggle('display__none');
    
}