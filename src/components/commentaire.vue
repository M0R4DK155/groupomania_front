<template>
  <article class="Commentaire">
    <h2>posté par {{ auteur }}, le {{ dateMiseEnForme }}</h2>
    <p>Moi j'aime pas les loutres</p>
    <button>Envoyez votre commentaire</button>
  </article>
</template>

<script>
export default {
  name: "Commentaire",
  props: {
    auteur: {
      type: String,
      default: "valeur par défaut",
    },
    date: {
      type: Date,
      default: Date.now(), // La méthode now() renvoie le nombre de millisecondes écoulées sous forme d'un Number (nombre).
    }
  },
  data : ()=> {return  {
    dateMiseEnForme : this.props.date.toLocalDateString()
  };
  }
};
</script>

<style lang="scss" scoped>

</style>

