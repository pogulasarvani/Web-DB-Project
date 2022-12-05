<template>
  <header>
    <div class="header-section row">
      <div class="nav-menu hamburger-menu"></div>
      <div class="vertical-center header-title">
        <span>Amazon Mobiles</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: white !important;
}
</style>
