<template>
  <div>
    {{vals}}
  </div>
</template>

<script>
  export default {
    props:{ //父组件传值 可以是一个数组，对象
      vals:{
        type:String,  //类型为字符窜
        default:"123" //可以设置默认值
      }
    }
  }
</script>

<style scoped>

</style>
