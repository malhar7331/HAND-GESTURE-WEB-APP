prediction_1 = ""
prediction_2 = ""

Webcam.set({
    width:400,
    height:350,
    crop_width:350,
    crop_height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:',ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/16HJvGQLd/model.json',modelLoaded);

function modelLoaded()
{console.log("Model Loaded!!")}
