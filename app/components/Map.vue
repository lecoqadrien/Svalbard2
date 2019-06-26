<template>
  <div class="fond">
    <router-link class="" to="/Intro"><img src="../assets/image/fleche.png" alt="" class="fleche"></router-link>
    <h1 class="Message">{{ message }}</h1>
    <div class="formes">
        <img src="../assets/image/forme_ext.png" alt="" class="forme_ext">
    </div>
      <img src="../assets/image/form_int.png" alt="" class="form_int">
      <div class="cards">
        <div>
           <img src="../assets/image/carte_centrre.png" alt="" class="carte_centre">
        </div>
        <div>
          <img src="../assets/image/carte_nord.png" alt="" class="carte_nord">
        </div>
      </div>
      <div class="cards_bottom">
        <div class="cards_left">
          <img src="../assets/image/carte_sudouest.png" alt="" class="carte_sudouest">
        </div>
        <div class="cards_right">
          <img src="../assets/image/carte_sud_est.png" alt="" class="carte_sud_est">
        </div>
      </div>
      <div class="buttons">
        <div class="bloc_button1">
          <router-link class="" to="/chap_1"><img src="../assets/image/button1.png" alt="" class="buttonchap"></router-link>
        </div>
        <div class="bloc_button2">
           <router-link class="" to="/chap_2"><img src="../assets/image/button_2.png" alt="" class="buttonchap2"></router-link>
        </div>
        <div class="bloc_button3">
          <router-link class="" to="/chap_3"><img src="../assets/image/button_3.png" alt="" class="buttonchap3"></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="/app.js"></script>

<script>
import data from "../data.json";
export default {
  data() {
    return {
      message:
        "Cliquer sur une étape pour commencer"
    };
  }
};
</script>


<style lang="scss" scoped>
template{
  overflow: hidden;
}

.videohome{
  height: 100vh;
  z-index: -10;
  background-position: center center;
}
.button {
  position: absolute;
  bottom: 20px;
  right: 40%;
  color: white;
  font-family: 'Montserrat', sans-serif;
  margin: 0 auto;
  text-align: center;

}

</style>

