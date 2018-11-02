<template>

  <div class="list-group">
    <Lion :vals="msg"></Lion>
  </div>
</template>

<script>
  import Lion from './Lion'

  export default {
    components: {
      Lion
    },
    name: 'Animal',
    data () {
      return {
        msg: '父组件的数据,将传递给子组件11155551'
      }
    }
  }
</script>

<style scoped>

</style>
