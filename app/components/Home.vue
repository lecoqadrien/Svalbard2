<template>
  <div class="big-header">
    <div class="supovide"></div>
    <div class="title">
      <h2>A la découverte de Svalbard</h2>
      <hr>
      <h3>Un territoire en danger</h3>
    </div>
    <video class="videohome" autoplay loop muted>
      <source src="../assets/video/moutain.mp4" type="video/mp4" class="video">
    </video>
    <h1>{{ message }}</h1>
    <br>
    <ul>
      <li>
        <router-link class="button" to="/Intro">Toucher pour commencer</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ""
    };
  }
};
</script>


<style lang="scss" scoped>
template{
  overflow: hidden;
}

.videohome{
  height: 200vh;
  max-width: 100%;
  margin-right: 10px;
  z-index: -10;
  background-position: center center;
}
.button {
  position: absolute;
  bottom: 40px;
  right: 40%;
  color: white;
  font-family: 'Montserrat', sans-serif;
  margin: 0 auto;
  margin-bottom: 40px;
  text-align: center;
}

.supovide {
  position: absolute;
  height: 100vh;
  width: 100vw;
  background: black;
  opacity: 0.4;
}

</style>

