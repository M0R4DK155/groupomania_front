<template>
  <article class="publicationAccueil">
    <h2>posté par {{ auteur }}, le {{ dateMiseEnForme }}</h2>
    <img
      src="https://www.artmajeur.com/medias/standard/b/e/bece/artwork/12871178_img-20191012-212326-1.jpg"
      class="avatar"
      alt="img_profil3"
    >
    <p>Les loutres bébés c'est trop mignon</p>
    <aside><button> Voir les réponses</button></aside>
    <button type="button">
      répondre
    </button>
  </article>
</template>

<script>
export default {
  name: "PublicationAccueil",
  props: {
    auteur: {
      type: String,
      default: "valeur par défaut",
    },
    date: {
      type: String,
      default: "2021-07-07 00:00:00", // La méthode now() renvoie le nombre de millisecondes écoulées sous forme d'un Number (nombre).
    }
  },
  data : function (){
    return  {
      dateMiseEnForme : new Date(this.date).toLocaleString()//showDate(this.date)
    };
  },
};
</script>

<style scoped>
article {
  background-color: white;
  border-radius: 0.5rem;
  padding: 1rem;
  display: grid;
  grid-template-areas:
    "msg msg avatar"
    "date . repondre"
    ". reponses .";
  margin-bottom: 2rem;
}

article h2 {
    grid-area: date;
    font-size: 0.8rem;
}
article img {
    grid-area: avatar;
}

article p {
    grid-area: msg;
}

article aside {
    grid-area: reponses;
}

article button {
    grid-area: repondre;
}

aside button {
    grid-area: voirReponses;
}

</style>
