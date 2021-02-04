

var ans;
var allAnswers = [];

function fetchHtmlData(){
  
  var disp = document.getElementById('question');
  var x = document.getElementById('click');
  x.play();

  var sw1 = document.getElementById("switch1");
  sw1.style.display = "none";
  var sw2 = document.getElementById("questions");
  sw2.style.display = "block";

fetch("http://localhost:8080/topic/math/get").then(res => res.json()).then(questions => {
  console.log("Response from network",questions);
    var i = 0;
    var allQuestions = "";
    
    questions.forEach(item =>{
      console.log("Object -->",item);
      var j = questions.indexOf(item);
      var displayStyle = i === 0 ? "block" : "none";
      var question = "<div id=\"question" + i + "\" style=\"display: " + displayStyle + ";\">" +
      "<p id=\"question\">" + item.question + "</p>" +
        "<ul>" +
          "<li><p id=\"0\" class=\"answer\" onclick=\"answerSelected("+j+",0)\">" + item.choices[0] + "</p></li>" +
          "<li><p id=\"1\" class=\"answer\" onclick=\"answerSelected("+j+",1)\">" + item.choices[1] + "</p></li>" +
          "<li><p id=\"2\" class=\"answer\" onclick=\"answerSelected("+j+",2)\">" + item.choices[2] + "</p></li>" +
          "<li><p id=\"3\" class=\"answer\" onclick=\"answerSelected("+j+",3)\">" + item.choices[3] + "</p></li>" +
        "</ul>" +
        "<a class=\"btn\" href=\"#\" onclick=\"displayNext('" + ++i + "')\">Next</a></div>" +
      "</div>";
      allQuestions += question;
      console.log("displaying question no: ",i);
    });
    document.getElementById("questions").innerHTML = allQuestions;
});

}

function displayNext(index) {
  document.getElementById("question" + (index - 1)).style.display = "none";
  document.getElementById("question" + index).style.display = "block";
}


function answerSelected(qIndex,value){
  var x = document.getElementById(value);
  x.style.background = '#2b7a78';
  ans = x.innerHTML;
  console.log("Selected q",qIndex);
  allAnswers[qIndex] = ans;
  for(var i =0;i<4;i++){
    if(i!=value){
      document.getElementById(i).style.background = '#feffff'
      
    }
  }
  
}

function validate(){
  console.log("validate");
  var x = document.getElementById("name").value;
  if(x < 1){
    alert("Please enter your Name");
    var y = document.getElementById("start");
    y.href="";
  }
  
}

