<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './pages/Home.vue'
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <div id="nav">
    <router-link to="/home">Home</router-link>
  </div>
  <div id="nav">
    <router-link to="/trade">trade</router-link>
  </div>
  <div id="nav">
    <router-link to="/statistic">statistic</router-link>
  </div>
  <div id="nav">
    <router-link to="/portfolio">protfolio</router-link>
  </div>

  <!-- <HelloWorld msg="HomePage" /> -->
  <router-view></router-view>
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
.nav > a {
  padding: 20px;
}
</style>
