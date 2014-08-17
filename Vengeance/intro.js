
function finishiee()
{
document.getElementById('loading_bar').style.display='none';
document.getElementById('loading_bar1').style.display='none';
document.getElementById('loading_status').style.display='none';
document.getElementById("main3d").style.webkitAnimation='rotate1 0.4s linear  ';
document.getElementById("main3d").style.webkitAnimationIterationCount=4;
document.getElementById("main3d").style.mozAnimation='rotate1 0.4s linear  ';
document.getElementById("main3d").style.mozAnimationIterationCount='5';
setTimeout(generate,2200);
}
function generate()
{
$('#front8').animate({width:'0%'},1000,g1);
$('#side8').animate({height:'0%'},1000);
$('#front1').animate({width:'0%'},1000);
$('#side1').animate({height:'0%'},1000);

}
function g1()
{

$('#front8').animate({width:'100%'},1000,g1);
$('#side8').animate({height:'100%'},1000);
$('#front1').animate({width:'100%'},1000);
$('#side1').animate({height:'100%'},1000);
$('#front3').animate({left:'100%'},1000);
$('#front7').animate({left:'100%'},1000);
$('#front2').animate({left:'-100%'},1000);
$('#front6').animate({left:'-100%'},1000);

document.getElementById('main3d').style.webkitTransform='rotateX(50deg) rotateZ(50deg)';
document.getElementById('main3d').style.webkitTransform='scale3d(0.5,0.5,0.2)';
document.getElementById('main3d').style.webkitPerspective='600';
document.getElementById('front6').style.webkitTransform='rotateX(0deg) rotateY(0deg)';
document.getElementById('front2').style.webkitTransform='rotateX(0deg) rotateY(0deg)';
document.getElementById('front3').style.webkitTransform='rotateX(0deg) rotateY(0deg)';
document.getElementById('front7').style.webkitTransform='rotateX(0deg) rotateY(0deg)';

document.getElementById('main3d').style.mozTransform='rotateX(50deg) rotateZ(50deg)';
document.getElementById('main3d').style.mozTransform='scale3d(0.5,0.5,0.2)';
document.getElementById('main3d').style.Perspective='600px';
document.getElementById('front6').style.mozTransform='rotateX(0deg) rotateY(0deg)';
document.getElementById('front2').style.mozTransform='rotateX(0deg) rotateY(0deg)';
document.getElementById('front3').style.mozTransform='rotateX(0deg) rotateY(0deg)';
document.getElementById('front7').style.mozTransform='rotateX(0deg) rotateY(0deg)';
}
