<template>
  <div class="head">
    <el-header class="contview">
      <el-menu
        :router="true"
        default-active="/"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#ffffff"
        text-color="#18191b"
        active-text-color="#18191b"
      >
        <el-menu-item>
          <img class="icon_logo" src="../assets/img/logo.png" />
        </el-menu-item>

        <el-menu-item class="head_item" index="about">关于作者</el-menu-item>
        <el-menu-item class="head_item" index="download">工具资源</el-menu-item>
        <el-menu-item class="head_item" index="help">在线求助</el-menu-item>
        <el-menu-item class="head_item" index="data">资料下载</el-menu-item>
        <el-menu-item class="head_item" index="video">视频观看</el-menu-item>
        <el-menu-item class="head_item" index="article">博客文章</el-menu-item>

        <!-- <el-submenu class="head_item" index="article">
          <template slot="title">博客文章</template>
          <el-menu-item index="article"><template slot="title"><span  class="titleicon iconfont icon_houduankaifa"></span><span slot="title">全部文章</span></template></el-menu-item>
          <el-menu-item index="article"><template slot="title"><span  class="titleicon iconfont iconandroid"></span><span slot="title">Android</span></template></el-menu-item>
          <el-menu-item index="article"><template slot="title"><span  class="titleicon iconfont iconjava"></span><span slot="title">Java后端</span></template></el-menu-item>
          <el-menu-item index="article"><template slot="title"><span  class="titleicon iconfont iconvuejs"></span><span slot="title">Vue</span></template></el-menu-item>
          <el-menu-item index="article"><template slot="title"><span  class="titleicon iconfont iconshenghuofuwu"></span><span slot="title">生活杂谈</span></template></el-menu-item>
        </el-submenu> -->

        <el-menu-item class="head_item" index="/" route>首页</el-menu-item>
      </el-menu>
    </el-header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seachdata: "",
      circleUrl:
        "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
    };
  },
  methods: {}
};
</script>

<style scoped lang="scss" >
.el-menu.el-menu--horizontal {
  border-bottom: solid 0px #e6e6e6;
}

.head_item {
  float: right !important;
}
.head {
  width: 100%;
  //   box-shadow: 0 4px 8px 0 rgba(7, 17, 27, 0.1);
}
.usericon {
  margin-top: 15px;
}
.el-header {
  padding: 0 !important;
}

.lin {
  margin: 0;
  padding: 0;
}

.user_div {
  float: right;
  text-align: center;
  line-height: 60px;
  height: 60px;
  margin-right: 18px;
}
.titleicon {
  color: #333;
}
</style>
