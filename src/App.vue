<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  beforeCreate(){
		this.$store.commit('initialiseHighScores');
	}
}
</script>

<style>
:root{
  --background:#151933;
  --options:#191E38;
  --option-border:#494E6A;
  --purple:#7967E9;
  --score:#0FC69B;
}
*{
  padding:0;
  margin: 0;
  box-sizing: border-box;
}
#app{
  height: 100vh;
  background-color:var(--background);
  display: flex;
  align-items: center;
}
</style>
