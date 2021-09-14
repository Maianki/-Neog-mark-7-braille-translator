var btnTranslate = document.querySelector(".btn-translate")
var textInput = document.querySelector(".text-input")
var outputArea = document.querySelector(".output-area")

var APIurl = "https://api.funtranslations.com/translate/braille.json"

//function to generate translationURL using API 
function translationURL(userInput){
    return APIurl+"?text="+userInput
}


//function to handle error
function errorHandler(error){
    console.log(error)
    alert("Something went wrong! Please Try Again After Sometime.")
}

//Function to translate userText to braille
function translateToBraille(){
    fetch(translationURL(textInput.value))
    .then((response)=>response.json())
    .then((json)=>{
        var translatedText = json.contents.translated
        outputArea.innerText = translatedText
    })
    .catch(errorHandler)
}

//calling addEventListner whenever button is clicked
btnTranslate.addEventListener('click',translateToBraille)