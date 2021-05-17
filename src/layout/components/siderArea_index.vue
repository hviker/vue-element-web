<template>
  <div>
    <el-menu
      :default-active="defaultActiveMenu"
      :background-color="siderConfjg.siderBackground"
      :text-color="siderConfjg.siderTextColor"
      :active-text-color="siderConfjg.siderActiveTextColor"
    >
      <SiderBar
        v-for="route in routes"
        :key="route.name"
        :item="route"
        :basePath="route.path"
      ></SiderBar>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { defaultActiveMenu } from "@/settings";
import siderConfjg from "@/styles/sider_config.scss";
import SiderBar from "./_siderbar_index";
export default {
  name: "SiderArea",
  components: {
    SiderBar,
  },
  data() {
    return {};
  },
  computed: {
    defaultActiveMenu() {
      return defaultActiveMenu;
    },
    siderConfjg() {
      return siderConfjg;
    },
    ...mapGetters(["routes"]),
  },
};
</script>
<style lang="scss" scoped></style>
