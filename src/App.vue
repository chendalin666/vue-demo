<template>
  <div>
    <Subtraction></Subtraction>
    <hr>
    <Addition></Addition>
  </div>
</template>

<script>
import Subtraction from './components/subtraction.vue'
import Addition from './components/addition.vue'

export default {
  data () {
    return {}
  },
  components: {
    Subtraction,
    Addition
  }
}
</script>

<style lang="scss" scoped>

</style>
