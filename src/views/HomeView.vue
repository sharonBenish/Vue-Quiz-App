<template>
  <div class="container">
    <h1>Trivia Quiz</h1>
    <form @submit.prevent="takeQuiz" >
        <input type="text" placeholder="Enter your name" v-model="playerName" required />
        <ButtonComponent :buttonName="'Take Quiz'"/>
    </form> 
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import ButtonComponent from '@/components/ButtonComponent.vue';
export default {
    mounted(){
        this.initialiseQuestionCount()
        this.$store.dispatch('loadQuiz')
    },
    data() {
        return {
            playerName: ""
        };
    },
    methods: {
        ...mapMutations(['initialiseQuestionCount']),
        takeQuiz() {
            if (this.playerName.trim() == "")
                return;
            this.$router.push({
                name: "Quiz",
                params: {
                    player: this.playerName,
                }
            });
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
}

form{
    text-align: center;
    padding:1rem;
}

input[type='text']{
    border:1px solid var(--option-border);
    width:100%;
    padding:1rem 1.5rem;
    background: transparent;
    border-radius: 1rem;
    outline:none;
    color:#fff;
    margin-bottom: 1.5rem;
}

input::placeholder{
    color:rgb(181, 178, 178);
}

input:valid{
    background: var(--options);
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