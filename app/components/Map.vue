<template>
  <div class="fond">
    <h1 class="Message">{{ message }}</h1>
    <div class="formes">
        <img src="../assets/image/forme_ext.png" alt="" class="forme_ext">
      </div>
      <img src="../assets/image/form_int.png" alt="" class="form_int">
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

