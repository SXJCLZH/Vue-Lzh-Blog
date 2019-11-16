<template>
    <div id="app">
        <div id="nav">
            <!-- <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>-->
            <el-menu
                    default-active=1
                    class="el-menu-demo"
                    mode="horizontal"
                    background-color="#545c64"
                    text-color="#ffffff"
                    active-text-color="#000000"
            >
                <el-menu-item class="icon_logo">栗振辉BLOG</el-menu-item>
                <el-menu-item index="1">首页</el-menu-item>
                <el-menu-item index="2">免费视频</el-menu-item>
                <el-menu-item index="3">学习资料</el-menu-item>
                <el-menu-item index="4">博客文章</el-menu-item>
                <el-menu-item index="5">问题求助</el-menu-item>
                <el-menu-item index="6">关于作者</el-menu-item>

            </el-menu>

        </div>

        <router-view/>
    </div>
</template>

<style lang="scss">

    .icon_logo {
        margin-left: 30px;
        margin-right: 30px;
    }

</style>
