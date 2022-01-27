function check(){
    var c=0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var q5=document.quiz.question5.value;
    var result=document.getElementById("result");
    var quiz=document.getElementById("quiz");
    if(q1=="JavaScript"){c++; } 
    if(q2=="Agra"){c++; } 
    if(q3=="Delhi"){c++; } 
    if(q4=="CoronaVirus"){c++; } 
    if(q5=="07"){c++; } 
    quiz.style.display="none";
    
    if(c>=4){
        result.textContent=" Result : Yes"+"("+c+")";
    } else if(c<=3 && c>=2){
        result.textContent=" Result : Maybe"+"("+c+")";
    } else{
        result.textContent=" Result : No"+"("+c+")";
    }
  }