<template>
  <div class="header">
    <el-menu
      class="headermeau"
      :default-active="defaultselectitem"
      mode="horizontal"
      active-text-color="#000000"
      text-color="#000000"
      :router="true"
    >
      <router-link to="/ItmeHome">
        <a>
          <img alt="logo" class="logo" src="../assets/imgs/logo.png" />
        </a>

        <div>
          <span class="titlefont">傻子全栈代码空间站</span>
        </div>
      </router-link>

      <!-- <el-input placeholder="请选择日期" v-model="selectdata" class="input-with-select" show-word-limit>
        <i slot="suffix"  class="el-input__icon el-icon-search"></i>
      </el-input>-->
      <el-dropdown class="usericon" size="medium">
        <el-badge value="1" class="item">
          <el-button type="info" icon="el-icon-user-solid" class="el-dropdown-link" circle></el-button>
        </el-badge>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-plus">登录</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus">注册</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus-outline">其他</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-menu-item index="1">
        <span class="item">关于作者</span>
      </el-menu-item>
      <el-menu-item index="2">
        <span class="item">软件外包</span>
      </el-menu-item>
      <el-menu-item index="3">
        <span class="item">BUG协助</span>
      </el-menu-item>
      <el-menu-item index="4">
        <span class="item">破解资源</span>
      </el-menu-item>
      <el-menu-item index="5">
        <span class="item">编程学习</span>
      </el-menu-item>
      <el-menu-item index="ItmeHome">
        <span class="item">代码插件</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script >
export default {
  data() {
    return {
      defaultselectitem: "ItmeHome",
      selectdata: ""
    };
  }
};
</script>

<style scoped lang="scss">
.headermeau {
  box-shadow: 0 4px 8px 0 rgba(7, 17, 27, 0.1);
}
.header {
  z-index: 900;
  height: 60px;
  width: 100%;
  position: fixed;
}
/*标题栏内容再右侧*/
.el-menu--horizontal > .el-menu-item {
  margin-right: 20px;
  float: right !important;
}
.logo {
  margin-left: 20px;
  margin-top: 10px;
  float: left;
  height: 40px;
  width: 40px;
}
.title {
  height: 60px;
  float: left;
}
.titlefont {
  text-align: center;
  margin: 0px auto;
  line-height: 60px;
  font-size: 22px;
  color: #000000;
  font-weight: normal;
  float: left;
  margin-left: 20px;
}
.item {
  margin: 0 auto;
  font-size: 14px;
  font-weight: 400;
}
.usericon {
  height: 40px;
  float: right;
  width: 40px;
  margin-top: 10px;
  margin-right: 20px;
}
.input-with-select {
  margin-left: 50px;
  width: 450px;
  float: left;
  height: 40px;
  margin-top: 10px;
}
</style>