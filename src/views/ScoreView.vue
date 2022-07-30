<template>
  <div class="container">
    <h2>Quiz Result</h2>
    <div class="score-msg">
      <p class="msg">{{message}}</p>
      <p>Your Score</p>
      <p><span class="score">{{ userScore }}</span> /10</p>
    </div>
    <div class="highScores">
      <h4>High Scores</h4>
      <div class="highScore" v-for="(highScore,index) in topFive" :key="index">
        <span class="name">{{highScore.player}}</span>
        <span class="score">{{highScore.score}}</span>
      </div>
    </div>
    <ButtonComponent :buttonName="'Play Again'" @clicked="playAgain" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ButtonComponent from '@/components/ButtonComponent.vue';
export default {
    data() {
        return {
            userScore: this.$route.params.userScore,
        };
    },
    computed: {
        ...mapGetters(["topFive"]),
        message() {
            let message = "";
            if (this.userScore == this.topFive[0].score) {
                message = "NEW HIGH SCORE!!!";
            }
            else if (this.userScore >= 5) {
                message = "GOOD JOB!";
            }
            else {
                message = "TRY HARDER...";
            }
            return message;
        }
    },
    methods:{
      playAgain(){
        this.$router.push({
          name:'Home'
        })
      }
    },
    components: { ButtonComponent }
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
    min-height: 100vh;
}

h2{
  padding:1.5rem;
}

.score-msg{
  text-align: center;
}

.highScores{
  width:100%;
  max-width:600px;
}

.highScores > h4{
  padding:1rem;
  text-transform: uppercase;
  color:var(--purple)
}

.highScore{
  padding:1rem;
  display: flex;
  background: var(--option);
  border:1px solid var(--option-border);
  justify-content: space-between;
  border-radius:1rem;
  margin:0 auto;
  margin-bottom: 1rem;
}

.score,.msg{
  color:var(--purple);
  font-weight: 700;
  font-size:1.2rem;
}

@media (min-width: 1024px){
    .container{
        border:1px solid var(--option-border);
        border-radius: 10px;
        width:80%;
        margin:0 auto;
        min-height: 600px;
    }
}
</style>