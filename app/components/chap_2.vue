<template>
  <div class="fond">
    <router-link class="" to="/Map"><img src="../assets/image/fleche.png" alt="" class="fleche"></router-link>
    <h1 class="Message">{{ message }}</h1>
      <div class="forme_cardcenter_chap2">
        <div class="bloc_chap2">
          <div class="bloc_chap2_int">
            <p>La plupart de la vie animale du Svalbard tire sa substance nutritive de la mer de Barents. Grâce au courant chaud du Gulf Stream qui se mélange à une eau glacée, et grâce aussi à la plate-forme maritime de cette région ainsi qu'à une activité intense des rayons solaires durant la saison estivale, cette région maritime arctique est dotée d'un haut degré de bio production.</p>
          </div>
          <div>
            <video class="video_chap2" autoplay loop muted checked>
              <source src="../assets/video/explication fonte algue.mp4" type="video/mp4" class="video">
            </video>
          </div>
        </div>
        <div class="cardsouth">
          <div class="cards_southwest">
            <img src="../assets/image/carte_sudouest.png" alt="" class="card_sudouest_chap1">
            <img src="../assets/image/carte_sud_est.png" alt="" class="card_sudest_chap1">
          </div>
          <div class="south_color">
            <div class="north_1_chap2">
              <h3>2020</h3>
            </div>
            <div class="north_2_chap2">
              <h3>2025</h3>
            </div>
            <div class="north_3_chap2">
              <h3>2030</h3>
            </div>
          </div>
        </div>
          <img src="../assets/image/Ellipse2_chap2.png" alt="" class="ellipse2_chap2">
          <img src="../assets/image/Ellipse2_chap21.png" alt="" class="ellipse2_chap21">
          <img src="../assets/image/mouette.png" alt="" class="mouette">
          <img src="../assets/image/renne.png" alt="" class="renne">
          <img src="../assets/image/ours.png" alt="" class="ours">
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
        "La faune et la flore"
    };
  }
};
</script>



<style lang="scss" scoped>
template{
  overflow: hidden;
}

.video_chap2{
  height: 20vh;
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

