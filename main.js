const arrowicon = document.querySelector('.icon--arrow');
const submenu = document.getElementById('submenu');
const iconarrow = document.querySelector('.arrow--icon');
const company = document.getElementById('menu__company');
const navegacion = document.querySelector('.navegacion');


function mostrarsudmenu(){
    if(submenu.style.display === 'none'){
        submenu.style.display = 'block';
        arrowicon.src='images/icon-arrow-up.svg';
    }else{
        submenu.style.display = 'none';
        arrowicon.src = 'images/icon-arrow-down.svg';
    }
} 
function mostarcompany(){
    if (company.style.display ===  'none'){
        company.style.display = 'block';
        iconarrow.src='images/icon-arrow-up.svg';
    }else{
        company.style.display = 'none';
        iconarrow.src = 'images/icon-arrow-down.svg';
    }
}
function mostrarMenu(){
    navegacion.style.display = "block";
}
function ocultarMenu(){
    navegacion.classList.toggle('display__none');
}