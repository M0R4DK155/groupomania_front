<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Ajoutez vos publications
    </p>
    <h2>test scoped</h2>
    <h3>PUBLICATIONS</h3>
    <publicationAccueil auteur="Obi Wan Kenobi" />
  </div>
</template>

<script>
import publicationAccueil from "./publicationAccueil.vue";

export default {
  name: "HelloWorld",
  
  components: {
    publicationAccueil
  },
  props: {
    msg: {
      type: String,
      default: "Morad 2",
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

img.avatar {
    width: 3rem;
    height: 3rem;
    object-fit: cover;
    border-radius: 50%;
    align-self: center;
    justify-self: center;
}
body {
    margin: 0;
    background-color: #eee;
}
</style>
