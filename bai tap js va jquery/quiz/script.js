
    let myQuestions = [
        {
            question: "1. Who plays Captain America in Marvel's movies?",
            answers:{
                A: "Chris Hemsworth",
                B: "Chris Patt",
                C: "Chris Evans",
                D: "Chris Brown"

            },
            correctAnswer: "C"
        },
        {
            question: "2. What is the real name of the Iron Man?",
            answers:{
                A: "Tony Stark",
                B: "Tony Rogers",
                C: "Tony Fury",
                D: "Tony Potts"
            },
            correctAnswer: "A"
        },
        {
            question: "3. Who is Thor's lover?",
            answers:{
                A: "Loki, definitely",
                B: "Hulk",
                C: "Jane Foster",
                D: "Odin"
            },
            correctAnswer: "A"
        },
        {
            question: "4. Who is Steve Rogers's childhood friend?",
            answers:{
                A: "Natasha Romanoff",
                B: "Bucky Barnes",
                C: "Bruce Banner",
                D: "Peter Parker"
            },
            correctAnswer: "B"
        },
        {
            question: "5. Where is Black Widow from?",
            answers:{
                A: "The United States",
                B: "Belarus",
                C: "Ukraine",
                D: "Soviet Union"
            },
            correctAnswer: "D"
        },
        {
            question: "6. Who were Thor and Loki finding when they met Doctor Strange in New York?",
            answers:{
                A: "Odin",
                B: "Thanos",
                C: "Hulk",
                D: "Nick Fury"
            },
            correctAnswer: "A"
        },
        {
            question: "7. What is Captain America's shield made of?",
            answers:{
                A: "Platinum",
                B: "Titanium",
                C: "Vibranium",
                D: "Uranium"
            },
            correctAnswer: "C"
        },
        {
            question: "8. What is Hawkeye's weapon?",
            answers:{
                A: "Hammer",
                B: "Arrow",
                C: "Gun",
                D: "Sword"
            },
            correctAnswer: "B"
        },
        {
            question:"9. Who is Quicksilver and Scarlet Witch's father?",
            answers:{
                A: "Wolverine",
                B: "Travis",
                C: "Xavier",
                D: "Magneto"
            },
            correctAnswer: "D"
        },
        {
            question: "10. Who is the most handsome man in Marvel Cinematic Universe?",
            answers:{
                A: "Loki, of course!",
                B: "Captain America, for God's sake!",
                C: "Who else but Thor???",
                D: "Kidding me? That must be Tony Stark!"
            },
            correctAnswer: "A"
        }
    ];
    let quiz = document.getElementById("quiz");
    let result = document.getElementById("results");
    let submit = document.getElementById("submit");
    let playagain = document.getElementById("again");


    displayQuiz(myQuestions, quiz, result, submit);
    function displayQuiz(myQuestions, quiz, result, submit){
    function showQuestions(myQuestions, quiz){
        let output = [];
        let answers;
        for (i = 0; i<myQuestions.length; i++){
            answers = [];
        
        for (letter in myQuestions[i].answers){
            answers.push(
                '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + myQuestions[i].answers[letter]
                    + '</label>'

            );
        }
        output.push(
            '<div class="content"> <div class="questions">' + myQuestions[i].question + '</div>' + '<div class="answers">' +
            answers.join('') + '</div> </div>'
        );
    }
    quiz.innerHTML = output.join('');
    again.style.display="none";
    }


    function showResults (myQuestions, quiz, result){
        let allanswers = quiz.querySelectorAll('.answers');
        let playerAnswer = "";
        let numCorrect = 0;
        for (i=0; i<myQuestions.length; i++){
            playerAnswer = (allanswers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            if (playerAnswer === myQuestions[i].correctAnswer){numCorrect++; allanswers[i].style.color = 'lightgreen';}
            else {allanswers[i].style.color = 'red'
            // allanswers[i].classList.add('wrong-answer')}; 
            }
        
        if (numCorrect === myQuestions.length){window.location.href="chucmung.html";
        playagain.style.display = "none";}
        else{result.innerHTML = "&nbsp&nbsp You got " + (myQuestions.length - numCorrect) 
            + " out of " + myQuestions.length + " wrong!";
            playagain.style.display = "inline-block";
            playagain.onclick = function scroll(){
                window.scrollTo(0, 0);}
            }
    }
    }
    showQuestions(myQuestions, quiz);
    submit.onclick = function(){
        showResults(myQuestions, quiz, result);
    };
    
    }