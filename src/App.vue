<template>
  <div id="app">
    <el-card style="margin: 10px;font-size: 12px;">
      <div style="text-align: left;" slot="header">主应用main的跳转入口</div>
      <el-button icon="el-icon-link" @click="$router.push({name:'Home'})">main - Home</el-button>
      <el-button icon="el-icon-link" @click="$router.push({name:'About'})">main - About</el-button>
      <el-button icon="el-icon-link" @click="$router.push({name:'Child1Home'})">child1 - Home</el-button>
      <el-button icon="el-icon-link" @click="$router.push({name:'Child1About'})">child1 - About</el-button>
      <el-button icon="el-icon-link" @click="$router.push({name:'Child2Home'})">child2 - Home</el-button>
      <el-button icon="el-icon-link" @click="$router.push({name:'Child2About'})">child2 - About</el-button>
    </el-card>

    <router-view/>
    <div id="container"></div>
  </div>
</template>

<style lang="scss">
  @import "@/scss/common";

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
