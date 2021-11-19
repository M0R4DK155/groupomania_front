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
  data(){
    return{};
  },
  mounted(){
    // TODO accès $store
    this.$store.dispatch("getAllPosts");
  }
};
</script>