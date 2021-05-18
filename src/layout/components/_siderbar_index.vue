<template>
  <div v-if="!item.hidden">
    <!-- 当不存在children或者children中可显示数量为0时 -->
    <template v-if="getShowChildsNum(item.children) === 0">
      <el-menu-item
        :index="item.name"
        :basepath="resolvePath(item.path)"
        @click="clickToPath(item.path)"
      >
        <template v-if="item.meta && item.meta.icon">
          <svg-icon :iconClass="item.meta.icon"></svg-icon>
        </template>
        <span slot="title">{{ item.title }}</span>
      </el-menu-item>
    </template>
    <!-- 当存在children并且children中可显示数量不为0时 -->
    <template v-else>
      <template
        v-if="getShowChildsNum(item.children) === 1 && item.titleHidden"
      >
        <el-menu-item
          :index="item.children[0].name"
          :basepath="resolvePath(item.children[0].path)"
          @click="clickToPath(item.children[0].path)"
        >
        <template v-if="item.children[0].meta && item.children[0].meta.icon">
          <svg-icon :iconClass="item.children[0].meta.icon"></svg-icon>
        </template>
          <span slot="title">{{ item.children[0].title }}</span>
        </el-menu-item>
      </template>
      <!-- 存在children且children中数量 > 1时 -->
      <template v-else>
        <el-submenu :index="item.name">
          <template slot="title">
            <template v-if="item.meta && item.meta.icon">
              <svg-icon :iconClass="item.meta.icon"></svg-icon>
            </template>
            <span>{{ item.title }}</span>
          </template>
          <SiderBar
            v-for="route in item.children"
            :key="route.name"
            :item="route"
            :basePath="resolvePath(route.path,route.children && route.children.length > 0 ? false : true)"
          ></SiderBar>
        </el-submenu>
      </template>
    </template>
  </div>
</template>

<script>
import path from "path";
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
  computed: {},
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
      let toPath = routePath.slice(0, 1) === "/" ? routePath: this.resolvePath(routePath);
      this.$router.push({ path: toPath });
    },
  },
};
</script>
<style lang="scss" scoped></style>
