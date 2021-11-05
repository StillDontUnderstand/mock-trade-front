<template>
  <!-- <h1 class="nav">Layout</h1> -->
  <el-container>
    <el-header class="nav">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="handleSelect"
      >
        <el-menu-item index="1">
            <router-link to="/main/trade">Trade</router-link>
        </el-menu-item>
        <el-sub-menu index="2">
          <template #title>Workspace</template>
          <el-menu-item index="2-1">item one</el-menu-item>
          <el-menu-item index="2-2">item two</el-menu-item>
          <el-menu-item index="2-3">item three</el-menu-item>
          <el-sub-menu index="2-4">
            <template #title>item four</template>
            <el-menu-item index="2-4-1">item one</el-menu-item>
            <el-menu-item index="2-4-2">item two</el-menu-item>
            <el-menu-item index="2-4-3">item three</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="3" disabled>Info</el-menu-item>
        <el-menu-item index="4"
          ><router-link to="/main/portfolio">Portfolio</router-link>
        </el-menu-item>
        <el-menu-item index="5"
          ><router-link to="/main/statistic">Statistic</router-link>
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-container>
      <!-- <el-aside width="200px"> </el-aside> -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.nav {
  margin: 0px;
  background: #cddc39;
}
a,a:link,a:visited,a:hover,a:active{
    text-decoration: none;
    color:inherit;
}
</style>

<script >
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const activeIndex2 = ref("1");
    const handleSelect = (key, keyPath) => {
      console.log(key, keyPath);
    };
    return {
      activeIndex2,
      handleSelect,
    };
  },
});
</script>