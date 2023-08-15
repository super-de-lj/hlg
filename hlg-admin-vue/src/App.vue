<script setup lang="ts"></script>
<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
}

html,
body,
#app,
.app {
  height: 100%;
}
::-webkit-scrollbar {
  display: none;
}
</style>
