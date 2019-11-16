<template>
    <div id="app">
        <div id="nav">
            <el-container>

                <el-header>

                    <el-menu
                            :router=true
                            default-active="/"
                            class="el-menu-demo"
                            mode="horizontal"
                            background-color="#ffffff"
                            text-color="#545c64"
                            active-text-color="#000000">

                        <el-menu-item >栗振辉BLOG</el-menu-item>
                        <el-menu-item index="/" route="">首页</el-menu-item>
                        <el-menu-item index="about">免费视频</el-menu-item>
                        <el-menu-item index="/1">学习资料</el-menu-item>
                        <el-menu-item index="/2">博客文章</el-menu-item>
                        <el-menu-item index="/3">问题求助</el-menu-item>
                        <el-menu-item index="/4">关于作者</el-menu-item>

                    </el-menu>

                </el-header>
                <el-main>
                    <router-view/>
                </el-main>

                <div id="foot">

                </div>
            </el-container>


        </div>

    </div>
</template>

<style lang="scss">
    .el-header {
        padding: 0 !important;
    }
    #foot {
        background: cadetblue;
        width: 100%;
        height: 150px;
    }

</style>
