function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6XSUqZrHLsq":
        Script1();
        break;
      case "6paFyi4aInY":
        Script2();
        break;
      case "6gWpVP61Tyv":
        Script3();
        break;
      case "60oH2JzBZqI":
        Script4();
        break;
      case "5sgBcHH8E2V":
        Script5();
        break;
      case "5UgaDDJ7i4e":
        Script6();
        break;
      case "5iv5qLWpGrC":
        Script7();
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
SheetsSet('סניף', player.GetVar('snif'));

}

function Script4()
{
  var player = GetPlayer();
SheetsSet('מחוז', player.GetVar('district'));

}

function Script5()
{
  var player = GetPlayer();
SheetsSet('טלפון', player.GetVar('Tel'));

}

function Script6()
{
  var player = GetPlayer();
SheetsSet('שם', player.GetVar('name'));

}

function Script7()
{
  var player = GetPlayer();
SheetsSet('סניף', player.GetVar('snif'));

}

