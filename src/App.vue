<template>
  <div id="app">
  <el-menu theme="dark" class="el-menu-demo" mode="horizontal">
  <span class="logo-text">南昌乐悠生物标本管理系统</span>
  <el-menu-item index="2" style="float: right"><a href>注销</a></el-menu-item>
  <el-menu-item index="3" style="float: right">Admin</el-menu-item>
</el-menu>
<el-row class="tac" :gutter="10">
  <el-col :span="3">
  <el-menu mode="vertical" default-active="1" >
      <el-menu-item-group>
        <el-menu-item index="1"><i class="el-icon-message"></i><router-link to="/input">样本录入</router-link></el-menu-item>
        <el-menu-item index="2"><i class="el-icon-message"></i><router-link to="/out">样本领出</router-link></el-menu-item>
      </el-menu-item-group>
    </el-menu>
    </el-col>
    <el-col :span="21">
      <router-view></router-view>
    </el-col>
</el-row>

  </div>

</template>

<script>
export default {
    data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scope>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
}
.logo-text{
    font-size: 20px;
    color: whitesmoke;
    display: inline-block;
    height: 60px;
    line-height: 60px;
    margin: 0px 20px;
}
</style>
