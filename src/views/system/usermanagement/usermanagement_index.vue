<template>
  <div class="container-wrapper">
    用户管理
  </div>
</template>

<script>
export default {
  name: "Usermanagement_Index2",
  components: {},
  data() {
    return {
      text: "1"
    };
  },
  // beforeRouteEnter(to, from, next) {
  //   debugger
  //   console.log(to)
  //   console.log(from)
  //   next(vm => {
  //     console.log(vm.text)
  //   })
  // },
  // beforeRouteUpdate(to, from,next) {
  //   debugger
  //    console.log(to)
  //   console.log(from)
  //   next()
  // },
  // beforeRouteLeave(to, from, next) {
  //   console.log(to)
  //   console.log(from)
  //   console.log("是否要跳转")
  //   next(false)
  // },
  computed: {},
  watch: {},
  created() {
    console.log(this.$router.getRoutes())
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped></style>
