<template>
  <div class="container-wrapper">
    <el-form
      class="loginForm"
      :model="loginForm"
      :rules="loginFormRules"
      ref="loginForm"
    >
      <p class="loginTitle">
        用户登录
        <el-tooltip
          class="item cursorPointer"
          effect="dark"
          content="纯前端环境下用户名、密码都是admin"
          placement="right-start"
        >
          <i class="el-icon-info"></i>
        </el-tooltip>
      </p>
      <el-form-item prop="loginName">
        <el-input v-model="loginForm.loginName" placeholder="请输入用户名">
          <i slot="prefix" class="iconfont el-input__icon icon-pc-user"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          placeholder="请输入密码"
          :type="passwordType"
        >
          <i slot="prefix" class="iconfont el-input__icon icon-pc-pwd"></i>
          <i
            slot="suffix"
            :class="[
              'iconfont',
              'input__icon',
              passwordType === 'password'
                ? 'icon-pc-closedeye'
                : 'icon-pc-openeye',
            ]"
            @click="changePasswordType"
          ></i>
        </el-input>
      </el-form-item>
      <el-form-item v-if="isNeedFreeLogin">
        <el-checkbox v-model="loginForm.isChecked" class="rememberMe"
          >记住密码
          <el-tooltip
            class="item cursorPointer"
            effect="dark"
            :content="content"
            placement="right-start"
          >
            <i class="el-icon-info"></i>
          </el-tooltip>
        </el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="submitLogin" @click="submitLogin"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { isNeedFreeLogin, expiresDay } from "./settings";
import {
  getUserName,
  setUserName,
  removeUserName,
  getPassword,
  setPassword,
  removePassword,
  getIsChecked,
  setIsChecked,
  removeIsChecked,
} from "@/utils/auth";
export default {
  name: "Login",
  components: {},
  data() {
    return {
      loginForm: {
        loginName: "", // 用户名
        password: "", // 密码
        isChecked: false, // 是否记住密码
      },
      loginFormRules: {
        loginName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
      passwordType: "password",
    };
  },
  computed: {
    isNeedFreeLogin() {
      return isNeedFreeLogin;
    },
    content() {
      return `选中后免登陆${expiresDay}天`;
    },
  },
  watch: {},
  created() {
    isNeedFreeLogin && this.initUserInfo();
  },
  mounted() {},
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
  //方法集合
  methods: {
    changePasswordType() {
      this.passwordType =
        this.passwordType === "password" ? "text" : "password";
    },
    submitLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          // todo 请求
          isNeedFreeLogin && this.rememberInfo(this.loginForm.isChecked);
        }
      });
    },
    rememberInfo(isChecked) {
      if (isChecked) {
        let { loginName, password } = this.loginForm;
        setUserName(loginName);
        setPassword(password, expiresDay);
        setIsChecked(isChecked);
      } else {
        removeUserName();
        removePassword();
        removeIsChecked();
      }
    },
    initUserInfo() {
      if (getIsChecked() && Boolean(getIsChecked())) {
        let obj = {
          loginName: getUserName(),
          password: getPassword(),
          isChecked: true,
        };
        Object.assign(this.loginForm, obj);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.container-wrapper {
  background-color: #48455a;
  display: flex;
  justify-content: center;
  align-items: center;

  .loginForm {
    width: 350px;
    background-color: #353652;
    border-radius: 15px;
    padding: 20px 50px;
    .loginTitle {
      font-size: 1.75rem;
      color: #ffffff;
      height: 60px;
      line-height: 60px;
      text-align: center;
      margin-bottom: 30px;
    }
    .rememberMe {
      color: #ffffff;
    }
    .submitLogin {
      width: 350px;
    }
  }
}
</style>
