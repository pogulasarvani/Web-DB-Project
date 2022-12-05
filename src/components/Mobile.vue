<template>
  <div class="card">
    <div class="column">
      <div>
        <span class="horizontal-center paper-title">
          {{ this.mobileDetails?.companyName }}
        </span>
      </div>
      <div>Model: {{ this.mobileDetails?.Model }}</div>
      <div>5G: {{ this.mobileDetails.is5G ? "Yes" : "No" }}</div>
      <div>Year of Launch: {{ this.mobileDetails?.YearOfLaunch }}</div>
      <div>Price: ${{ this.mobileDetails?.Price }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mobile",
  props: {
    msg: String,
    mobileDetails: Object,
  },
};
</script>
