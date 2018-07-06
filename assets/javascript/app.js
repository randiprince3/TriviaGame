var questionArea = $("#quiz");

// Object of questions

var questions = [{
    question: "In which year was Chicago founded as a city?",
    answers: ["1842 ", "1833 ", "1832 ", "1839"],
    correctAnswer: "1833"
}, {
    question: "What food is Chicago famously known for?",
    answers: ["Sushi ", "Burgers ", "Barbeque ", "Deep Dish Pizza"],
    correctAnswer: "Deep Dish Pizza"
}, {
    question: "Which Great Lake are Chicago's beaches on?",
    answers: ["Lake Michigan ", "Lake Erie ", "Lake Ontario ", "Lake Huron"],
    correctAnswer: "Lake Michigan "
}, {
    question: "What is the nickname given to Chicago?",
    answers: ["Mile High City ", "The Big Easy ", "The Windy City ", "City of Brotherly Love "],
    correctAnswer: "The Windy City "
}, {
    question: "Who is a well known rapper from Chicago?",
    answers: ["Jay-Z ", "Drake ", "Chance the Rapper ", "2Chainz"],
    correctAnswer: "Chance the Rapper "
}, {
    question: "A section of which Chicago Street is known as \"the magnificent mile?\"",
    answers: ["Cumberland Ave ", "Michigan Ave ", "State Street ", "Rush Street"],
    correctAnswer: "Michigan Ave "
}, {
    question: "What was the tallest building in Chicago, Willis Tower, previously known as?",
    answers: ["John Handcock ", "Aon Center ", "Trump Tower ", "Sears Tower"],
    correctAnswer: "Sears Tower"
}, {
    question: "Which movie isn't set in Chicago?",
    answers: ["Ferris Bueller's Day Off ", "I Am Legend ", "The Dark Knight ", "High Fidelity"],
    correctAnswer: "I Am Legend "
}, {
    question: "What was not invented in Chicago?",
    answers: ["The Internet ", "Zippers ", "Ferris Wheels ", "Twinkies "],
    correctAnswer: "The Internet "
}];

var timer;

var game = {

    correct: 0,
    incorrect: 0,
    counter: 120,

    countdown: function() {
        game.counter--;
        $("#count-number").html(game.counter);
        if (game.counter === 0) {
            console.log("Game's Over!");
            game.finished();
        }
    },

    start: function() {
        timer = setInterval(game.countdown, 1000);

        $("#quiz").prepend("<h2>Time Remaining: <span id='count-number'>120</span> seconds</h2>");

        $("#button").remove();

        for (var i = 0; i < questions.length; i++) {
            questionArea.append("<h2>" + questions[i].question + "</h2>");
            for (var j = 0; j < questions[i].answers.length; j++) {
                questionArea.append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
            }
        }
        questionArea.append("<br><br><button id='done'>Done</button>");
    },

    finished: function() {

        $.each($("input[name='question-0']:checked"), function(){
            if ($(this).val() === questions[0].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"), function(){
            if ($(this).val() === questions[1].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"), function(){
            if ($(this).val() === questions[2].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"), function(){
            if ($(this).val() === questions[3].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"), function(){
            if ($(this).val() === questions[4].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"), function(){
            if ($(this).val() === questions[5].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-6']:checked"), function(){
            if ($(this).val() === questions[6].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-7']:checked"), function(){
            if ($(this).val() === questions[7].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-8']:checked"), function(){
            if ($(this).val() === questions[8].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        this.result();
    },

    result: function() {

        clearInterval(timer);

        $("#quiz h2").remove();

        questionArea.html("<h2>All Done!</h2>");
        questionArea.append("<h3>Correct answers: " + this.correct + "</h3>");
        questionArea.append("<h3>Incorrect answers: " + this.incorrect + "</h3>");
        questionArea.append("<h3>Unanswered questions: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    }  
};

//click events//

$(document).on("click", "#button", function() {
    game.start();
});

$(document).on("click", "#done", function() {
    game.finished();
});