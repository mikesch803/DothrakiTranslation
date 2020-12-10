var inputText = document.querySelector('#input-txt');
var translateBtn = document.querySelector('#translate-btn');
var outputText = document.querySelector('#output-txt');

//server
var server ="https://api.funtranslations.com/translate/dothraki.json";

//errorhandler
function errorHandler() {
    console.log('error occured',error)
    alert('Server is down. Please try after some time. ')
}

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
        .catch(errorHandler)

};

translateBtn.addEventListener("click", clickeventHandler);