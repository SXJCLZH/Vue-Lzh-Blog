<template>
    <vue-particles
      color="#fff"
      :particleOpacity="0.1"
      :particlesNumber="200"
      shapeType="circle"
      :particleSize="4"
      linesColor="#000"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="lizi"
    ></vue-particles>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.cont {
  width: 100%;
  height: 980px;
}
.lizi {
height: 960px;
}
</style>