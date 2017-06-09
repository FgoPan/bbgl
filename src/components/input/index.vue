<template>
<div>
	<el-row class="tac">
  <el-col :span="24">
  	<el-menu default-active="1" class="el-menu-demo" mode="horizontal">
	  <el-menu-item index="1"><router-link to="/input/fridge">冰箱数据</router-link></el-menu-item>
	  <el-menu-item index="2"><router-link to="/input/ln">液氮罐数据</router-link></el-menu-item>
	</el-menu>
  </el-col>
 </el-row>
  <router-view></router-view>
</div>

</template>
