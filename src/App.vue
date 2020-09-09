<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
  export default {
    name: "App",
    //provide/inject 是 Vue 在 2.2.0 版本新增的 API，
    // 官网介绍如下： 这对选项需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成立的时间里始终生效。
    provide() {
      return {
        reload: this.reload
      }
    },
    data() {
      return {
        isRouterAlive: true
      };
    },
    methods: {
      reload() {
        this.isRouterAlive = false
        //异步更新DOM
        this.$nextTick(function () {
          this.isRouterAlive = true
        })

      }
    },
    created() {
    },
    mounted() {
    }
  };
</script>

<style>
</style>
