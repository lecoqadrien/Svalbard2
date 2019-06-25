<template>
  <div class="fond">
    <h1>{{ message }}</h1>
    <a href="/Intro"><img src="../assets/image/fleche.png" alt="" class="fleche"></a>
    <div class="formes">
        <img src="../assets/image/forme_ext.png" alt="" class="forme_ext">
        <div>
            <img src="../assets/image/form_int.png" alt="" class="form_int">
            <img src="../assets/image/carte_centrre.png" alt="" class="carte_centre">
            <img src="../assets/image/carte_nord.png" alt="" class="carte_nord">
            <img src="../assets/image/carte_sudouest.png" alt="" class="carte_sudouest">
            <img src="../assets/image/carte_sud_est.png" alt="" class="carte_sud_est">
            <img src="../assets/image/ouest.png" alt="" class="ouest"> 
        </div>
        <div class="buttons">
                <a href="/chap_1" router-link class="button" to="/chap_1"><img src="../assets/image/button1.png" alt="" class="button1"></router-link></a>
                <a href="/chap_2" router-link class="button" to="/chap_2"><img src="../assets/image/button_2.png" alt="" class="button2">
                <a href="/chap_3" router-link class="button" to="/chap_3"><img src="../assets/image/chap_3_light.png" alt="" class="button3">
        </div>
    </div>
  </div>
</template>

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

