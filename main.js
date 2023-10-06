var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new window.webkitSpeechRecognition();

function start() {
    document.getElementById("textBox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function (event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textBox").innerHTML = Content;
    speak();
}

function speak() {
    synth = window.speechSynthesis;
    speak_data = document.getElementById("textBox").innerHTML;
    utterthis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
}

WebKitCSSMatrix.set({
    width: 360,
    height: 250,
    image_format: "png",
    png_quality: 90
});
camera = document.getElementById("camera");