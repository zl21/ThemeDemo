<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import Theme from './components/Theme.vue'

</script>

<template>
  <!-- <el-button type="primary" @click="btnClick(1)">Vue3</el-button>
  <el-button type="primary" @click="btnClick(2)">Theme</el-button> -->
  <p>
    <router-link to="/hello-world">Go to HelloWorld</router-link>
    <br>
    <router-link to="/theme">Go to Theme</router-link>
  </p>

  <router-view></router-view>

  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" />
  <Theme /> -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
