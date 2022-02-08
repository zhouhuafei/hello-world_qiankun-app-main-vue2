<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>$store.state.hello：{{$store.state.hello}}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  created () {
    setTimeout(() => {
      this.$store.commit('CHANGE_HELLO')
    }, 5000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
