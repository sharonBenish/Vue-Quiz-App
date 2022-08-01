<template>
  <div class="option">
    <label :for="id" v-html="option"></label>
    <input :checked="option == findQuestion(question).selected" type="radio" :id="id" :name="question" @change="select(question, option)">
    <span class="custom-radio"></span>  
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    props:{
        option:{
            type:String,
        },
        index:{
            type:Number,
        },
        question:{
            type:String
        }
    },
    computed:{
        id(){
            return `option${this.index + 1}`
        },
        ...mapGetters(['findQuestion'])
        
    },
    methods:{
       select(question,option){
        const questionObj = this.findQuestion(question)
        this.$store.commit('selectOption',{questionObj, option})
       },
    }
}
</script>

<style scoped>
.option{
    background-color: var(--options);
    padding:1rem;
    margin:1rem 0;
    border:1px solid var(--option-border);
    color:#fff;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    position:relative;
}

.option:hover{
    border-color:var(--purple);
    color:var(--purple)
}

input{
    opacity: 0;
}

.custom-radio{
    width:20px;
    height: 20px;
    position:absolute;
    border:1px solid var(--option-border);
    border-radius:50%;
    right:1rem;
    top:50%;
    transform: translateY(-50%);
    pointer-events: none;
}

.custom-radio:after {
  content: "";
  position: absolute;
  display: none;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #7967E9;
}

input:checked + .custom-radio{
    background: #fff;
    border:1px solid #fff
}

input:checked + .custom-radio:after {
  display: block;
}

</style>