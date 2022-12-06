function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6B0hik0RGKt":
        Script1();
        break;
  }
}

function Script1()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/a/macros/bna.org.il/s/AKfycbzDz8QePBYeisLr1IbfqhgVfek-SxuGinWuAfZ9hpQimrQ0YD-1pf0zYUZjDGeUUJWscQ/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "TimeStamp" : new Date().toJSON().slice(0,10), //STORE DATE
 "שם" : player.GetVar("שם"),
 "טלפון" : player.GetVar("טלפון"),
 "סניפים" : player.GetVar("סניפים"),
 "מחוז" : player.GetVar("מחוז")
 }
//DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
 
//Export to Google
$.ajax({
url:"https://script.google.com/a/macros/bna.org.il/s/AKfycbzDz8QePBYeisLr1IbfqhgVfek-SxuGinWuAfZ9hpQimrQ0YD-1pf0zYUZjDGeUUJWscQ/exec",
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
},
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);

}

