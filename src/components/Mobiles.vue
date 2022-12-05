<template>
  <div>
    <div id="publications" class="notifier mt-10">
      <div class="card vertical-center title-card">
        <span class="card-title">AVAILABLE MOBILES</span>
      </div>
    </div>
    <div class="row content-wrap mt-20">
      <div class="width-50-75-100" v-for="mobile in mobiles" :key="mobile.id">
        <Mobile :mobileDetails="mobile" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Mobile from "./Mobile.vue";
export default {
  name: "mobiles",
  components: {
    Mobile,
  },
  data() {
    return { mobiles: [] };
  },
  mounted() {
    axios
      .get("https://sarvani-mobiles.herokuapp.com/api/mobiles")
      .then((res) => {
        console.log(res);
        this.mobiles = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.notifier {
  width: 100%;
}
</style>
