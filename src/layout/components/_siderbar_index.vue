<template>
  <div v-if="!item.hidden">
    <!-- 当不存在children或者children中可显示数量为0时 -->
    <template v-if="getShowChildsNum(item.children) === 0">
      <el-menu-item
        :index="item.name"
        :basepath="resolvePath(item.path)"
        @click="clickToPath(item.path)"
      >
        <i class="el-icon-menu"></i>
        <span slot="title">{{ item.title }}</span>
      </el-menu-item>
    </template>
    <!-- 当存在children并且children中可显示数量不为0时 -->
    <template v-else>
      <template
        v-if="getShowChildsNum(item.children) === 1 && isSingleChildStack"
      >
        <el-menu-item
          :index="item.children[0].name"
          :basepath="resolvePath(item.children[0].path)"
          @click="resolvePath(item.children[0].path)"
        >
          <i class="el-icon-menu"></i>
          <span slot="title">{{ item.children[0].title }}</span>
        </el-menu-item>
      </template>
      <!-- 存在children且children中数量 > 1时 -->
      <template v-else>
        <el-submenu :index="item.name">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{ item.title }}</span>
          </template>
          <SiderBar
            v-for="route in item.children"
            :key="route.name"
            :item="route"
            :basePath="resolvePath(route.path, true)"
          ></SiderBar>
        </el-submenu>
      </template>
    </template>
  </div>
</template>

<script>
import path from "path";
import { isSingleChildStack } from "@/settings";
export default {
  name: "SiderBar",
  components: {},
  props: {
    item: {
      required: true,
    },
    basePath: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    isSingleChildStack() {
      return isSingleChildStack;
    },
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    getShowChildsNum(children) {
      if (
        children &&
        Object.prototype.toString.call(children) === "[object Array]"
      ) {
        return children.filter((item) => !item.hidden).length;
      } else {
        return 0;
      }
    },
    resolvePath(routePath, flag) {
      return flag ? this.basePath : path.resolve(this.basePath, routePath);
    },
    clickToPath(routePath) {
      let toPath = this.resolvePath(routePath);
      this.$router.push({ path: toPath });
    },
  },
};
</script>
<style lang="scss" scoped></style>
