<template>
  <body>
    <header>
      <Navbar />
      <div id="app">
        <router-view /> <!-- composant fonctionnel qui fait le rendu du composant correspondant au chemin donné -->
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
* {
  font-family: "Open Sans", sans-serif;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f5f7f8 !important;
  max-width: 100%;
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
