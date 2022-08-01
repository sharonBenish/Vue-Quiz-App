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
@import url('https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@400;600;700&display=swap');
:root{
  --background:#151933;
  --options:#191E38;
  --option-border:#494E6A;
  --purple:#7967E9;
}
*{
  padding:0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Saira Condensed', sans-serif;
}
#app{
  height: 100vh;
  background-color:var(--background);
  display: flex;
  align-items: center;
}
</style>
