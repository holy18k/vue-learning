<template>
  <div>
    <input type="button" value="子组件主动触发事件" @click="sendToParent"/>
  </div>
</template>

<script>
  export default {
    name: 'child',
    data () {
      return {
        txt: '这是子组件的数据,将由组件主动触发传给父组件.'
      }
    },
    methods: {
      sendToParent () {
        // 触发在被引用(parent)的子组件中声明的事件,
        this.$emit('childevent', this.txt);
      }
    }
  }
</script>

<style scoped>

</style>
