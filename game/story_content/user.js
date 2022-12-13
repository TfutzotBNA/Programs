function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6fdzyuRwcCu":
        Script1();
        break;
      case "6Cbqt6UZU6r":
        Script2();
        break;
      case "6Qpv0XXWgxK":
        Script3();
        break;
      case "6CIN3h1iW8r":
        Script4();
        break;
      case "5jkBYLsQzGf":
        Script5();
        break;
      case "6UaXzgwYHBI":
        Script6();
        break;
  }
}

function Script1()
{
  if(void 0===window.stencilsheets){var player=GetPlayer(),targlink="https://cluelabs.com/stencil/display/widget-sheets-init-v2?authtool=sl&v=1670694374&chart=NzMyfDM1NjF8OGFhODgzZThjY2EwZmZmNDQ5ODRlYTI4YWRlNGVmMmE";xhttp=new XMLHttpRequest,xhttp.onreadystatechange=function(){if(4==this.readyState&&200==this.status&&""!=this.responseText){var e=this.responseText,t=document.getElementsByTagName("head")[0],n=document.createElement("script");t.appendChild(n),n.appendChild(document.createTextNode(e)),window.stencilsheets=!0}},xhttp.open("GET",targlink,!0),xhttp.send()}
        
        
}

function Script2()
{
  var player = GetPlayer();
SheetsSet('אוסטריה', player.GetVar('תשובה_אוסטריה'));
}

function Script3()
{
  var player = GetPlayer();
SheetsSet('אטלנטה', player.GetVar('תשובה_אטלנטה'));
}

function Script4()
{
  var player = GetPlayer();
SheetsSet('בלגיה', player.GetVar('בלגיה_תשובה'));
}

function Script5()
{
  var player = GetPlayer();
SheetsSet('בלגיה', player.GetVar('בלגיה_תשובה'));
}

function Script6()
{
  var player = GetPlayer();
SheetsSet('בלגיה', player.GetVar('בלגיה_תשובה'));
}

