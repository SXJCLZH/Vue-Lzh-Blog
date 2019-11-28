<template>
  <div id="app">
    <div id="nav">
      <el-container>
        <MyHead></MyHead>
        
        <el-main>
          <router-view />
        </el-main>

        <el-footer>
          <div id="foot">
            <el-row class="foot_row">
              <el-col class="banquanicondiv" :span="24">
                <div class="grid-content bg-purple">
                  <el-popover width="200" trigger="hover">
                    <el-image style="width: 200px; height: 200px" :src="wxewmurl" fit="fit"></el-image>

                    <span class="iconfont icon_wx" slot="reference">&#xe632;</span>
                  </el-popover>

                  <span class="iconfont icon_github">&#xe638;</span>
                  <span class="iconfont icon_github">&#xe677;</span>
                </div>
              </el-col>
              <el-col class="banquandiv" :span="24">
                <i
                  class="banquan"
                >Copyright © 2018 - 2020 豫ICP备18000468号-2 LiZhenHui. All Rights Reserved.</i>
              </el-col>
            </el-row>
          </div>
        </el-footer>
      </el-container>
    </div>
  </div>
</template>
<script>
import MyHead from "./components/Head";
export default {
  components: {
    MyHead
  },
  data() {
    return {
      wxewmurl: "http://q1czncz5g.bkt.clouddn.com/img_wxewm.png"
    };
  }
};
</script>
<style lang="scss">
.el-header {
  padding: 0 !important;
}
#foot {
  padding: 0 !important;
  margin: 0;
  text-align: center;
  background: #333333;
  width: 100%;
}
.el-footer {
  padding: 0 !important;
}

.banquan {
  padding: 0 10px;
  color: #999999;
}

.iconfont {
  margin-right: 18px;
  margin-left: 18px;
  color: #999999;
}
.icon_wx {
  font-size: 50px !important;
}

.icon_github {
  font-size: 46px !important;
}
.banquandiv {
  margin-top: 20px;
  margin-bottom: 20px;
}
.banquanicondiv {
  margin-top: 20px;
}
</style>
