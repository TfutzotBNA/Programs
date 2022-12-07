function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5e9dxxbQZFH":
        Script1();
        break;
  }
}

function Script1()
{
  // Replace this URL with your Web App URL
const url = "https://script.google.com/macros/s/AKfycbz1jcLdPAKCJHVAia7BwL9-UgnAxfVEcAY8jnS8ydRig6SXMG-naM3CA6Ryu-ix6QpJuw/exec";

const player = GetPlayer();
let feedBack = player.GetVar("name"); // Replace "UserFeedback" with your Storyline Variable.

fetch(url,{
  method: 'POST',
  mode: 'no-cors', 
  cache: 'no-cache', 
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({text: feedBack}) 
});
}

