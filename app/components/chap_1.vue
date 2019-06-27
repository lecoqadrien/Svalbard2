<template>
  <div class="fond">
    <router-link class="" to="/Map"><img src="../assets/image/fleche.png" alt="" class="fleche"></router-link>
    <h1 class="Message">{{ message }}</h1>
      <div class="forme_cardcenter_chap1">
        <div class="bloc_chap1">
          <div class="bloc_chap1_int">
            <p>Le climat de l'archipel des Svalbard, au nord de la Norvège continentale, se réchauffe plus rapidement que presque toutes les autres régions sur Terre et un surcroît d'avalanches, de pluies et de coulées de boue risque d'y provoquer des changements "dévastateurs" d'ici la fin du siècle, lit-on dans un rapport norvégien rendu public aujourd'hui.</p>
          </div>
          <div>
            <video class="videohome" autoplay loop muted checked>
              <source src="../assets/video/explication rechauffement.mp4" type="video/mp4" class="video">
            </video>
          </div>
        </div>
        <div class="north_blocs">
          <div class="north_terres">
            <img src="../assets/image/carte_nord.png" alt="" class="card_nord_chap1">
            <img src="../assets/image/carte_norddeform1.png" alt="" class="card_nord_chap1click">
            <img src="../assets/image/carte_norddeform2.png" alt="" class="card_nord_chap1click2">
            <img src="../assets/image/Ellipse.png" alt="" class="ellipse">
          </div>
          <div class="north_color">
            <div class="north_1">
              <h3>2020</h3>
            </div>
            <div class="north_2">
              <h3>2025</h3>
            </div>
            <div class="north_3">
              <h3>2030</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="buttons">
        
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
  height: 30vh;
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

