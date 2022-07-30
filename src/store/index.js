import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    quizData:[],
    currentQuestion:0,
    highScores : [],
  },
  getters: {
    findQuestion:(state)=>(question)=>{
      return state.quizData.find(data=> data.question === question)
    },
    score(state){
      return state.quizData.filter(data => data.selected == data.correct).length
    },
    topFive(state){
      return state.highScores.sort((a, b) => a.score > b.score? -1: 1).slice(0,5);
    }
  },
  mutations: {
    addToQuizData(state, payload){
      state.quizData = payload
    },
    goToPrev(state){
      state.currentQuestion -=1;
    },
    goToNext(state){
      state.currentQuestion +=1;
    },
    selectOption(state, {questionObj, option}){
      questionObj.selected = option;
      console.log(state.quizData)
    },
    addToHighScores(state, payload){
      state.highScores.push(payload);
      localStorage.setItem('highScores', JSON.stringify(state.highScores));
    },
    initialiseHighScores(state){
      state.highScores = JSON.parse(localStorage.getItem('highScores'))||[];
    },
    initialiseQuestionCount(state){
      state.currentQuestion = 0;
    }
  },
  actions: {
    loadQuiz(context){
      axios.get("https://opentdb.com/api.php?amount=10")
        .then(res=>{
          console.log(res.data.results);
          const data = res.data.results;
          const quizData = data.map(item =>{
            return {
              question:item.question,
              options:[...item.incorrect_answers,item.correct_answer].sort(() => Math.random() - 0.5),
              correct: item.correct_answer
            }
          })
          context.commit('addToQuizData', quizData)
        })
    }
    
  }
})
