// addition加法组件
<template>
    <div>
        <!-- 使用计算属性中mapState的count -->
        <!-- <h1>当前count值为:{{count}}</h1> -->
        <!-- 使用计算属性中mapGetters获取store中的showNum方法 -->
        <h1>{{showNum}}</h1>
        <input type="button" value="+1" @click="add1">
        <input type="button" value="+1Async" @click="addAsync"><br><br>
        <input type="text" v-model="num" placeholder="请输入要增加的值"><br><br>
        <input type="button" value="+n" @click="addN">
        <input type="button" value="+nAsync" @click="addNAsync">
    </div>
</template>

<script>
// 导入vuex中的mapState,mapMutations,mapActions和mapGetters函数
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      num: ''
    }
  },
  methods: {
    // 将指定的mutations函数映射为当前组件的methods函数
    ...mapMutations(['add']),
    // 将指定的mapActions函数映射为当前组件的methods函数
    ...mapActions(['addAsync']),
    add1 () {
      // 调用mutations中的add方法
      this.add()
    },
    addN () {
      // commit就是用来调用mutatinons中的函数的,第二个参数为传递给state的值
      this.$store.commit('addN', this.num)
      // 增加后清空表单数据
      this.num = ''
    },
    // 异步的让count自加n
    addNAsync () {
      // dispatch专门用来触发actions中的函数,第二个参数为传递当前input中的数据
      this.$store.dispatch('addNAsync', this.num)
      this.num = ''
    }
  },
  // 将全局数据映射为当前组件的计算属性
  computed: {
    // 使用mapState获取store中的数据
    ...mapState(['count']),
    // 使用mapGetters获取store中的方法
    ...mapGetters(['showNum'])
  }
}
</script>

<style lang="scss" scoped>

</style>
