prediction1=""
prediction2=""
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function  takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image"  src="'+data_uri+'"/>';
    });
}
console.log('ml5 version',ml5.version)
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/7oQfhUl3R/model.json',modelLoaded);
function  modelLoaded(){
    console.log('model loaded');
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data1="The first prediction is"+  prediction1;
    speak_data2="The second prediction is"+ prediction2;
    var utterThis = new SpeechSynthesisUtterance(speak_data1 + speak_data2);  
    synth.speak(utterThis);
}
function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_gesture_name").innerHTML=results[0].label;
        document.getElementById("result_gesture_name1").innerHTML=results[1].label;
        prediction1=results[0].label;
        prediction2=results[1].label;

    speak();
    if(prediction1=="ok"){
        document.getElementById("updategesture").innerHTML="&#128076;";
    }
    if(prediction1=="thumbs up"){
        document.getElementById("updategesture").innerHTML="&#128077;";
    }
    if(prediction1=="victory"){
        document.getElementById("updategesture").innerHTML="&#9996;";
    }
    if(prediction1=="fingers crossed"){
        document.getElementById("updategesture").innerHTML="&#129310;";
    }
    if(prediction1=="stop"){
        document.getElementById("updategesture").innerHTML="&#9995;";
    }
    if(prediction1=="fingers crossed"){
        document.getElementById("updategesture").innerHTML="&#129310;";
    }
    
    
    if(prediction2=="ok"){
        document.getElementById("updategesture").innerHTML="&#128076;";
    }
    if(prediction2=="thumbs up"){
        document.getElementById("updategesture").innerHTML="&#128077;";
    }
    if(prediction2=="victory"){
        document.getElementById("updategesture").innerHTML="&#9996;";
    }
    if(prediction2=="fingers crossed"){
        document.getElementById("updategesture").innerHTML="&#129310;";
    }
    if(prediction2=="stop"){
        document.getElementById("updategesture").innerHTML="&#9995;";
    }
    if(prediction2=="fingers crossed"){
        document.getElementById("updategesture").innerHTML="&#129310;";
    }
    
    }
}