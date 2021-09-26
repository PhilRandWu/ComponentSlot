<template>
  <div class="ScopeSlot-container">
    <slot name="loading" v-if="isLoading">正在加载中</slot>
    <slot name="error" v-else-if="error" :error="error">错误</slot>
    <slot name="product" v-else :datas="datas">产品{{datas}}</slot>
  </div>
</template>

<script>
export default {
  name: 'ScopeSlot',
  props: {
    asyncData: Promise,
  },
  data() {
    return {
      isLoading: true,
      datas: null,
      error: null,
    }
  },
  async created() {
    try {
      this.datas = await this.asyncData;
      this.error = null;
    }catch(err) {
      this.error = err;
    }finally {
      this.isLoading = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
