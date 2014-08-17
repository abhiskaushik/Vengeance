var stuckie=0.005;//var canvas=document.getElementById('loading_bar1');
function load()
{
var canvas=document.getElementById('loading_bar1');
var ctx=canvas.getContext('2d');
ctx.clearRect(0,0,500,400);
ctx.beginPath();
//ctx.moveTo(100,100);
ctx.arc(100,100,80,0,Math.PI*2,false);
ctx.lineWidth=26;
ctx.strokeStyle='lightgreen';
ctx.stroke();
var cute=0;var cutie=0;var dot=1;var core=0;
function draw_loading()
{
if(core++%10==0)
{
if(dot==1)
{
document.getElementById('loading_status').innerHTML='Loading . .';
dot=2;
}
else if(dot==2)
{
document.getElementById('loading_status').innerHTML='Loading . . .';
dot=3;
}
else
{document.getElementById('loading_status').innerHTML='Loading .';
dot=1;
}

}
cute+=0.01;cutie+=stuckie; if(cute-cutie>=Math.PI)
 { stuckie=0.01;}//first_level();}
 if(asron==true)
setTimeout(draw_loading,1);
var canvas=document.getElementById('loading_bar');
var ctx=canvas.getContext('2d');
ctx.clearRect(0,0,500,400);
ctx.beginPath();
//ctx.moveTo(100,100);
ctx.arc(100,100,80,cutie,cute,false);
ctx.lineWidth=26;
ctx.strokeStyle='black';
ctx.stroke();

}
draw_loading();


}
function start_game()
{
document.getElementById('playing_sos').play();
document.getElementById('first').remove();
document.getElementById('part2').style.display='block';
document.getElementById('part3').style.display='block';
$('#part2').animate({opacity:'1'},2000,combina);
}
function combina()
{
start_level2();
}