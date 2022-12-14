function ExecuteScript(strId)
{
  switch (strId)
  {
      case "67cwtTs6Rst":
        Script1();
        break;
      case "6p85NjhgUV5":
        Script2();
        break;
      case "6RG72P2tgZa":
        Script3();
        break;
      case "6gSQr7R2ZKe":
        Script4();
        break;
      case "5bTLHHMrCWi":
        Script5();
        break;
      case "6YFe358T21d":
        Script6();
        break;
      case "6d2vc3ZCnSS":
        Script7();
        break;
      case "5a1DFQ5NPPb":
        Script8();
        break;
      case "5Wuuh2bMqaU":
        Script9();
        break;
      case "5bX6XMxXAmV":
        Script10();
        break;
      case "5ZoMbhjSOuF":
        Script11();
        break;
      case "5gHhWQmdFrq":
        Script12();
        break;
      case "5mVc8KmqGZe":
        Script13();
        break;
      case "6DnQsoTlahe":
        Script14();
        break;
      case "5zTzd5PJhXc":
        Script15();
        break;
      case "5xk71pXzGc9":
        Script16();
        break;
      case "5i3BnSgpjkO":
        Script17();
        break;
      case "6Iqbe8ZK7j9":
        Script18();
        break;
      case "6aY7xDdGjsz":
        Script19();
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

