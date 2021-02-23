import {
    generateId
} from "../Utils/generateId.js"

export default class Question {
    constructor(data) {
        this.id = generateId()
        this.category = data.category
        this.question = data.question
        this.type = data.type
        this.correctAnswer = data.correctAnswer || data.correct_answer
        this.incorrectAnswers = data.incorrectAnswers || data.incorrect_answers
        this.answer = "unanswered"
    }

    get Template() {

        let currentTemplate = `
            <div class="card ${this.answer == "unanswered" ? 'bg-light' : this.answer == "correct" ? 'bg-success' : 'bg-danger'} col-sm-6 p-3 question m-3 text-light"> 
                <h4 class="text-dark">${this.category}</h4>
                <h5 class="text-dark">${this.question}</h5>
                <button class="btn btn-dark my-1" ${this.answer != "unanswered" ? 'disabled' : ''} id="${this.id}-button0" onclick="app.questionsController.submit('${this.correctAnswer}', '${this.id}', 'button0')">${this.correctAnswer}</button>
                 `

        for (let i = 0; i < this.incorrectAnswers.length; i++) {
            currentTemplate += `
                <button class="btn btn-dark my-1" ${this.answer != "unanswered" ? 'disabled' : ''} id="${this.id}-button${i}" onclick="app.questionsController.submit('${this.incorrectAnswers[i]}', '${this.id}', 'button1')">${this.incorrectAnswers[i]}</button>
                `
        }
        return currentTemplate + `</div>`

    }
}