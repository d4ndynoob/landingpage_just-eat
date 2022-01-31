var btnSection1 = document.getElementById('btn-section-1-leer-mas');

btnSection1.addEventListener('click', function(){
    console.log('click');
    document.getElementById('section-1').classList.toggle('section-1-cambio');
});