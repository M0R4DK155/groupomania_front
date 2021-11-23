import Vue from "vue";
import Vuex from "vuex";
const axios = require("axios"); // Librairie permettant de d'interagir avec l'API. (Récupération de données entres autres).

// Définir les valeurs par défaut de la configuration lors de la création de l'instance.
const instance  =  axios.create ( { 
  baseURL : "http://localhost:3000/" // type String - default '/'
} ) ; 

// Fonction pour récuperer un utilisateur dans le localStorage
let user = localStorage.getItem("user");

// Modifier les valeurs par défaut après la création de l'instance.
// TODO instance.defaults.headers.common["Authorization"] = "Bearer" + user.token;

Vue.use(Vuex);


/**
 * [async description]
 *
 * @param   {String | Number}  url     [url description]
 * @param   {String}  [method]  [method description]
 * @param   {Object}  [body]    [body description]
 *
 * @return  {Promise}          [return description]
 */
// async function apiCall(url, method, body){
//   const options = {
//     headers : {
//       "Accept": "application/json",
//       "Content-Type": "application/json",
//       "Authorization": "Bearer " +this.state.token+" "+this.state.userId
//     }
//   };
//   if (method && method !== "GET") {
//     options.method = method;
//     if (body) options.body = JSON.stringify(body);
//   }
//   const response = await fetch(server+url,options);
//   return await response.json();
// }

export default new Vuex.Store({
  state: {
    status: "",
    errMessage: "",
    profil: {},
    userId: 0,
    publications: [],
    token : null,
    isAuthenticated: false,
    test: null
    // commentaires: {}
  },
  mutations: {
    setStatus(state, status) {
      state.status = status;
    },
    errMessage(state, error) {
      state.errMessage = error;
    },
    logUser(state, user) {
      instance.defaults.headers.common["Authorization"] = "Bearer " + user.token;
      localStorage.setItem("user", JSON.stringify(user));
      state.user = user;
    },
    profil(state, profil) {
      state.profil = profil;
    },
  },
  actions: {
    /**
     * requete API connexion.
     *
     * @param   {Object}  userinfos             Information de l'utilisateur.
     * @param   {String}  userinfos.email       Email de l'utilisateur.
     * @param   {String}  userinfos.password    Password du user.
     *
     * @return  {JSON}                          Information complète de l'utilisateur.
     */
    login: async ({ commit }, userinfos) => {
      try {
        commit("setStatus", "loading"); // La méthode commit acte la mutation.
        const response = await instance.post("/user/login", userinfos);
        commit("setStatus", "");
        commit("logUser", response.data);
        // return response.data;
        //redirection vers accueil
      }
      catch (err) {
        commit("setStatus", "error_login");
        commit("errMessage", err.response.data);
        throw (err);
      };
    },
    // requete API inscription
    // requete API ajout publication
    // requete API modification profil
    // requete API suppression profil
    // requete API modification publication
    // requete API suppression publication

    // requete API récupérer toutes les Publications
    // getAllPosts: async function

    // requete API ajout image
    // requete API modification image
    // requete API suppression image
    // requete API ajout commentaire
    // requete API modification commentaire
    // requete API suppression commentaire

    async getLastsPosts({ commit }){
      const response = await apiCall("post/");
      console.log("...",response);
      commit ("test", response);
    }
  },
  modules: {
  }
});
