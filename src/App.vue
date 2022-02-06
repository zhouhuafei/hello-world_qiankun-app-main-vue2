<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Main - Home</router-link> |
      <router-link to="/about">Main - About</router-link> |
      <router-link to="/child1/">Child1</router-link> |
      <router-link to="/child2/">Child2</router-link>
    </div>
    <div>
      <div @click="$router.push({name:'Child1Home'})">Child1 - Home</div>
      <div @click="$router.push({name:'Child1About'})">Child1 - About</div>
      <div @click="$router.push({name:'Child2Home'})">Child2 - Home</div>
      <div @click="$router.push({name:'Child2About'})">Child2 - Home</div>
    </div>
    <router-view/>
    <div id="container"></div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
