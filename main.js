const arrowicon = document.querySelector('.icon--arrow');
const submenu = document.getElementById('submenu');
const iconarrow = document.querySelector('.arrow--icon');
const company = document.getElementById('menu__company');
const navegacion = document.querySelector('.navegacion');


function mostrarsudmenu(){
    const verificar = submenu.classList.contains('display__none');
    console.log(verificar);
   if(verificar){
    submenu.classList.remove('display__none');
    arrowicon.src='images/icon-arrow-up.svg';
   }else{
    submenu.classList.add('display__none');
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

function ocultarMenu(){
    navegacion.classList.toggle('display__none');
}