var questionsArr = [
    {
        question: 'Owls are the coolest birds',
        answer: true
    },
    {
        question: 'Hamburgers and cheeseburgers work well with fries',
        answer: true
    },
    {
        question: 'Hatzegopteryx and Quetzalcoatlus were dinosaurs',
        answer: false
    },
    {
        question: "This is class is the author's first time coding in Javascript since high school",
        answer: true
    },
    {
        question: 'FSU is better than UF',
        answer: false
    }
]

function runQuiz () {
    //Create object to store number of correct answers
    var correctAns = 0;

    // Use a for loop to prompt the user with questions and keep score of the number of correct responses
    for(var i=0; i < questionsArr.length; i++) {
        var ans = window.confirm("Question" + (i+1) + ":" + questionsArr.question)

        if(ans === questionsArr.answer){
            correctAns++
        }
    }

    //Calculate the score (in whole number form) and report to user
    alert('You scored ' + Math.round((correctAns / questionsArr.length) * 100) + '%')
}