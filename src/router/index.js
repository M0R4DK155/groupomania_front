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
    path: "/",          // URL correspondant au composant.
    name: "Home",       // Le nom de cette route pour l'étiquetage et le débuggage.
    component: Home,    // Le composant qui doit s'afficher lorsque le path est trouvé.
    meta: {
      title: "Groupomania - Accueil"
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: "Connexion sur Groupomania"
    },
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
    meta: {
      title: "Inscrivez-vous sur Groupomania"
    },
  },
  {
    path: "/publication",
    name: "Publication",
    component: Publication,
    meta: {
      title: "Actualité sur Groupomania",
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
    },
  },
  {
    path: "/404",
    name: "NotFound",
    component: NotFound,
    meta: {
      title: "404 Not Found - Page introuvable",
    },
  },
];

// Le mode HTML5 est créé avec createWebHistory() et est le mode recommandé.
const router = new VueRouter({
  mode: "history",
  routes,
});

// Vérifier si l'utilisateur est autorisé.
router.beforeEach((to, from, next) => {
  if (needAuth(to)) return next({ name: "Login" });
  next();
});

router.afterEach((to) => {
  document.title = to.meta.title;
});

export default router;

// TODO Comment
function needAuth(to){
  if (!to.meta.requiresAuth) return false;
  return ! store._modules.root.state.isAuthenticated;
}