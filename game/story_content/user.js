function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5hIdNVfQ3Kz":
        Script1();
        break;
      case "6ELKBmDV9vi":
        Script2();
        break;
      case "6BR9nYJzgkH":
        Script3();
        break;
      case "6VItzVsVYTj":
        Script4();
        break;
      case "6F10ZJk1fsR":
        Script5();
        break;
      case "6MPV2ipPiKx":
        Script6();
        break;
      case "5iNkUOgdxXO":
        Script7();
        break;
      case "6K3gshq2P41":
        Script8();
        break;
      case "5Y6suAjcpHC":
        Script9();
        break;
  }
}

function Script1()
{
  if(void 0===window.stencilsheets){var player=GetPlayer(),targlink="https://cluelabs.com/stencil/display/widget-sheets-init-v2?authtool=sl&v=1670346495&chart=NzE4fDM1NDl8ZDU4NWVjYTY5MzA4NGRmYmY5ZmYzMjg2NjU4YzYyYzQ";xhttp=new XMLHttpRequest,xhttp.onreadystatechange=function(){if(4==this.readyState&&200==this.status&&""!=this.responseText){var e=this.responseText,t=document.getElementsByTagName("head")[0],n=document.createElement("script");t.appendChild(n),n.appendChild(document.createTextNode(e)),window.stencilsheets=!0}},xhttp.open("GET",targlink,!0),xhttp.send()}
        
}

function Script2()
{
  var player = GetPlayer();
SheetsSet('שם', player.GetVar('name'));

}

function Script3()
{
  var player = GetPlayer();
SheetsSet('טלפון', player.GetVar('Tel'));

}

function Script4()
{
  var player = GetPlayer();
SheetsSet('סניף', player.GetVar('snif'));

}

function Script5()
{
  var player = GetPlayer();
SheetsSet('עיר', player.GetVar('city'));

}

function Script6()
{
  var player = GetPlayer();
SheetsSet('מחוז', player.GetVar('district'));

}

function Script7()
{
  var today = new Date();
var date=today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
//var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

var dateTime = date+' '+time;

SheetsSet('תאריך הרשמה', dateTime);

}

function Script8()
{
  var player = GetPlayer();
SheetsSet('שם', player.GetVar('name'));

}

function Script9()
{
  var player = GetPlayer();
SheetsSet('סניף', player.GetVar('snif'));

}

