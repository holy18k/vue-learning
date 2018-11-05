<template>
  <div>
    <p>
      <span>A组件->{{msg}}</span><br/>
      <input type='button' value="点我把A组件数据传递给组件B" @click="send"/>
    </p>
  </div>
</template>

<script>
  import inject from '../../inject'

  export default {
    name: 'Gas',
    data () {
      return {
        msg: '我是A组件的数据.'
      }
    },
    methods: {
      send () {
        inject.$emit('brotherevent', this.msg)
      }
    }
  }
</script>

<style scoped>

</style>
