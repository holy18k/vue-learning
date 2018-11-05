<template>
  <div>
    <Son @childevent="watchChildEvent" ref="childComp"></Son>
    <input type="button" @click="parentEvent" value="父组件触发"/>
    <P>
      子组件传递的数据为=====> {{msg}}
    </P>
  </div>
</template>

<script>
  import Son from './Son'

  export default {
    components: {
      Son
    },
    name: 'Parent',
    data () {
      return {
        msg: ''
      }
    },
    methods: {
      // 子组件触发事件后的回调,参数为子组件传递的数据.
      watchChildEvent (vals) {
        this.msg = vals
      },
      // 通过refs属性获取子组件实例,由父组件操作子组件的方法触发事件.
      parentEvent () {
        this.$refs['childComp'].target();
      }
    }
  }
</script>

<style scoped>

</style>
