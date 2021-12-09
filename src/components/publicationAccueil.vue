<template>
  <article class="publicationAccueil">
    <div class="container">
      <br>
      <div class="item">
        <img
          src="https://www.artmajeur.com/medias/standard/b/e/bece/artwork/12871178_img-20191012-212326-1.jpg"
          alt="Avatar"
          class="avatar"
        >  
      </div>
      <div class="item">
        <span class="w3-right w3-opacity"> Le {{ dateMiseEnForme }}</span>
      </div>
      <div class="item">
        <h4> posté par {{ auteur }}</h4><br>
      </div>
    </div>  
    <hr class="w3-clear">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <div class="w3-row-padding">
      <div class="img-publication">
        <img
          src="https://images.theconversation.com/files/427892/original/file-20211021-24-1b9lal4.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip"
          alt="Northern Lights"
          class="w3-margin-bottom"
        >
      </div>
      <div class="img-publication">
        <img
          src="https://cdn.futura-sciences.com/buildsv6/images/wide1920/8/8/6/886a1f5f0b_84113_fs-01-13668997695-1b11821209-k.jpg"
          alt="Nature"
          class="w3-margin-bottom"
        >
      </div>
    </div>
    <section>
      <commentaire
        :id="id"
        v-bind="(id, author, comment, commentDate) in comments"
        :author="author"
        :content="content"
        :date="commentDate"
      />
    </section>

    <button
      type="button"
      class="w3-button w3-theme-d2 w3-margin-bottom"
    >
      <i class="fa fa-comment" />  Comment
    </button> 
    <button v-if="isAdmin">
      delete
    </button>
  </article>
</template>

<script>
import Commentaire from "./commentaire.vue";
export default {
  name: "PublicationAccueil",
  props: {
    auteur: {
      type: String,
      default: "valeur par défaut",
    },
    date: {
      type: String,
      default: "2021-07-07 11:20:00", // La méthode now() renvoie le nombre de millisecondes écoulées sous forme d'un Number (nombre).
    },
    role: {
      type : Boolean,
      default : true,
    },
    comments : {
      type: Array,
      default : ()=> [{
        id:12,
        content:"fdlkjkldjslkjfkdsjf",
        author : "Jean Luc",
        date :"2021-07-07 11:21:00"
      },{
        id:77,
        content:"Super",
        author : "Jean Baptiste P.",
        date :"2021-07-07 11:22:00"
      }]
    }

  },
  data : function (){
    return  {
      dateMiseEnForme : new Date(this.date).toLocaleString(),//showDate(this.date)
      isAdmin: this.role
    };
  },
};
</script>

<style lang="scss" scoped>
article {
    display: flex;
    background-color: white;
    border-radius: 0.5rem;
    padding: 1rem;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
}

article img {
    width:50%;
}



img.avatar {
    width: 3rem;
    height: 3rem;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: 50%;
    align-self: center;
    justify-self: center;
}

.container {
display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: baseline;
}

.item {
  flex-grow: 1;
  height: 100px;
}

.item + .item {
  margin-left: 2%;
}
</style>