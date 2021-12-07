<template>
  <article class="publicationAccueil">
    <br>
    <img
      src="https://www.artmajeur.com/medias/standard/b/e/bece/artwork/12871178_img-20191012-212326-1.jpg"
      alt="Avatar"
      class="avatar"
    >
    <span class="w3-right w3-opacity">Le {{ dateMiseEnForme }}</span>
    <h4>posté par {{ auteur }}</h4><br>
    <hr class="w3-clear">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <div
      class="w3-row-padding"
    >
      <div class="w3-half">
        <img
          src="https://images.theconversation.com/files/427892/original/file-20211021-24-1b9lal4.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip"
          alt="Northern Lights"
          class="w3-margin-bottom"
        >
      </div>
      <div class="w3-half">
        <img
          src="https://cdn.futura-sciences.com/buildsv6/images/wide1920/8/8/6/886a1f5f0b_84113_fs-01-13668997695-1b11821209-k.jpg"
          alt="Nature"
          class="w3-margin-bottom"
        >
      </div>
    </div>
    <button
      type="button"
      class="w3-button w3-theme-d2 w3-margin-bottom"
    >
      <i class="fa fa-comment" />  Comment
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
      default: "2021-07-07 00:00:00", 
    }
  },
  data : function (){
    return  {
      dateMiseEnForme : new Date(this.date).toLocaleString()//showDate(this.date)
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
}

article img {
    width:60px;
}

article div{
    margin:0 -16px;
}

article div img{
    width:25%
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
</style>