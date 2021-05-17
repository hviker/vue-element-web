<template>
  <div class="container-wrapper">
    <HeaderArea></HeaderArea>
    <div class="mainContainer">
      <SiderArea class="siderArea"></SiderArea>
      <MainArea class="mainArea"></MainArea>
    </div>
  </div>
</template>

<script>
import HeaderArea from "./components/headerArea_index";
import SiderArea from "./components/siderArea_index";
import MainArea from "./components/mainArea_index";
export default {
  name: "",
  components: {
    HeaderArea,
    SiderArea,
    MainArea,
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
@import "../styles/variables.scss";
.mainContainer {
  width: 100%;
  height: calc(100% - #{$headerHeight});
}
.siderArea {
  width: $siderBarWidth;
  height: 100%;
  background-color: $siderBarBackground;
  float: left;
}
.mainArea {
  width: calc(100% - #{$siderBarWidth});
  height: 100%;
  float: right;
}
</style>
