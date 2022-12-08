function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5XW0kXHZQeC":
        Script1();
        break;
      case "617frgpDiKo":
        Script2();
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
SheetsSet('סניף', player.GetVar('snif'));
SheetsSet('מחוז', player.GetVar('district'));
SheetsSet('טלפון', player.GetVar('Tel'));
}

