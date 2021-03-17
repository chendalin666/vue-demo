<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" ref="hw" @show="show($event)"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  provide: {
    data: 'hello vue-cli'
  },
  components: {
    HelloWorld
  },
  methods: {
    show (e) {
      console.log('show方法被调用' + e)
    }
  },
  mounted () {
    console.log(this)
    this.$refs.hw.foo1 = 'oof'
    this.$children[0].foo2 = '111'
  }
}
</script>
