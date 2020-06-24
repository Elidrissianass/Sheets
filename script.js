let params = {active: true, currentWindow: true}
let Dices =
{
  d20 : "/roll d20",
  d100: "/roll d100"
}


document.getElementById("user").onclick = function() {writeData()};
function writeData() 
{
  chrome.tabs.query(params, gotTabs);
  function gotTabs(tabs)
  {chrome.tabs.sendMessage(tabs[0].id,Dices.d20);}
}
