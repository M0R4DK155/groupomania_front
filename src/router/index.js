import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import Publication from "../views/Publication.vue";
import Profil from "../views/Profil.vue";
import NotFound from "../views/NotFound.vue";
import About from "../views/About.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/", // URL correspondant au composant
    name: "Home", // Le nom de cette route pour l'étiquetage et le débuggage
    component: Home, // Le composant qui doit s'afficher lorsque le path est trouvé.
    meta: {
      title: "Groupomania - Accueil",
      requiresAuth: false
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: "Connexion sur Groupomania",
      requiresAuth: false
    },
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
    meta: {
      title: "Inscrivez-vous sur Groupomania",
      requiresAuth: false
    },
  },
  {
    path: "/publication",
    name: "Publication",
    component: Publication,
    meta: {
      title: "Actailité sur Groupomania",
      requiresAuth: true
    },
  },
  {
    path: "/profil",
    name: "Profil",
    component: Profil,
    meta: {
      title: "Votre profil Groupomania",
      requiresAuth: true,
    },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      title: "A propos",
      requiresAuth: false,
    },
  },
  {
    path: "/:notFound",
    name: "NotFound",
    component: NotFound,
    meta: {
      title: "404 Not Found - Page introuvable",
    },
  },
];

// Le mode HTML5 est créé avec createWebHistory() et est le mode recommandé
const router = new VueRouter({
  mode: "history",
  routes,
});

// Vérifier si l'utilisateur est autorisé / + validité du token si + de 24h
router.beforeEach((to,from,next) => {

  if(to.matched.some(route => route.meta.requiresAuth)){
    const start = store.state.user.start;
    let now = Date.now();
    let diff = now - start; // Calcul de la diff
    // Vérification si le Token à été crée il y a plus de 24H.
    if (diff >= 86400000 || isNaN(diff)) { 
      localStorage.removeItem("user");
      store.state.user = {
        userId: -1,
        token: "",
      };
      next({ path: "/login" });
    }      
    if(store._modules.root.state.Auth.is_auth_token !== ""){
      next({ path: "/login" });
    }else{
      next("/");
    }
  }else{
    next(); //requiresAuth = false
  }
});

router.afterEach((to) => {
  document.title = to.meta.title;
});

export default router;
