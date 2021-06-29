<template>
  <div class="container-wrapper">
    <el-button @click="toPath">用户管理按钮</el-button>
    <!-- <router-link to="/system/usermanagement/1" active-class="mainTain" tag="li">123</router-link> -->
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
     
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    console.log(this.$router)
  },
  methods: {
    toPath() {
      this.$router.push({path: "/system/usermanagement/1"})
    },
  },
};
</script>
<style lang="scss" scoped></style>
