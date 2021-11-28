<template>
  <body>
    <header>
      <Navbar />
      <div id="app">
        <router-view />
      </div>
    </header>
  </body>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Groupomania",
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Open Sans", sans-serif;
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

img {
    width: 50%;
}
</style>
