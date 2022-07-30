<template>
  <div class="step" :class="{done:isDone}"></div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    props:{
        index:{
            type:Number
        }
    },
    computed:{
        ...mapState(['currentQuestion']),
        isDone(){
            return this.index <= this.currentQuestion;
        }
    }
}
</script>

<style scoped>
.step{
    width:calc(100% / 10);
    height: 10px;
    background: #fff;
}

.done{
    background: #7967E9;
}
</style>