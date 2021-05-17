<template>
  <div class="headerArea">
    <div class="headerLeft">
      <img src="@/assets/logo.png" />
      <span>Vue 系统框架(PC)</span>
    </div>
    <div class="headerRight">
      <el-dropdown @command="handleClick">
        <span class="el-dropdown-link">
          <i class="iconfont icon-pc-curuser"></i>
          <label>欢迎您，{{ userName }}</label>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="viewPersonInfo">个人信息</el-dropdown-item>
          <el-dropdown-item command="changePassword">修改密码</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      |<label @click="logout">退出</label>
    </div>
  </div>
</template>

<script>
import { removeToken } from "@/utils/auth";
export default {
  name: "HeaderArea",
  components: {},
  data() {
    return {};
  },
  computed: {
    userName() {
      return this.$store.getters.userInfo?.name;
    },
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    logout() {
      this.$confirm("确定要退出系统?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(async () => {
        await this.$store.dispatch("user/resetToken");
        removeToken();
        this.$router.push({ path: "/login" });
      });
    },
    handleClick(command) {
      // todo 这里接收command
      console.log(command);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../styles/variables.scss";
%header-common {
  margin: 15px 24px;
  color: #ffffff;
  line-height: 40px;
}
.headerArea {
  width: 100%;
  height: $headerHeight;
  background: $headerBackground;
  display: flex;
  justify-content: space-between;
  position: relative;
  .headerLeft {
    @extend %header-common;
    font-size: 1.5rem;
    img {
      width: 40px;
      height: 40px;
      position: absolute;
    }
    span {
      margin-left: 50px;
    }
  }
  .headerRight {
    @extend %header-common;
    font-size: 1rem;
    .iconfont {
      font-size: 1.375rem;
    }
    .el-dropdown {
      color: #ffffff;
      font-size: 1rem;
    }
    label {
      margin: 0 10px;
      cursor: pointer;
    }
  }
}
</style>
