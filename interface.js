window.addEventListener('load',init);
function init(){
    deviceType();
}

function deviceType() {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
         alert('ONLY CAPABLE WITH DESKTOP')  ;
         document.querySelector('body').innerHTML = 'Sorry for inconvinience but pls try to login with desktop';
         
         
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        alert('ONLY CAPABLE WITH DESKTOP') ;
        document.querySelector('body').innerHTML = 'Sorry for inconvinience but pls try to login with desktop';
      }
   
};