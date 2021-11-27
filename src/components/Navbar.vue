<template>
  <nav class="navbar">
    <router-link
      class="link"
      to="/"
    >
      <i class="fa fa-fw fa-home" />
      <p>Accueil</p>
    </router-link>
    <router-link
      class="link"
      to="/signup"
    >
      <i class="fa fa-fw fa-envelope" />
      <p>S'inscrire</p>
    </router-link>
    <router-link
      class="link"
      to="/profil"
    >
      <i class="fa fa-fw fa-user" />
      <p>Se connecter</p>
    </router-link>
    <a @click="localClear">
      <i class="fas fa-door-open" />
      <p>Se déconnecter</p>
    </a>
  </nav>
</template>

<script>
import router from "../router";

export default {
  name: "Navbar",
  
  methods: {
    localClear() { //Gestion de l'évènement
      localStorage.clear();
      this.$emit("logout");
      router.push({ path: "/login" }); // Redirection vers la page de connexion.
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: #333;
  overflow: hidden; 
}

/* Stylisation des liens à l'intérieur de la barre de navigation */
.navbar a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change la couleur des liens au survol */
.navbar a:hover {
  background-color: #ddd;
  color: black;
}

/* Ajoute une couleur au lien actif/actuel */
.navbar a.active {
  background-color: #04AA6D;
  color: white;
}
</style>