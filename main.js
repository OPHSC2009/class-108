

function startClassification(){
navigator.mediaDevices.getUserMedia({audio:true})
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/p-pYTxQ1G/model.json",modelReady);
}

function modelReady(){
classifier.classify(gotResults);

}

function gotResults(error,results){
if(error){
    console.log(error)
}
else{
    console.log(results)
    document.getElementById("result_label").innerHTML="I can hear: "+results[0].label;
    document.getElementById("result_accuracy").innerHTML="Accuracy: "+((results[0].confidence)*100).toFixed(2)+"%";
    r=Math.floor(Math.random()*255);
    b=Math.floor(Math.random()*255);
    g=Math.floor(Math.random()*255);

    document.getElementById("result_label").style.color="rgb(" +r+","+g+","+b+")";
    document.getElementById("result_accuracy").style.color="rgb(" +r+","+g+","+b+")";

    img_1=document.getElementById("alien_1");
    img_2=document.getElementById("alien_2");
    img_3=document.getElementById("alien_3");
    img_4=document.getElementById("alien_4");

    if (results[0].label=="Clap"){
        img_1.src="aliens-01.gif"
        img_2.src="aliens-02.png"
        img_3.src="aliens-03.png"
        img_4.src="aliens-04.png"

    }
    else if(results[0].label=="Rock Music"){
        img_2.src="aliens-02.gif"
        img_1.src="aliens-01.png"
        img_3.src="aliens-03.png"
        img_4.src="aliens-04.png"
    }
    else if(results[0].label=="Soothing Music"){
        img_3.src="aliens-03.gif"
        img_2.src="aliens-02.png"
        img_1.src="aliens-01.png"
        img_4.src="aliens-04.png"

    }
    else{
        img_4.src="aliens-04.gif"
        img_2.src="aliens-02.png"
        img_3.src="aliens-03.png"
        img_1.src="aliens-01.png"
    }
}

}

