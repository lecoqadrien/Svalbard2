<template>
  <div class="fond">
    <router-link class="" to="/Map"><img src="../assets/image/fleche.png" alt="" class="fleche"></router-link>
    <h1 class="Message">{{ message }}</h1>
      <div class="forme_cardcenter_chap3">
        <div class="bloc_chap3">
          <div class="bloc_chap3_int">
            <p>La réserve mondiale de semences du Svalbard, précieuse « arche de Noé végétale » protégeant la diversité génétique des conflits et des catastrophes naturelles, a franchi le million d'échantillons de graines déposés lundi à l'occasion de son dixième anniversaire.
Dans des températures quasi polaires, plus de 70.000 nouveaux échantillons de graines de riz, blé, maïs, niébé ou encore sorgho ont rejoint l'antre fortifiée située sur cet archipel de l'Arctique à mi-chemin entre la Norvège continentale et le pôle Nord.</p>
          </div>
          <div>
            <video class="video_chap3" autoplay loop muted checked>
              <source src="../assets/video/Réserve du Svalbard  une visite du grenier de la planète - science.mp4" type="video/mp4" class="video">
            </video>
          </div>
        </div>
        <img src="../assets/image/carte_centrre.png" alt="" class="card_nord_chap1">
      </div>
      <img src="../assets/image/Ellipse3_chap3_1.png" alt="" class="ellipse3_chap31">
      <img src="../assets/image/Ellipse3_chap3_2.png" alt="" class="ellipse3_chap32">
      <img src="../assets/image/Ellipse3_chap3_3.png" alt="" class="ellipse3_chap33">
      
    </div>
  </div>
</template>

<script>
import data from "../data.json";
export default {
  data() {
    return {
      message:
        "Réserve mondiale de semences du Svalbard"
    };
  }
};
</script>


<style lang="scss" scoped>
template{
  overflow: hidden;
}

.video_chap3{
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

