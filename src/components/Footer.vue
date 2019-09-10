<template>
  <el-footer height="200" class="fotter">
    <el-row :gutter="10" class="cont">
      <el-col :span="2">
        <p></p>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple">
          <div>
            <font class="footertitle">标题内容</font>
          </div>
          <div>
            <el-link :underline="false" class="actiontitle">跳转链接</el-link>
          </div>
           <div>
            <el-link :underline="false" class="actiontitle">跳转链接</el-link>
          </div>
           <div>
            <el-link :underline="false" class="actiontitle">跳转链接</el-link>
          </div>
           <div>
            <el-link :underline="false" class="actiontitle">跳转链接</el-link>
          </div>
        </div>
      </el-col>
         <el-col :span="5">
        <div class="grid-content bg-purple">
          <div>
            <font class="footertitle">标题内容</font>
          </div>
          <div>
            <el-link :underline="false" class="actiontitle">跳转链接</el-link>
          </div>
           <div>
            <el-link :underline="false" class="actiontitle">跳转链接</el-link>
          </div>
           <div>
            <el-link :underline="false" class="actiontitle">跳转链接</el-link>
          </div>
           <div>
            <el-link :underline="false" class="actiontitle">跳转链接</el-link>
          </div>
        </div>
      </el-col>
         <el-col :span="5">
        <div class="grid-content bg-purple">
          <div>
            <font class="footertitle">标题内容</font>
          </div>
          <div>
            <el-link :underline="false" class="actiontitle">跳转链接</el-link>
          </div>
           <div>
            <el-link :underline="false" class="actiontitle">跳转链接</el-link>
          </div>
           <div>
            <el-link :underline="false" class="actiontitle">跳转链接</el-link>
          </div>
           <div>
            <el-link :underline="false" class="actiontitle">跳转链接</el-link>
          </div>
        </div>
      </el-col>
         <el-col :span="5">
        <div class="grid-content bg-purple">
          <div>
            <font class="footertitle">标题内容</font>
          </div>
          <div>
            <el-link :underline="false" class="actiontitle">跳转链接</el-link>
          </div>
           <div>
            <el-link :underline="false" class="actiontitle">跳转链接</el-link>
          </div>
           <div>
            <el-link :underline="false" class="actiontitle">跳转链接</el-link>
          </div>
           <div>
            <el-link :underline="false" class="actiontitle">跳转链接</el-link>
          </div>
        </div>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>

    <div>
      <p class="version">© 2009-2019 JCZYJSXY.COM 版权所有</p>
    </div>
  </el-footer>
</template>

<script >
export default  {
  data() {
    return {};
  }
}
</script>

<style scoped lang="scss">
.fotter {
  background-color: rgb(24, 24, 24);
  position: relative;
  bottom: 0;
  left: 0;
}
.version {
  margin-top: 50px;
  color: #73777a;
  font-size: 12px;

}

.grid-content {
  margin-top: 40px;
  min-height: 36px;
}
.footertitle {

  font-size: 16px;
  color: #ebeef5;
}

.actiontitle {
margin-top: 15px;
}
.actiontitle:hover{
  color: #ebeef5 !important;
}
</style>