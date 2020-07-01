console.log("content");

chrome.runtime.onMessage.addListener(gotroll);
function gotroll(dices, sender, sendResponse)
{
    let textarea = document.getElementsByTagName("textarea");
    console.log(dices);
    for (elt of textarea)
    {
        if(elt.className === "ui-autocomplete-input")
        { 
            elt.value = dices;
            var nani = document.querySelector('#textchat-input .btn');
            nani.click();
        }
    }
}