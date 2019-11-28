<template>
  <div class="contview">
    <el-carousel style="border-radius=13px;">
      <el-carousel-item v-for="url in banners" :key="url">
        <el-image style="width: 100%; height: 100%" :src="url"></el-image>
      </el-carousel-item>
    </el-carousel>

    <div class="zhuti">
      <div class="titlecont">
        <span class="lzh_title">丨最新视频</span>
      </div>
      <el-row class="card_row">
        <el-col :span="6" v-for="(o, index) in 8" :key="o" :offset="index > 0 ? 0 : 0">
          <el-card shadow="hover" class="card_dt" :body-style="{ padding: '0px' }">
            <el-image
              src="http://q1czncz5g.bkt.clouddn.com/test.png"
              class="imag home_item_img"
            />
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">栗振辉</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <div>
        <h1 class="lzh_title">丨热门文章</h1>
      </div>
      <el-row class="card_row">
        <el-col :span="24" v-for="(o, index) in 8" :key="o" :offset="index > 0 ? 0 : 0">
          <el-card shadow="hover" class="card_dt" :body-style="{ padding: '0px' }">
            <el-col>
              <el-col :span="4">
                <div >
                  <el-image src="http://q1czncz5g.bkt.clouddn.com/test.png"/>
                </div>
              </el-col>

              <el-col :span="20">
                <div class="grid-content bg-purple cont_newstitle">
                  <div>
                   <el-tag>JAVA</el-tag><span class="newstitle">java学习路线导航【教学视频+博客+书籍整理】</span>
                  </div>
                  <div class="margntb10">
                  <span class="contjianjie">你的努力应该被更多人发现，你可能缺少的只是一个机遇。你可能缺少的只是一个机遇。现在UI中国编辑推荐也能组合上首页啦，期待你的投稿。- </span>
                  </div>

                  <div class="margntb10">
                  <i class="el-icon-view  title_liuliang">132</i>  

                  <i style="margin: 0 30px;" class="el-icon-chat-dot-round title_liuliang">521545</i>  
  
                  <i  class="el-icon-time title_liuliang">2019-11-28 10:26:32 </i>  
                  </div>
                </div>
              </el-col>
            </el-col>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>


<script>
export default {
  components: {},
  data() {
    return {
      banners: [
        "http://q1czncz5g.bkt.clouddn.com/banner1.jpg",
        "http://q1czncz5g.bkt.clouddn.com/banner2.jpg",
        "http://q1czncz5g.bkt.clouddn.com/banner3.jpg"
      ]
    };
  }
};
</script>

<style scoped lang="scss" >
.el-carousel--horizontal {
  border-radius: 5px;
  overflow-x: hidden;
  margin-top: 20px;
}
.card_dt {
  margin: 20px;
}
.titlecont {
  margin-top: 20px;
}
.lzh_title {
  color: #18191b;
  font-size: 18px;
  font-weight: bold;
}

.card_row {
}

.time {
  font-size: 13px;
  color: #999;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  height: 210px;
  display: block;
}
.home_item_img {
  width: 100%;
  border-radius: 4px;
}

// .el-card.is-hover-shadow:hover {
//   box-shadow: 0 2px 12px 0 #52555A !important;
//   }

.cont_newstitle {
  padding: 10px;
}

  // border: 3px solid #52555A;
.newstitle {
  margin-left: 10px;
  color: #18191b;
  font-size: 1em;
  font-weight: bold;
}
.contjianjie {
  color: #52555a;
  font-size: 0.8em;
}

.margntb10 {
  margin: 10px 0 ;
}
.title_liuliang {
  color: #52555a;
  font-size: 1em;
}
</style>
