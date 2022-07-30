<template>
  <div class="question-card">
    <h3 v-html="data.question" class="question"></h3>
    <QuizOption v-for="(option,index) in data.options" :key="index" :option="option" :index="index" :question="data.question"/>
  </div>
</template>

<script>
import QuizOption from './QuizOption.vue';
export default {
    props:{
        data:{
            type:Object,
        }
    },
    components: { QuizOption},
}
</script>

<style scoped>
.question{
  padding:1rem 0;
  max-width:600px;
}

@media (min-width:1024px) {
  .question-card{
    width:600px;
  }
}

</style>