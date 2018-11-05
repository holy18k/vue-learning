<template>
  <div>
    <span>当前组件是B, A组件传递的数据为   {{msg}} </span>
  </div>
</template>

<script>
  import inject from '../../inject'

  export default {
    name: 'Solid',
    data () {
      return {
        msg: ''
      }
    },
    mounted () {
      // 监听brotherevent事件
      inject.$on('brotherevent', (val) => {
        this.msg = val
      })
    }
  }
</script>

<style scoped>

</style>
