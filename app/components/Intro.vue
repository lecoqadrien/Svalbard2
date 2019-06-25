<template>
  <div class="big-header">
      <img src="../assets/image/groenland.png" alt="">
      <div class="bloc_text">
        <h4>{{message}}</h4>
      </div>
      <div class="bloc_touch">
        <router-link class="button" to="/Map">Toucher pour commencer</router-link>
      </div>
  </div>
</template>


<script>
import data from "../data.json";
export default {
  data() {
    return {
      message:
        "Svalbard est aujourd'hui la première ile touché par le réchauffement climatique. En effet la température de l'ile a augmenté de 2° en 200 ans depuis la révolution industrielle et prendra encore entre 7° et 10° dans les 50 prochaines années. Cette croissance soudaine de la température est vraiment inquiétante , que ce soit pour Svalbard comme pour le reste du monde "
    };
  }
};
</script>

<style lang="scss" scoped >
.big-header {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

img {

  left: 50px;
  height: 100%;
  width: 100%;
  filter: grayscale(100%);}

</style>