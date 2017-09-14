var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;

//ako kliknemo na startreset dugme
document.getElementById("startreset").onclick = function(){
    //ako igramo
    if(playing == true) {
        location.reload();    //reload strane
    }else{         //ako ne igramo
        //menja mod u igru
        playing = true;
        // vracanje scora na 0
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;
        //pokazi odbrojavanje
        document.getElementById("timeremaining").style.display = "block";
        timeremaining = 60;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        //sakrij game over box
        document.getElementById("gameOver").style.display = "none";
        //promena dugmeta u reset
        document.getElementById("startreset").innerHTML = "Reset igre";
        //pocetak odbrojavanja, zovemo funkciju koju dole obradimo
        startCountdown();
        //napravi novi Q&A
        generateQA();
    }
}

//kliktanje na odgovore
for(i=1; i<5; i++){
    document.getElementById("box"+i).onclick = function(){
    //proveri dal igramo
    if(playing == true){
        if(this.innerHTML == correctAnswer){
            score++;
            document.getElementById("scorevalue").innerHTML = score;
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");
            },1000);
            //novo pitanje
            generateQA();
        }else{
            hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");
            },1000);    
        }
    }
}
}



function startCountdown(){
    action = setInterval(function(){
        timeremaining -= 1;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        if (timeremaining == 0){
            stopcountdown();
            document.getElementById("gameOver").style.display = "block";
            document.getElementById("gameOver").innerHTML = "<p>Game over</p><p>Tvoj skor je " + score + ".</p>";
            document.getElementById("timeremaining").style.display = "none";
            document.getElementById("correct").style.display = "none";
            document.getElementById("wrong").style.display = "none";
            playing = false;
            document.getElementById("startreset").innerHTML = "Start"
        }
    }, 1000);
}

function stopcountdown(){
    clearInterval(action);
}

function hide(Id){
    document.getElementById(Id).style.display = "none";
}

function show(Id){
    document.getElementById(Id).style.display = "block";
}


function generateQA(){
    var x = 1+ Math.round(9*Math.random())
    var y = 1+ Math.round(9*Math.random())
    correctAnswer = x*y;
    document.getElementById("question").innerHTML = x + "x" + y;
    var correctPosition = 1+ Math.round(3*Math.random());
    document.getElementById("box"+correctPosition).innerHTML = correctAnswer //da nasumicno odgovor udje u jedan box
    //za netacne odgovore
    var answers = [correctAnswer]
    for(i=1; i<5; i++ ){
        if(i != correctPosition) {
            var wrongAnswer; 
            do{wrongAnswer = (1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random()))}  //netacan odgovor
               while(answers.indexOf(wrongAnswer)>-1)
           
            document.getElementById("box"+i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}





//ako kliknemo na startreset dugme
    //ako igramo
        //reload strane
    //ako ne igramo
        //skor nazad na 0
        //pokazi odbrojavanje
        //odbrojavaj po 1s u loopovima
            //preostalo vreme
                  //DA - nastavi
                  //NE - game over
        //promeni dugme u reset
        //napravi novi Q&A
    
//ako kliknemo na answer dugme
    //ako igramo
        //ispravno?
           //DA
               //povecaj skor
               //pokazi znak ispravno na 1s
               //pravi novi Q&A
           //NE
               //prikazi box "probaj ponovo" na 1s

























