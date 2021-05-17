<template>
  <div class="mainArea">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedPathList">
        <router-view :key="key" />
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
  }
};
</script>
