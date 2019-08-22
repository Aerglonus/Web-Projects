
function smoothScroll(target,duration){
    var target =document.querySelector(target);
    var targetPositon = target.getBoundingClientRect().top-100;
    var startPosition =window.pageYOffset;
    var distance = targetPositon- startPosition;
    var starTime=null;

    function animScroll(currentTime){
        if(starTime ===null) starTime = currentTime;
        var timeElapse = currentTime - starTime;
        var runAnimation= ease(timeElapse,startPosition,distance,duration);
        window.scrollTo(0,runAnimation);
        if(timeElapse < duration) requestAnimationFrame(animScroll);
    }
     function ease (t, b, c, d) {
        t /= d;
        t--;
        return c*(t*t*t + 1) + b;
    };
    requestAnimationFrame(animScroll);
}


var btnScroll =document.querySelector('.btnOutline');

btnScroll.addEventListener('click',function(){
smoothScroll('#intro',1000);
});
