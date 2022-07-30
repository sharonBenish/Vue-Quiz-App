<template>
  <button @click="$emit('clicked')">{{buttonName}}</button>
</template>

<script>
export default {
 props:['buttonName']
}
</script>

<style scoped>

button{
    padding:0.7rem 1.5rem;
    border:none;
    color:#fff;
    background: var(--purple);
    border-radius: 10px;
}
</style>