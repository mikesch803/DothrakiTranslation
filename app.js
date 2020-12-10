var inputText = document.querySelector('#input-txt');
var translateBtn = document.querySelector('#translate-btn');
var outputText = document.querySelector('#output-txt');

//server
var server ="https://api.funtranslations.com/translate/dothraki.json";

//errorhandler

//translatedurl
function dothrakiURL(text)
{
    return server + "?" +"text=" +text;
}

function clickeventHandler()
{
    var input =inputText.value;
    fetch(dothrakiURL(input))
        .then (response => response.json())
        .then (json => {
            var translatedTxt = json.contents.translated
            outputText.innerText = translatedTxt
        })
    
};

translateBtn.addEventListener("click", clickeventHandler);