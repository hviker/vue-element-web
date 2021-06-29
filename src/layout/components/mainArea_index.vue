<template>
  <div>
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedPathList">
        <router-view :key="key" linkActiveClass="menuActive" />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import { cachedPathList } from "@/settings";
export default {
  name: "MainArea",
  computed: {
    key() {
      return this.$route.path;
    },
    cachedPathList() {
      return cachedPathList;
    },
  },
};
</script>
<style lang="scss">
.menuActive {
  color: red
}
</style>
