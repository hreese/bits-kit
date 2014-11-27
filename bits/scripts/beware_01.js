// JavaScript Document

<!-- Skript gegen IE Link-Rahmen  
function init()
{
lnks = document.getElementsByTagName("a");
for(i=0; i<lnks.length; i++) {
lnks[i].onfocus = new Function("if(this.blur)this.blur()");
}
}
onload = init;
//-->
<!-- Mouse Over etc  
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
//-->
<!--Sichtbarkeit Ebenen
var lastdiv = null;
function switch_content( div )
{
if ( lastdiv )
{
document.getElementById( lastdiv ).style.display = 'none';
}
displayType = ( document.getElementById( div ).style.display == 'none' ) ? 'block' : 'none'; document.getElementById( div ).style.display = displayType;lastdiv = div;
} 

function off_content( div )
{
displayType = ( document.getElementById( div ).style.display == 'none' ) ? 'none' : 'none'; document.getElementById( div ).style.display = displayType;
}

function on_content( div )
{
displayType = ( document.getElementById( div ).style.display == 'block' ) ? 'block' : 'block'; document.getElementById( div ).style.display = displayType;
}
//-->
<!--Pulldown
function MM_jumpMenu(targ,selObj,restore){ //v3.0
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}
//-->
<!--Sichtbarkeit popup
function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}
//-->
