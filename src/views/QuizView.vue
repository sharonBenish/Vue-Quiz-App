<template>
    <div class="container">
        <h1>Trivia Quiz</h1>
        <div  v-if="quizData.length > 0">
            <h2>Question <span>{{currentQuestion + 1}}</span> /10</h2>
            <ProgressBar />
            <div v-for="(data, index) in quizData" :key="index">
                <QuestionCard :data="data" v-if="index == currentQuestion" />
            </div>
            <div class="button-group">
                <ButtonComponent v-if="currentQuestion > 0" @clicked="goToPrev" :buttonName="'Prev'" />
                <ButtonComponent v-if="currentQuestion != (quizData.length -1)" @clicked="goToNext" :buttonName="'Next'"/>
                <ButtonComponent v-if="currentQuestion == (quizData.length -1)" @clicked="goToScore" :buttonName="'Submit'"/>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import QuestionCard from '@/components/QuestionCard.vue'
import ProgressBar from '../components/ProgressBar.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
export default {
    components: { QuestionCard, ProgressBar, ButtonComponent },
    data(){
        return{
            player:this.$route.params.player
        }
    },
    computed:{
        ...mapState(['quizData', 'currentQuestion']),
        ...mapGetters(['score']),
        
    },
    methods: {
        goToScore() {
            this.$store.commit('addToHighScores',{
                player:this.player,
                score:this.score,
            });
            this.$router.push({
                name: "Score",
                params:{
                    userScore: this.score
                }
            });
        },

        ...mapMutations(['goToPrev', 'goToNext','addToHighScores'])
    },
}
</script>

<style scoped>
.container{
    color:#fff;
    display:flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    width:100%;
}

h2{
    font-size:1.2rem;
    padding:1.5rem 0;
}

h2>span{
    color:#7967E9;
    font-size:2rem;
}

.container > div{
    min-width:300px;
    max-width:800px;
}

.button-group{
    display:flex;
    justify-content: space-between;
    padding:1rem 0;
}

@media (min-width: 1024px){
    .container{
        border:1px solid var(--option-border);
        border-radius: 10px;
        width:80%;
        margin:0 auto;
        justify-content: center;
        min-height: 600px;
    }
}

</style>