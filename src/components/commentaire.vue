<template>
  <article class="Commentaire">
    <h2>posté par {{ author }}, le {{ dateMiseEnForme }}</h2>
    <textarea
      v-model="content"
      type="input"
      @input="update"
    />
    <button>Envoyez votre commentaire</button>
    <button v-if="admin">
      supprimer
    </button>
  </article>
</template>

<script>
export default {
  name: "Commentaire",
  props: {
    author: {
      type: String,
      default: "valeur par défaut",
    },
    date: {
      type: Date,
      default: Date.now(), // La méthode now() renvoie le nombre de millisecondes écoulées sous forme d'un Number (nombre).
    },
    admin: {
      type: Boolean,
      default:false
    },
    content : {
      type: String,
      default: ""
    },
    id : {
      type: Number,
      default: 0
    }

  },
  data : ()=> {
    return {
      dateMiseEnForme : this.props.date.toLocalDateString()
    };
  }
};
</script>

<style lang="scss" scoped>

</style>

