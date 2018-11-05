<template>
  <div class="abcd">
    <Child @childevent="watchChildEvent">
    </Child>
    <p>子组件传递过来的数据为---{{msg}}</p>
  </div>
</template>

<script>
  import Child from './Child'

  export default {
    components: {
      Child
    },
    name: 'Father',
    data () {
      return {
        msg: ''
      }
    },
    methods: {
      watchChildEvent (vals) {
        this.msg = vals
      }
    }
  }
</script>

<style scoped>

</style>
