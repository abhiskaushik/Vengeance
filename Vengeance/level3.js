var bullet_fire=true;var trust=40;var xm=0;var arrange;var count_coints=0;var cramp=true;var xq,xqq,xqqq;var step=1;var hitting=false;var cort=0;var hiti=false;var bullets=10;var trie=3;var xrt='';var leftZR=-6;var ncoin=0;var fu;var life=3;var x=0;var tr=10;var aw=-100;var bo=0;var a=[],length=0;var animat=0;var crea=0;var set=0; var movement=false; var kim;var csa=0;var hit=0;
var anime=window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                             window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

							 
							 function run()
{
if(state!=3)
if(playing==1)
 document.getElementById('music').play();
state=3; 
if(tr%1500==0)
{
$('#div2').animate({opacity:'0.5'},1000,chabe).animate({opacity:'1'},1000);
}
document.getElementById("scoring").innerHTML="Distance: "+Math.floor(tr/3)+" m"; 
if(tr%300==0)
cramp=true;
if(tr>300)
{  
 
if(cramp==true)
{
if(tr%5==0)
{
create_coin();
if((count_coints++)==18)
{
cramp=false;if(trust>20){trust--;document.getElementById('level').innerHTML='Level: '+(41-trust);}
count_coints=0;
}}}
if(cramp==false)
{
if(tr%trust==0)
create_stone();
}
for(var c=0;c<length;c++)
{

a[c][7]=a[c][3]-a[c][4]/a[c][8];
var xe=document.getElementById('tree'+c).style;
var col=a[c][4]/a[c][3];

a[c][2]+=col*a[c][6];  //zooming about the center
a[c][1]+=a[c][6];

xe.width=a[c][1]+"%";
xe.height=a[c][2]+"%";

xe.left=a[c][4]-a[c][1]/2+"%";
xe.top=a[c][3]-a[c][2]/2+"%";
//end of zooming
a[c][3]+=a[c][5]; //shifting the center
a[c][4]=(a[c][3]-a[c][7])*a[c][8];
a[c][5]+=a[c][9];
if(a[c][0]==1)
{ 

if(a[c][3]>65&&a[c][3]<80&&((a[c][4]-cpc)<11)&&((a[c][4]-cpc)>-1)&&animat==0)
{
if(a[c][10]==1)
{
a[c][10]=0;
document.getElementById("coining").innerHTML="coins: "+(ncoin++);
var sound=document.getElementById('coin_music');
if(playing==1)
{
sound.currentTime=0;
sound.play();
}
a[c][8]=0.3;
a[c][9]=-0.3;
}}  
}
if(a[c][0]==7)
{ 
life--;
if(a[c][3]>65&&a[c][3]<80&&((a[c][4]-cpc)<18)&&((a[c][4]-cpc)>0)&&animat==0)
{
diee();
hit=1;
/*$('#zombie').css({webkitTransform:'rotate(350deg)'},"fast");
var sound=document.getElementById('coin_music');
if(playing==1)
{
sound.currentTime=0;
sound.play();
}
a[c][5]=0-3*a[c][5];
a[c][8]=-0.2;
a[c][6]=-0.3;
a[c][9]=-0.1; */
}  
}
}
if(tr%200==0)
enemy();
/*if(tr%200==0)
{
if(tr%400==0) create_canvas3();
else canvas5();
} */
}

if(animat==0)
{
if(tr%trie==0)
{
document.getElementById('zombie').style.backgroundPosition=leftZR+'px';
leftZR-=200;
if(leftZR<-1200)
leftZR=-6;
}}
x=x+csa;tr+=1;aw+=2;bo-=1;if(csa<3)csa+=0.02;xm+=csa;
//document.getElementById('div2').style.borderRadius=bo+'%';
//document.getElementById('div1').style.left=aw+'px';
document.getElementById('system').style.backgroundPosition='0px '+xm*5+'px';
document.getElementById('system1').style.backgroundPosition='0px '+xm*5+'px';
document.getElementById('div2').style.backgroundPosition='0px '+x+'px';
if(x>=128)
x=0;
if(xm>=416)
xm=0;
if(tr<100);
//document.getElementById('div2').style.webkitTransform='rotateX(80deg)';
if(movement==true)
{ 
if(tr%2)
stop();
}
if(boobble==true)
{
if(tr%40==0)
{
pow1();
countew++;
}
if(countew==6)
{
countew=0;
pow12();
}
}
if(hit==0)
anime(run);
}
function turn_left()
{
if(te<50)
document.getElementById('div2').style.borderRadius=(te++)+'%';
if(tm<100)
document.getElementById('div1').style.left=aw+'px';
}cpc
function straight()
{

}
var airr=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];var count_coin=0;
function create_coin()
{
arrange=count_coin%18;
if(count_coin<18)
{
airr[count_coin++]=length;
var x=document.createElement('img');
x.id='tree'+length;
x.src='coin4.png';
var y=x.style;
y.height='2%';y.width='1%';y.position='absolute';y.top='10%';y.left='30%';
document.getElementById('main').appendChild(x);
if(arrange==0)
{
xq=Math.floor(Math.random()*3);
xqq=Math.floor(Math.random()*3);
xqqq=Math.floor(Math.random()*3);
}
if(arrange<6)
{
if(xq%3==0 )
length=a.push([1,3,2,45,47.5,0.3,0.05,0,0.05,0.02,1]);
else if(xq%3==1)
length=a.push([1,3,2,45,48.5,0.3,0.05,0,0.6,0.04,1]);
else
length=a.push([1,3,2,45,45.5,0.3,0.05,0,-0.6,0.04,1]);
}
else if(arrange<12)
{
if(xqq%3==0 )
length=a.push([1,3,2,45,47.5,0.3,0.05,0,0.05,0.02,1]);
else if(xqq%3==1)
length=a.push([1,3,2,45,48.5,0.3,0.05,0,0.6,0.04,1]);
else
length=a.push([1,3,2,45,45.5,0.3,0.05,0,-0.6,0.04,1]);
}
else
{
if(xqqq%3==0 )
length=a.push([1,3,2,45,47.5,0.3,0.05,0,0.05,0.02,1]);
else if(xqqq%3==1)
length=a.push([1,3,2,45,48.5,0.3,0.05,0,0.6,0.04,1]);
else
length=a.push([1,3,2,45,45.5,0.3,0.05,0,-0.6,0.04,1]);
}}


else
{
if(arrange==0)
{
xq=Math.floor(Math.random()*3);
xqq=Math.floor(Math.random()*3);
xqqq=Math.floor(Math.random()*3);
}
if(arrange<6)
{
if(xq%3==0 )
a[airr[(count_coin++%18)]]=[1,3,2,45,47.5,0.3,0.05,0,0.05,0.02,1];
else if(xq%3==1)
a[airr[(count_coin++%18)]]=[1,3,2,45,48.5,0.3,0.05,0,0.6,0.04,1];
else
a[airr[(count_coin++%18)]]=[1,3,2,45,45.5,0.3,0.05,0,-0.6,0.04,1];
}
else if(arrange<12)
{
if(xqq%3==0 )
a[airr[(count_coin++%18)]]=[1,3,2,45,47.5,0.3,0.05,0,0.05,0.02,1];
else if(xqq%3==1)
a[airr[(count_coin++%18)]]=[1,3,2,45,48.5,0.3,0.05,0,0.6,0.04,1];
else
a[airr[(count_coin++%18)]]=[1,3,2,45,45.5,0.3,0.05,0,-0.6,0.04,1];
}
else
{
if(xqqq%3==0 )
a[airr[(count_coin++%18)]]=[1,3,2,45,47.5,0.3,0.05,0,0.05,0.02,1];
else if(xqqq%3==1)
a[airr[(count_coin++%18)]]=[1,3,2,45,48.5,0.3,0.05,0,0.6,0.04,1];
else
a[airr[(count_coin++%18)]]=[1,3,2,45,45.5,0.3,0.05,0,-0.6,0.04,1];
}
}
}
var cpc=30;
function stop()
{
if(kim==27)
pause_game();
if(kim==37&&cpc>15)
{
cpc-=5;
document.getElementById('zombie').style.left=cpc+'%';
document.getElementById('shoti').style.left=cpc+8+'%';
}
else if(kim==39&&cpc<70)
{
cpc+=5;
document.getElementById('zombie').style.left=cpc+'%';
document.getElementById('shoti').style.left=cpc+8+'%';
}
else if(kim==65)
{
if(ncoin>=50)
{
ncoin-=50;
boobble=true;
}}
else if(kim==38)
{
if(animat==0)
{
animat=1;
document.getElementById('shoti').style.top=10+'%';
$('#part5').animate({top:'10%'},500).animate({top:'0%'},700);
$('#zombie').animate({top:'-4%'},500).animate({top:'50%'},700,reverse_animate);
}
}
else if(kim==32){ 
if(bullets>0 && bullet_fire==true)
{
bullet_fire=false;
$('#shoti').animate({opacity:'1'},50).animate({opacity:'0'},100);
if(playing==1)
{
document.getElementById('gunshot').currentTime=0;
document.getElementById('gunshot').play();
}
bullets--;
document.getElementById('bullet').innerHTML='Bullets: '+bullets;
if(hiti==true)
{
cort++;
if(hitting==true)
{
hitting=false;
document.getElementById('enem').src='enemy1.png';
$('#enem').stop();
$('#enem').animate({opacity:'0'},1000);
document.getElementById('enemyies').innerHTML='enemies: '+cort;
}}
}
}
else if(kim==40)
{
if(animat==1)
{
$('#zombie').stop();
//document.getElementById('zombie').style.background='';
//document.getElementById('zombie').src='roll.png';
$('#zombie').animate({top:'60%'},100,reverse_animate);
}
}
if(kim==66)
buy_bullets();
}

function reverse_animate()
{
animat=0;
drot();
}
var airt=[0,0,0,0,0,0];var count_stone=0;
function create_stone()
{

if(count_stone<6)
{
airt[count_stone++]=length;
var xn=document.createElement('img');
xn.id='tree'+length;
xn.src='cac4.png';
var y=xn.style;
y.height='2%';y.width='1%';y.position='absolute';y.top='10%';y.left='30%';
document.getElementById('main').appendChild(xn);
var sq=Math.floor(Math.random()*3);
if(sq==0)
length=a.push([7,1,2,45,50,0,0.3,0,0.7,0.02,0]);
else if(sq==1)
length=a.push([7,1,2,45,47,0,0.3,0,-0.02,0.02,0]);
else 
length=a.push([7,1,2,45,45,0,0.3,0,-0.7,0.02,0]);
}
else
{
var sq=Math.floor(Math.random()*3);
if(sq==0)
a[airt[(count_stone++%5)]]=[7,1,2,45,50,0,0.3,0,0.7,0.02,0];
else if(sq==1)
a[airt[(count_stone++%5)]]=[7,1,2,45,47,0,0.3,0,-0.02,0.02,0];
else 
a[airt[(count_stone++%5)]]=[7,1,2,45,45,0,0.3,0,-0.7,0.02,0];
}
//else if(xq%3==3)
//length=a.push([0,2,2,10,51,0.5,0.1,0,-0.03,0.3,1]);
//else cpc
//length=a.push([0,2,2,10,49,0.5,0.1,0,0.2,0.3,1]);
}
function diee()
{
document.getElementById('restart_again').style.display='block';
x=x+csa;csa=5;
//document.getElementById('div2').style.borderRadius=bo+'%';
//document.getElementById('div1').style.left=aw+'px';
document.getElementById('div2').style.backgroundPosition='0px '+x+'px';
document.getElementById('system').style.backgroundPosition='0px '+x*5+'px';
document.getElementById('system1').style.backgroundPosition='0px '+x*5+'px';
}
function chabe()
{
xrt=(xrt=="back10.png")?"back9.png":"back10.png";
document.getElementById('div2').style.background='url('+xrt+')';

}
var trye;var countew=0;var boobble=false;
function pow1()
{
for(var c=0;c<length;c++)
a[c][9]=0.1;
trye=csa;tr+=51;trie=1;
csa=10;
}

function pow12()
{
csa=3;
countew=0;trie=5;
boobble=false;
}
var vert;var once=true;
function enemy()
{
if(once==true)
{
once=false;
vert=document.createElement('img');
vert.src='emeny.png';
vert.id='enem';
}
vert.src='emeny.png';
vert.style.position='absolute';vert.style.left='70%';vert.style.top='20%';vert.style.height='200px';vert.style.opacity='0';
document.getElementById("stay").appendChild(vert);
$('#enem').stop();
$('#enem').animate({opacity:'1'},10,cob).animate({left:cpc+'%',top:'60%',height:'30%'},2000,cobi);
}
function cob()
{
hiti=true;
hitting=true;
}
function cobi()

{
hiti=false;
hitting=false;
diee();
hit=1;
}
function reset_again()
{

document.getElementById('level').innerHTML='Level: 1';
document.getElementById('bullet').innerHTML='Bullets :10';
document.getElementById('scoring').innerHTML='Distance: 0m';
document.getElementById('coining').innerHTML='Coins: 0';
document.getElementById('enemyies').innerHTML='Enemy: 0';
document.getElementById('div2').style.background='url(back18.png)';
document.getElementById('main').remove();
document.getElementById('stay').remove();
var fyt=document.createElement('div');
fyt.id='main'; fyt.style.position='absolute';fyt.style.width='100%';fyt.style.height='100%';
document.getElementById('vain').appendChild(fyt);
fyt=document.createElement('div');
fyt.id='stay';
document.getElementById('rofl').appendChild(fyt);
step=1;hitting=false;cort=0;hiti=false;bullets=10;
trie=3;xrt='';leftZR=-6;ncoin=0;fu;life=3;x=0;tr=10;aw=-100;a=[];once=true;
bo=0;length=0;animat=0;crea=0;set=0;movement=false;csa=0;hit=0;
airr=[0,0,0,0,0,0,0,0,0];count_coin=0;
bullet_fire=true;trust=40;xm=0;count_coints=0;cramp=true;
canv5_status=false;
airt=[0,0,0,0,0,0];count_stone=0;
countew=0;boobble=false;
 once=true;
 document.getElementById('restart_again').style.display='none';
 setTimeout(run,100);
 }
 function drot()
{
document.getElementById('shoti').style.top=43+'%';
}
function buy_bullets()
{
if(ncoin>=50)
{
ncoin-=50;
bullets+=10;
document.getElementById('bullet').innerHTML='bullets: '+bullets;
}
}
function pause_game()
{
if(hitting==false)
{
hit=1;
pause_x=true;
}
}