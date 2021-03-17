// subtraction减法组件
<template>
    <div>
        <!-- 访问当前$store的state中count的值,template中可以省略this. -->
        <!-- <h1>当前count值为:{{count}}</h1> -->
        <h1>{{showNum}}</h1>
        <input type="button" value="-1" @click="sub1">
        <!-- 调用mutations中的sub3方法 -->
        <input type="button" value="-3" @click="sub3(3)">
        <input type="button" value="-1Async" @click="subAsync">
        <input type="button" value="-3Async" @click="sub3Async(3)">
    </div>
</template>

<script>
// 导入vuex中的mapState,mapMutations,mapActions和mapGetters函数
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {}
  },
  methods: {
    // 将指定的mapMutations函数映射为当前组件的methods函数
    ...mapMutations(['sub', 'sub3']),
    // 将指定的mapActions函数映射为当前组件的methods函数
    ...mapActions(['subAsync', 'sub3Async']),
    sub1 () {
      // 调用mutations中的sub方法
      this.sub()
    }
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['showNum'])
  }
}
</script>

<style lang="scss" scoped>

</style>
