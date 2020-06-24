console.log("content");

chrome.runtime.onMessage.addListener(gotroll);
function gotroll(dices, sender, sendResponse)
{
    let rollhost = document.getElementsByTagName("textarea");
    for (elt of rollhost)
    {
        console.log(dices);
        if(elt.className === "ui-autocomplete-input")
        { elt.value = dices;}
    }
}