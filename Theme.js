	function Thm0()
	{
	document.body.style.background="#EDEDED url('images/back/GameStack_gradient.jpg') repeat-x ";
	fntch1.style.fontFamily="Century Gothic";
	fntch2.style.fontFamily="Century Gothic";
	fntch3.style.fontFamily="Century Gothic";
	fntch4.style.fontFamily="Century Gothic";
	fntch5.style.fontFamily="Century Gothic";
	fntch6.style.fontFamily="Century Gothic";
	}
	function Thm1()
	{
	document.body.style.backgroundImage="url('images/back/silenthill_skin.jpg')";
	document.body.style.backgroundAttachment="fixed";
	document.body.style.backgroundRepeat="no-repeat";
	document.body.style.backgroundPosition="50% 0%";
	fntch1.style.fontFamily="Tahoma";
	fntch2.style.fontFamily="Tahoma";
	fntch3.style.fontFamily="Tahoma";
	fntch4.style.fontFamily="Tahoma";
	fntch5.style.fontFamily="Tahoma";
	fntch6.style.fontFamily="Tahoma";
	}
	function Thm2()
	{
	document.body.style.backgroundImage="url('images/back/kingdoms-of-amalur_skin.jpg')";
	document.body.style.backgroundAttachment="fixed";
	document.body.style.backgroundRepeat="no-repeat";
	document.body.style.backgroundPosition="50% 0%";
	fntch1.style.fontFamily="Georgia";
	fntch2.style.fontFamily="Georgia";
	fntch3.style.fontFamily="Georgia";
	fntch4.style.fontFamily="Georgia";
	fntch5.style.fontFamily="Georgia";
	fntch6.style.fontFamily="Georgia";
	
	}
	function Thm3()
	{
	document.body.style.backgroundImage="url('images/back/risen2_skin.jpg')";
	document.body.style.backgroundAttachment="fixed";
	document.body.style.backgroundRepeat="no-repeat";
	document.body.style.backgroundPosition="50% 0%";
	}
	
	
	function Thm4()
	{
	document.body.style.backgroundImage="url('images/back/MP3_skin.jpg')";
	document.body.style.backgroundAttachment="fixed";
	document.body.style.backgroundRepeat="no-repeat";
	document.body.style.backgroundPosition="50% 0%";
	}
	
	function Thm5()
	{
	document.body.style.backgroundImage="url('images/back/bglines.png')";
	document.body.style.backgroundRepeat="repeat";
	
	}
	
	function Thm6()
	{
	document.body.style.backgroundImage="url('images/back/COD_skin.jpg')";
	document.body.style.backgroundAttachment="fixed";
	document.body.style.backgroundRepeat="no-repeat";
	document.body.style.backgroundPosition="50% 0%";
	fntch1.style.fontFamily="helvetica neue";
	fntch2.style.fontFamily="helvetica neue";
	fntch3.style.fontFamily="helvetica neue";
	fntch4.style.fontFamily="helvetica neue";
	fntch5.style.fontFamily="helvetica neue";
	fntch6.style.fontFamily="helvetica neue";
	
	}
	
// Clock Script //

function clk()
	{
	var D=new Date();
	h=D.getHours();
	m=D.getMinutes();
	s=D.getSeconds();
	t=h+' : '+m+' : '+s;
	
	document.getElementById("clockP").innerHTML=t;
	setTimeout("clk()",1000);
	}

// Clock Script //

// Javascript for Cinema Starts

function dimF()
	{dimBack.style.visibility="visible";
	vidx.style.zIndex="50";
	}
	
	function show()
	{dimBack.style.visibility="Hidden";

	}



//Javascript for Cinema Ends <!--Desined By:Kush Kumar Sharma-->



// Script for DiscoverMore Tech Starts//

var I=0;
	function DTchangeL()
	{	
	I--;
	if(I<0)
	I=9;
	}
	function DTchangeR()
	{	
	I++;
	if(I>9)
	I=0;
	}
	function DTch()
	{if(I==0)
		document.getElementById('DTLimg').setAttribute('src','images/nav/tech-ipad.jpg');
	else if(I==1)
		document.getElementById('DTLimg').setAttribute('src','images/nav/tech-iphone.jpg');
	else if(I==2)
		document.getElementById('DTLimg').setAttribute('src','images/nav/tech-pc.jpg');
	else if(I==3)
		document.getElementById('DTLimg').setAttribute('src','images/nav/tech-ps-vita.jpg');
	else if(I==4)
		document.getElementById('DTLimg').setAttribute('src','images/nav/tech-wii-u.jpg');
	else if(I==5)
		document.getElementById('DTLimg').setAttribute('src','images/nav/tech-android.jpg');
	else if(I==6)
		document.getElementById('DTLimg').setAttribute('src','images/nav/tech-mac.jpg');
	else if(I==7)
		document.getElementById('DTLimg').setAttribute('src','images/nav/tech-ps3.jpg');
	else if(I==8)
		document.getElementById('DTLimg').setAttribute('src','images/nav/tech-xbox-360.jpg');
	else if(I==9)
		document.getElementById('DTLimg').setAttribute('src','images/nav/tech-ipod.jpg');
	}
	
	

// Script for DiscoverMore Tech Ends //



// Script for Console Top10 //
function vis(){
arw.style.visibility="visible";
document.getElementById('rankwidImg').setAttribute('src','Images/support/MassEffect3.jpg');

document.getElementById('RWTp1').innerHTML="Mass Effect";
document.getElementById('RWTp2').innerHTML="Game Stack Score : 9.2";

document.getElementById('RWTp3').innerHTML="Free Mass Effect 3: Extended Cut coming this summer EA named worst company in America by Consumerist. ";
}

function hid(){
arw.style.visibility="hidden";
}

function visA(){
arwA.style.visibility="visible";
document.getElementById('rankwidImg').setAttribute('src','Images/Support/Journey.jpg');

document.getElementById('RWTp1').innerHTML="Journey";
document.getElementById('RWTp2').innerHTML="Game Stack Score : 9.0";

document.getElementById('RWTp3').innerHTML="Journey is fastest-selling PSN game ever Journey studio losing key staffers - Report Aussie gaming exhibition to feature Kojima, Schafer, and more. ";
}

function hidA(){
arwA.style.visibility="hidden";
}

function visB(){
arwB.style.visibility="visible";
document.getElementById('rankwidImg').setAttribute('src','Images/Support/SSX.jpg');

document.getElementById('RWTp1').innerHTML="SSX";
document.getElementById('RWTp2').innerHTML="Game Stack Score : 9.2";

document.getElementById('RWTp3').innerHTML="FIFA Street fends off Raccoon City on UK Chart Shippin' Out February 26 - March 3: SSX, Binary Domain Asia Shippin' Out Feb. 26 - March 3: One Piece Kaizoku Musou. ";

}

function hidB(){
arwB.style.visibility="hidden";
}

function visC(){
arwC.style.visibility="visible";
document.getElementById('rankwidImg').setAttribute('src','Images/Support/DS2.jpg');

document.getElementById('RWTp1').innerHTML="Devil Survivor 2";
document.getElementById('RWTp2').innerHTML="Game Stack Score : 9.2";

document.getElementById('RWTp3').innerHTML="Shippin' Out February 26 - March 3: SSX, Binary Domain Big in Japan August 1-7: Kirby Mass Attack Big in Japan July 25-31: Rhythm Heaven. ";

}

function hidC(){
arwC.style.visibility="hidden";
}
function visD(){
arwD.style.visibility="visible";
document.getElementById('rankwidImg').setAttribute('src','Images/Support/Incoboto.jpg');

document.getElementById('RWTp1').innerHTML="Incoboto";
document.getElementById('RWTp2').innerHTML="Game Stack Score : 8.9";

document.getElementById('RWTp3').innerHTML="Free Mass Effect 3: Extended Cut coming this summer EA named worst company in America by Consumerist. ";

}

function hidD(){
arwD.style.visibility="hidden";
}
function visE(){
arwE.style.visibility="visible";
document.getElementById('rankwidImg').setAttribute('src','Images/Support/SFTx.jpg');

document.getElementById('RWTp1').innerHTML="SF vs Tekkn";
document.getElementById('RWTp2').innerHTML="Game Stack Score : 8.5";

document.getElementById('RWTp3').innerHTML="Extended Cut coming this summer EA named worst company in America by Consumerist. ";

}

function hidE(){
arwE.style.visibility="hidden";
}
function visF(){
arwF.style.visibility="visible";
document.getElementById('rankwidImg').setAttribute('src','Images/Support/SineMora.jpg');

document.getElementById('RWTp1').innerHTML="SineMora";
document.getElementById('RWTp2').innerHTML="Game Stack Score : 8.5";

document.getElementById('RWTp3').innerHTML="Capcom defends on-disc DLC - Report Street Fighter producer stepping down Hackers unlock on-disc Street Fighter X Tekken DLC fighters. ";

}

function hidF(){
arwF.style.visibility="hidden";
}
function visG(){
arwG.style.visibility="visible";
document.getElementById('rankwidImg').setAttribute('src','Images/Support/Nexuiz.jpg');

document.getElementById('RWTp1').innerHTML="Nexuiz";
document.getElementById('RWTp2').innerHTML="Game Stack Score : 8.4";

document.getElementById('RWTp3').innerHTML="Sine Mora due March 21 on Xbox Live Gamescom 2011: Sine Mora Impressions Sine Mora taking wing this winter. ";

}

function hidG(){
arwG.style.visibility="hidden";
}
function visH(){
arwH.style.visibility="visible";
document.getElementById('rankwidImg').setAttribute('src','Images/Support/Stacking.jpg');

document.getElementById('RWTp1').innerHTML="Stacking";
document.getElementById('RWTp2').innerHTML="Game Stack Score : 8.2";

document.getElementById('RWTp3').innerHTML="Epic Games design director Cliff Bleszinski says unannounced franchise entry rumored to be on-rails Kinect game has been canned.. ";

}

function hidH(){
arwH.style.visibility="hidden";
}
function visI(){
arwI.style.visibility="visible";
document.getElementById('rankwidImg').setAttribute('src','Images/Support/IAmAlive.jpg');

document.getElementById('RWTp1').innerHTML="I Am Alive";
document.getElementById('RWTp2').innerHTML="Game Stack Score : 8.0";

document.getElementById('RWTp3').innerHTML="Visit the land of the dead, join a punk rock bar brawl and bend the laws of time to succeed where you have failed in these five indie games of PAX East 2012.. ";

}

function hidI(){
arwI.style.visibility="hidden";
}

// Script for Console Top10 Ends //
