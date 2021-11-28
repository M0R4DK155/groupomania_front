<template>
  <section>
    <div class="publication-container">
      <h2>Publications</h2>
      <button
        type="button"
        class="btn"
        @click="showModal = true"
      >
        AJOUTER UNE PUBLICATION
      </button>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Publication",
  props: {
    auteur: {
      type: String,
      default: "valeur par défaut",
    },
    date: {
      type: String,
      default: "2021-07-07 00:00:00", // La méthode now() renvoie le nombre de millisecondes écoulées sous forme d'un Number (nombre).
    },
    image: {
      type: String,
      default: ""
    },
  },
  data(){
    return{};
  },
  mounted(){
    // TODO accès $store
    this.$store.dispatch("getAllPosts");
  }
};
</script>