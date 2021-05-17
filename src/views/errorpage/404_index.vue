<template>
  <div class="container-wrapper">
    <div class="error404"></div>
    <p>
      当前访问页面不存在,点击<span class="clickHere" @click="clickHere">
        这里 </span
      >返回首页
    </p>
  </div>
</template>

<script>
export default {
  methods: {
    clickHere() {
      this.$router.push({ path: "/dashboard/index" });
    },
  },
};
</script>
<style lang="scss" scoped>
.container-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.error404 {
  width: 250px;
  height: 250px;
  background: url("../../assets/404.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.clickHere {
  color: #978cff;
  font-size: 1, 25rem;
  cursor: pointer;
  font-weight: 800;
}
</style>
