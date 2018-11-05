<template>
  <p>

  </p>
</template>

<script>
  export default {
    name: 'Son',
    data () {
      return {
        texts: '这是子组件的数据,将由子组件操作触发,传递给父组件'
      }
    },
    methods: {
      target () {
        this.$emit('childevent', this.texts)
      }
    }
  }
</script>

<style scoped>

</style>
