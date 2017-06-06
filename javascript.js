var question = [["The usual width of parapet walls along Highways in hilly region, is", "50 cm", "60 cm", "70 cm", "100 cm", 2],
               ["Design of horizontal and vertical alignments, super-elevation, sight distance and grades, is worst affected by", "width of the vehicle", "length of the vehicle", "height of the vehicle", "speed of the vehicle", 4],
               ["Thickness of a pavement may be reduced considerably by", "compaction of soil","stabilisation of soil",  "drainage of soil", "combination of all the above.", 4],
               ["For the movement of vehicles at an intersection of two roads, without any interference, the type of grade separator generally preferred to, is",  "delta", "trumpet", "diamond interchange", "clover leaf.", 4],
               ["Road makers along roads from the edge of a kerb should not be less than", "40 cm", "45 cm", "60 cm", "55 cm", 3]];


var score = 0;
var quesNum = 0;

function displayQuiz(){

var quest = document.getElementById("question");
quest.innerHTML = question[quesNum][0];

  for(j=1; j<=4; j++){
     var opt = document.getElementById("choice"+j);
     opt.innerHTML = question[quesNum][j];

 }

}

(function () {
    displayQuiz();
})();

  function validat(item){
       
       if(item === "choice"+question[quesNum][5]){

       	score++;
       }

       if(item === "btn"+question[quesNum][5]){

       	score++;
       }

         if(quesNum === 4){
        	var mainBody = document.getElementById("quiz");
        	mainBody.innerHTML = "<h1>"+"Your Score is:"+ score+"/5"+"</h1>"+"<p>"+"The usual width of parapet walls along Highways in hilly region, is 60 cm"+ "</p>"+"<p>"+"Design of horizontal and vertical alignments, super-elevation, sight distance and grades, is worst affected by speed of the vehicle"+ "</p>";
       
        

        }

        quesNum++;

        
     }

var theParent = document.getElementById("buttons");
theParent.addEventListener("click", listenMe, false);
 
function listenMe(e) {
    if (e.target !== e.currentTarget) {
        var clickedItem = e.target.id;
        validat(clickedItem);
    }
    e.stopPropagation();
    if(quesNum < 5){
    displayQuiz();}
}
`