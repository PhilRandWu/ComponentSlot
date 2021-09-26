<template>
  <div id="app">
    <ScopeSlot :asyncData="getData()">
      <template #loading>loading...</template>
      <template v-slot:error="error">{{error.error}}</template>
      <template  v-slot:product="{ datas }">{{datas}}</template>
    </ScopeSlot>
  </div>
</template>

<script>
import getProduct from "@/api/data.js";
import ScopeSlot from "./components/ScopeSlot.vue";

export default {
  name: "App",
  components: {
    ScopeSlot,
  },
  methods: {
    async getData() {
      return await getProduct();
    },
  },
};
</script>

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
