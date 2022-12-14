function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5aPrsa4Ql6B":
        Script1();
        break;
      case "5vUmEYtLKov":
        Script2();
        break;
      case "5X29dmoyhCt":
        Script3();
        break;
      case "5bhZVMhV4xf":
        Script4();
        break;
      case "5yG8oLlYRDf":
        Script5();
        break;
      case "6FsVmNmSdtq":
        Script6();
        break;
      case "5s4EGWPjOzb":
        Script7();
        break;
      case "5fawq6lxxkv":
        Script8();
        break;
      case "5xmd37IyoFx":
        Script9();
        break;
      case "6TUvkGNWp4f":
        Script10();
        break;
      case "6NULexUBelH":
        Script11();
        break;
      case "5gQqjqVgXyv":
        Script12();
        break;
      case "6CtKW6FfHnF":
        Script13();
        break;
      case "5mBiAfedi0A":
        Script14();
        break;
      case "6AXIm5H4V5I":
        Script15();
        break;
      case "627k5YdUBIS":
        Script16();
        break;
      case "5dNCZGjjQd1":
        Script17();
        break;
      case "6dcdWGeA2Ri":
        Script18();
        break;
      case "6IZK3Np7x1g":
        Script19();
        break;
      case "6G3rfFXA3t2":
        Script20();
        break;
      case "6SEqmNHOCJr":
        Script21();
        break;
      case "5fu6zfDcrFs":
        Script22();
        break;
      case "6QFaWnvQhDW":
        Script23();
        break;
  }
}

function Script1()
{
  if(void 0===window.stencilsheets){var player=GetPlayer(),targlink="https://cluelabs.com/stencil/display/widget-sheets-init-v2?authtool=sl&v=1671013284&chart=NzUzfDM1NjJ8NjliZDhlNzExYWRhM2E1OTMyNDc0NGVmOWQ2NTQ5ZjE";xhttp=new XMLHttpRequest,xhttp.onreadystatechange=function(){if(4==this.readyState&&200==this.status&&""!=this.responseText){var e=this.responseText,t=document.getElementsByTagName("head")[0],n=document.createElement("script");t.appendChild(n),n.appendChild(document.createTextNode(e)),window.stencilsheets=!0}},xhttp.open("GET",targlink,!0),xhttp.send()}
        
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
SheetsSet('בלגיה', player.GetVar('תשובה_בלגיה'));
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
SheetsSet('יוסטון', player.GetVar('תשובה_יוסטון'));
}

function Script17()
{
  var player = GetPlayer();
SheetsSet('מונטריאול', player.GetVar('תשובה_מונטריאול'));
}

function Script18()
{
  var player = GetPlayer();
SheetsSet('מילאנו', player.GetVar('תשובה_מילאנו'));
}

function Script19()
{
  var player = GetPlayer();
SheetsSet('מקסיקו', player.GetVar('תשובה_מקסיקו'));
}

function Script20()
{
  var player = GetPlayer();
SheetsSet('צרפת', player.GetVar('תשובה_צרפת'));
}

function Script21()
{
  var player = GetPlayer();
SheetsSet('קליבלנד', player.GetVar('תשובה_קליבלנד'));
}

function Script22()
{
  var player = GetPlayer();
SheetsSet('רומא', player.GetVar('תשובה_רומא'));
}

function Script23()
{
  var player = GetPlayer();
SheetsSet('ריו', player.GetVar('תשובה_ריו'));
}

