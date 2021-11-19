<template>
  <section id="content"> 
    <div id="login">
      <label for="email">email</label>
      <input
        id="email"
        v-model="email"
        type="text"
      >
      <label for="pw">Mot de passe</label>
      <input
        id="pw"
        v-model="password"
        type="password"
      >
    </div>    
  </section>
</template>



<script>
import { mapState } from "vuex"; // Cette méthode nous permet de demander à Vuex les propriétés de state de notre choix.
import Input from "@/components/input.vue";

export default {
  name: "Login",
  components: Input,
  data() {
    return {
      email: "",
      password: "",
      contentEmail: "",
      contentPassword: "",
      inputEmail: {
        title: "Email :",
        type: "text",
      },
      inputPassword: {
        title: "Password :",
        type: "password",
      },
    };
  },
  computed: {
    validatedFields() {
      return this.contentEmail != "" && this.contentPassword != ""
        ? true // si la condition vaut true
        : false; // sinon la condition vaut false
    },
    ...mapState(["status", "errMessage"]),
  },
  methods: {
    login() {
      const self = this; // self est utilisé pour maintenir une référence à l'original this même si le contexte change. C'est une technique souvent utilisée dans les gestionnaires d'événements. permet au code dans une fermeture de se référer à la portée parent.
      this.$store // Instanciation du store
        .dispatch("login", { // Propagation des actions avec la methode dispatch
          email: this.contentEmail,
          password: this.contentPassword,
        })
        .then(function () {
          self.$router.push("/publicationAccueil");
        });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>