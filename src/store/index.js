// L'état de l'application est centralisée dans le store.
// là où l'on assemble nos modules et exportons le store.

import Vue from "vue";
import Vuex from "vuex";
const axios = require("axios"); // Librairie permettant de d'interagir avec l'API. (Récupération de données entres autres).

// Définir les valeurs par défaut de la configuration lors de la création de l'instance.
const instance = axios.create({
  baseURL: "http://localhost:3000/", // type String - default '/'
});

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
    token: null,
    isAuthenticated: false,
    test: null,
    // commentaires: {}
  },

  getters: {},

  mutations: {
    setStatus(state, status) {
      state.status = status;
    },
    errMessage(state, error) {
      state.errMessage = error;
    },
    logUser(state, user) {
      instance.defaults.headers.common["Authorization"] =
        "Bearer " + user.token;
      localStorage.setItem("user", JSON.stringify(user));
      state.user = user;
    },
    profil(state, profil) {
      state.profil = profil;
    },
    publications(state, publications) {
      state.publications = publications;
    },
    commentaires(state, commentaires) {
      if (commentaires.length > 0) {
        state.commentaires = commentaires;
      } else {
        state.commentaires = {};
      }
    },
    profil(state, profil) {
      state.profil = profil;
    },
    deleteStore(state) {
      state.publications = {};
      state.profil = {};
      state.status = "";
      state.errMessage = "";
      state.user = {
        userId: -1,
        token: "",
      };
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
    async login ({ commit }, userinfos) {
      try {
        commit("setStatus", "loading"); // La méthode commit acte la mutation.
        const response = await instance.post("/user/login", userinfos);
        commit("setStatus", "");
        commit("logUser", response.data);
        // return response.data;
        //redirection vers accueil
      } catch (err) {
        commit("setStatus", "error_login");
        commit("errMessage", err.response.data);
        throw err;
      }
    },

    /**
     * Requete API pour s'enregistrer
     *
     * @param   {Object}  userinfos             Information du user
     * @param   {String}  userinfos.email       Email de l'utilisateur
     * @param   {String}  userinfos.password    Password du user
     * @param   {String}  userinfos.nom         Nom de l'utilisateur
     * @param   {String}  userinfos.prenom      Prénom du user
     * @param   {String}  userinfos.pseudo      Pseudo de l'utilisateur
     * @param   {Number}  userinfos.role        1 (simple utilisateur)
     * @param   {String}  userinfos.image_url   image de l'utilisateur
     *
     */
    async signup ({ commit, dispatch }, userinfos) {
      const data = new FormData();
      for (const [key, value] of Object.entries(userinfos)) {
        data.append(key, value);
      }
      const headers = {
        header: {
          "Content-Type": "multipart/form-data",
        },
      };
      try {
        commit("setStatus", "loading");
        const response = await instance.post("/auth/signup", data, headers);
        commit("setStatus", "");
        commit("profil", response.data);
        return dispatch("login", {
          email: userinfos.email,
          password: userinfos.password,
        });
      } catch (error) {
        commit("setStatus", "error_signup");
        commit("errMessage", error.response.data);
        throw error;
      }
    },

    // TODO requete API ajout publication

    /**
     * Requete API pour modifier les données utilisateur.
     *
     * @param   {Object}  userinfos          Info du user.
     * @param   {String}  userInfos.nom      Nom du user
     * @param   {String}  userInfos.prenom   Prénom du user
     * @param   {String}  userInfos.pseudo   PSeudo du user
     *
     */
    async updateUser({ dispatch, commit, state }, userinfos) {
      const route = "/auth/".concat("", state.user.userId);
      try {
        commit("setStatus", "loading");
        const response = await instance.put(route, userinfos);
        commit("setStatus", "");
        return dispatch("getProfil");
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    /**
     * Requete API pour supprimer son compte.
     *
     */
    async deleteUser({ commit, state }) {
      const route = "/auth/delete/".concat("", state.user.userId);
      try {
        commit("setStatus", "loading");
        const response = await instance.post(route, {
          userId: state.user.userId,
        });
        commit("setStatus", "");
        localStorage.removeItem("user");
        commit("deleteStore");
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    // TODO requete API modification publication
    // TODO requete API suppression publication

    // requete API récupérer toutes les Publications
    // getAllPosts: async function

    // TODO requete API ajout image
    // TODO requete API modification image
    // TODO requete API suppression image

     /**
     * Requete API pour ajouter un commentaire.
     *
     * @param   {Object}  comment                   Toutes les infos du commentaire
     * @param   {String}  comment.content           Contenu du commentaire
     * @param   {Number}  comment.id_parent         Id de la photo commentée
     * @param   {Number}  comment.userId            Id du user qui ajoute le commentaire
     * @param   {Number}  comment.userIdContent     Id du user qui a ajouté la photo à commenter.
     *
     */
    async addComment  ({ commit, dispatch }, comment) {
      try {
        commit("setStatus", "loading");
        const response = await instance.post("/image/comment/", comment);
        commit("setStatus", "");
        return dispatch("getAllCommentaires", response.data.id_parent);
      }
      catch (error) {
        commit("setStatus", "error_addComment");
        commit("errMessage", error.response.data);
        throw (error);
      };

    },
    // requete API modification commentaire
    // requete API suppression commentaire

    async getLastsPosts({ commit }) {
      const response = await apiCall("post/");
      console.log("...", response);
      commit("test", response);
    },
  },
  modules: {},
});
