import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Home',
    component:()=>import("../views/HomeView.vue")
  },
  {
    path:'/quiz',
    name:'Quiz',
    component:()=>import("../views/QuizView.vue")
  },
  {
    path:'/score',
    name:"Score",
    component:()=>import("../views/ScoreView.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
