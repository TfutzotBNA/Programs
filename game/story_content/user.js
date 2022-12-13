function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5Xp9bQrsLAc":
        Script1();
        break;
      case "66NIRn5fv2L":
        Script2();
        break;
      case "5VgImtQHsP4":
        Script3();
        break;
      case "6dX2CoTseDE":
        Script4();
        break;
      case "6WYxrme7U4S":
        Script5();
        break;
      case "5qCmqyIt5um":
        Script6();
        break;
      case "6RNSTJ7a67N":
        Script7();
        break;
      case "5jL62j4yQQ3":
        Script8();
        break;
      case "6ljjXUoUche":
        Script9();
        break;
      case "6RgeDS4xLyB":
        Script10();
        break;
      case "6G7mI0WXCO5":
        Script11();
        break;
      case "6E8qQQXa2wG":
        Script12();
        break;
      case "6UkOy1m3TbF":
        Script13();
        break;
      case "6VyHZRXnCHi":
        Script14();
        break;
      case "6T8njNLKZHR":
        Script15();
        break;
      case "5mD5mDElsOo":
        Script16();
        break;
      case "6YhOzCaTfEM":
        Script17();
        break;
      case "6SSmoCJz52V":
        Script18();
        break;
      case "6fxOEe3I3mh":
        Script19();
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
  var today = new Date();
var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

SheetsSet('תאריך הרשמה', dateTime);
}

function Script7()
{
  var player = GetPlayer();
SheetsSet('מחוז', player.GetVar('district'));
}

function Script8()
{
  var player = GetPlayer();
SheetsSet('אוסטריה', player.GetVar('תשובה_אוסטריה'));
}

function Script9()
{
  var player = GetPlayer();
SheetsSet('אטלנטה', player.GetVar('תשובה_אטלנטה'));
}

function Script10()
{
  var player = GetPlayer();
SheetsSet('בלגיה', player.GetVar('בלגיה_תשובה'));
}

function Script11()
{
  var player = GetPlayer();
SheetsSet('בריטניה', player.GetVar('תשובה_בריטניה'));
}

function Script12()
{
  var player = GetPlayer();
SheetsSet('גרמניה', player.GetVar('תשובה_גרמניה'));
}

function Script13()
{
  var player = GetPlayer();
SheetsSet('דטרויט', player.GetVar('תשובה_דטרויט'));
}

function Script14()
{
  var player = GetPlayer();
SheetsSet('דרום אפריקה', player.GetVar('תשובה_דרוםאפריקה'));
}

function Script15()
{
  var player = GetPlayer();
SheetsSet('הולנד', player.GetVar('תשובה_הולנד'));
}

function Script16()
{
  var player = GetPlayer();
SheetsSet('הונג קונג', player.GetVar('תשובה_הונגקונג'));
}

function Script17()
{
  var player = GetPlayer();
SheetsSet('טורונטו', player.GetVar('תשובה_טורונטו'));
}

function Script18()
{
  var player = GetPlayer();
SheetsSet('יוסטון', player.GetVar('תושה_יוסטון'));
}

function Script19()
{
  var player = GetPlayer();
SheetsSet('מונטריאול', player.GetVar('תשובה_מונטריאול'));
}

