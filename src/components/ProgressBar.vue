<template>
  <div class="progress-bar">
        <ProgressStep v-for="(quiz, index) in quizData" :key="index" :index = index />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ProgressStep from './ProgressStep.vue';
export default {
    computed: {
        ...mapState(["quizData", "currentQuestion"]),
    },
    methods: {
        step(index) {
            return index <= this.currentQuestion;
        }
    },
    components: { ProgressStep }
}
</script>

<style scoped>
.progress-bar{
    display:flex;
    justify-content: space-between;
    gap:5px;
}

</style>