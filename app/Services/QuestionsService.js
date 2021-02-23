import { ProxyState } from "../AppState.js";
import questionsController from "../Controllers/QuestionsController.js";
import Question from "../Models/Question.js";
import { api } from "./AxiosService.js";

class QuestionsService {

  addQuestions() {
    api.get('').then(res => {
        ProxyState.questions = res.data.results.map(rawQuestion => new Question(rawQuestion))
    }).catch(err => console.error(err))
  }

  submit(answer, id) {
    let question = ProxyState.questions.filter(q => q.id == id)[0]
    answer == question.correctAnswer ? question.answer = "correct" : question.answer = "false"
    ProxyState.score = ProxyState.questions.filter(q => q.answer == "correct").length
    ProxyState.questions.filter(q => q.id == id)[0] = question
  }

}

export const questionsService = new QuestionsService();

