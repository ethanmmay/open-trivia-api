import { ProxyState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";


//Private
function _draw() {
  let questions = ProxyState.questions
  let template = ''
  questions.forEach(v => template += v.Template)
  document.getElementById("app").innerHTML = /*html*/`
  <div>${template}</div>
  <h3 class="card col-2 p-2 m-3 bg-dark border-light text-center text-light">Score: ${ProxyState.score} / 10</h3>
  `
}

//Public
export default class QuestionsController {
  constructor() {
    ProxyState.on("questions", _draw)
    ProxyState.on("score", _draw)
    this.addQuestions()
    _draw()
  }

  addQuestions() {
    questionsService.addQuestions()
  }

  submit(answer, id) {
    questionsService.submit(answer, id)
    _draw()
  }

  updateScore() {

  }


}
