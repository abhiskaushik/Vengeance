var dir=[119,115,88,87]; // top bottom x w
var state=0;var pause_x=false;
var click=document.getElementById('click');
window.addEventListener("keydown",key_Events,false);
function key_Events(e)
{  

if(state==1)
{
if(e.keycode==dir[0]||e.which==dir[0])
jump1=true;
else if(e.keycode==dir[1]||e.which==dir[1])
fall1=true;
}
else if(state==2)
{

if(e.keycode==dir[2]||e.which==dir[2])
	{  
	click.play();
	if(falling_state1==true)
	{   
	$('#Hanging_letter').animate({top:'300px',left:'840px'},2000,letter_writing);
	$('#syn').fadeOut(100);
    falling_state1=false;
	} 
	} if(e.keycode==dir[3]||e.which==dir[3])
	{ click.play();if(falling_state2==true)
	{ 
	document.getElementById('part2').style.display="none";
	$('#part3').animate({opacity:"1"},2000); document.getElementById('dog').remove(); document.getElementById('part2').remove(); run();
	falling_state2=false;}
	}
}
else if(state==3)
{
movement=true;kim=e.keycode||e.which;
if(pause_x==true)
{
if(kim==27)
{
pause_x=false;movement=false;
hit=0;
run();
}
}
}
}


window.addEventListener("keyup",key_Events1,false);
function key_Events1(e)
{  
if(state==3)
{
bullet_fire=true;
movement=false;
}
}
 function qweg(){document.getElementById('part2').remove();}
