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
        <div class="avatar1">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <el-avatar
                style="margin: 25% 0px 0px 0px"
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              ></el-avatar>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item :icon="Plus"
                  ><span @click="logout">Logout</span></el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
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
a,
a:link,
a:visited,
a:hover,
a:active {
  text-decoration: none;
  color: inherit;
}
.avatar1 {
  right: 30px;
  position: absolute;
}
</style>

<script >
import { defineComponent, ref } from "vue";
import {
  ArrowDown,
  CircleCheck,
  Check,
  CirclePlus,
  CirclePlusFilled,
  Plus,
} from "@element-plus/icons";
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
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
  },
});
</script>