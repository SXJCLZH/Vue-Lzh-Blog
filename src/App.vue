<template>
    <div id="app">
        <div id="nav">
            <el-container>

                <el-header>

                    <div class="wraper"></div>
                    <el-menu
                            :router=true
                            default-active="/"
                            class="el-menu-demo"
                            mode="horizontal"
                            background-color="#ffffff"
                            text-color="#414050"
                            active-text-color="#010101">

                        <el-menu-item><img class="icon_logo" src="./assets/img/logo.png"></el-menu-item>
                        <el-menu-item index="/" route="">首页</el-menu-item>
                        <el-menu-item index="about">免费视频</el-menu-item>
                        <el-menu-item index="/1">学习资料</el-menu-item>
                        <el-menu-item index="/2">博客文章</el-menu-item>
                        <el-menu-item index="/3">问题求助</el-menu-item>
                        <el-menu-item index="/4">工具下载</el-menu-item>
                        <el-menu-item index="/5">关于作者</el-menu-item>

                        <li class="user_div">
                            <el-dropdown>
                                <el-avatar class="usericon" :size="30"  :src="circleUrl"></el-avatar>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item>登录/注册</el-dropdown-item>
                                    <el-dropdown-item divided>我的消息</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>

                        </li>

                    </el-menu>

                </el-header>
                <el-main>
                    <router-view/>
                </el-main>

                <el-divider class="lin"></el-divider>

                <div id="foot">
                    <el-row class="foot_row">

                        <el-col :span="24">
                            <div class="grid-content bg-purple ">

                                <span class="iconfont">&#xe632;</span>
                                <span class="iconfont">&#xe638;</span>
                                <span class="iconfont">&#xe677;</span>
                                <span class="iconfont">&#xe631;</span>
                            </div>
                        </el-col>


                    </el-row>

                    <i class="banquan">Copyright © 2018 - 2020 豫ICP备18000468号-2 LiZhenHui. All Rights Reserved.</i>

                </div>
            </el-container>


        </div>
    </div>
</template>
<el-backtop target=".wraper"></el-backtop>
<script>
    export default {
        data() {
            return {
                circleUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
            }
        }
    }
</script>
<style lang="scss">

    //顶部CSS
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

    #foot {
        padding: 0;
        margin: 0;
        text-align: center;
        line-height: 80px;
        background: #FFFFFF;
        width: 100%;
        height: 80px;
    }

    .banquan {
        color: #414050;
    }


    .user_div {
        float: right;
        text-align: center;
        line-height: 60px;
        height: 60px;
        width: 150px;
    }


    //底部CSS
    .foot_row {
        margin-left: 100px !important;
        margin-right: 100px !important;
    }


    .iconfont {
        margin-right: 30px;
        margin-left: 30px;
        color: #414050;
        font-size: 50px !important;
    }


</style>
