## Overview
In this assignment, you’ll build a short quiz game using JavaScript. The quiz will ask the user a series of true/false questions and display their final score as a percentage.


To complete the assignment, you will edit the provided starter project in the index.js file. DO NOT edit the index.html file. When the “Start Quiz” button is clicked, your program should:

Create a global array named questionsArr that stores your quiz questions as objects.
Each object should include a question (string) and answer (boolean).
Use a function named runQuiz() to:
Loop through the questionsArr using a for loop.
Use confirm() to ask each question and record the user’s answer.
Compare the user’s answers to the correct ones.
After all questions are answered, calculate the user’s score as a whole-number percentage (for example, 67% not 66.6%) and display it using alert().
