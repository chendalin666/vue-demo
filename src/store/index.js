import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // state定义数据
  state: {
    count: 0
  },
  // 只有mutations才有权利操作state中的数据
  mutations: {
    // state直接当做形参使用
    add (state) {
      // 使state中的count值自加1
      state.count++
    },
    // step接受外界传来的值
    addN (state, step) {
      // 使state中的count值自加step的值
      if (step.trim() !== '') state.count += parseInt(step)
    },
    sub (state) {
      // 使state中的count值自减1
      state.count--
    },
    sub3 (state, step) {
      // 使state中的count值自减step的值
      if (step !== '') state.count -= parseInt(step)
    }
  },
  // actions用来处理异步操作
  actions: {
    addAsync (context) {
      // 计时器1秒后执行
      setTimeout(() => {
        // 在actions中不能操作state中的数据，只能通过context.commit()触发mutations中函数操作state中的数据
        context.commit('add')
      }, 1000)
    },
    // step用来接收参数
    addNAsync (context, step) {
      setTimeout(() => {
        // context.commit调用addN并传递参数
        context.commit('addN', step)
      }, 1000)
    },
    // 异步减1
    subAsync (context) {
      setTimeout(() => {
        context.commit('sub')
      }, 1000)
    },
    // 异步减3
    sub3Async (context, step) {
      setTimeout(() => {
        context.commit('sub3', step)
      }, 1000)
    }
  },
  // getters对store中的数据进行加工形成新的数据（只会对store中的数据起到包装的作用，不会修改store中的数据）和computed计算属性很像
  // store中的数据发生改变getters中的数据也会随之变化
  getters: {
    showNum (state) {
      return `当前的count值为:${state.count}`
    }
  },
  modules: {
  }
})
