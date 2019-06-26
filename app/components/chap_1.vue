<template>
  <div class="fond">
    <router-link class="" to="/Map"><img src="../assets/image/fleche.png" alt="" class="fleche"></router-link>
    <h1 class="Message">{{ message }}</h1>
      <div class="forme_cardcenter_chap1">
        <div class="bloc_chap1">
          <div class="bloc_chap1_int">
            <p>Le climat de l'archipel des Svalbard, au nord de la Norvège continentale, se réchauffe plus rapidement que presque toutes les autres régions sur Terre et un surcroît d'avalanches, de pluies et de coulées de boue risque d'y provoquer des changements "dévastateurs" d'ici la fin du siècle, lit-on dans un rapport norvégien rendu public aujourd'hui.</p>
          </div>
        </div>
        <img src="../assets/image/carte_nord.png" alt="" class="card_nord_chap1">
        <img src="../assets/image/Ellipse.png" alt="" class="ellipse">
      </div>
      <div class="buttons">
          <div class="bloc_button1">
            <router-link class="" to="/chap_1"><img src="../assets/image/button_1_light.png" alt="" class="buttonchap"></router-link>
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

<script>
import data from "../data.json";
export default {
  data() {
    return {
      message:
        "Le climat"
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

