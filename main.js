var SpeechRecognition = window.webkitSpeechRecongnition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;

    speak();
}

function speak() {
    fala = window.speechSynthesis;
    fraseResposta = "Tirando sua selfie em 5 segundos";
    falar = new SpeechSynthesisUtterance(fraseResposta);
    fala.speak(falar);
    Webcam.attach(camera);
    
}
