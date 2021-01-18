import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: [
      {
        id: 0,
        authtor: 'J. Rouling',
        title: 'Harry Potter-1',
        img: '/olbooks.jpg',
      },
      {
        id: 1,
        authtor: 'J. Rouling',
        title: 'Harry Potter-2',
        img: '/olbooks.jpg',
      },
      {
        id: 2,
        authtor: 'J. Rouling',
        title: 'Harry Potter-3',
        img: '/olbooks.jpg',
      },
    ],
    errorRegistr: {},
    uid: null,
  },
  mutations: {
    SET_ERROR(state, payload) {
      state.errorRegistr = payload.message;
      console.log(state.errorRegistr);
    },
    SET_UID(state, payload) {
      state.uid = payload;
      //console.log(state.uid);
    },
    SIGN_IN(state, payload) {
      state.uid = payload;
    },
    LOG_OUT(state) {
      state.uid = null;
    },
    UNSET_USER(state) {
      state.uid = null;
    },
  },
  actions: {
    setUser(context, payload) {
      //console.log(payload);
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then((response) => context.commit('SET_UID', response.user.uid))
        .catch(function(error) {
          context.commit('SET_ERROR', error);
        });
    },
    setSignIn(context, payload) {
      //console.log(payload);
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then((response) => context.commit('SET_UID', response.user.uid))
        .catch(function(error) {
          context.commit('SET_ERROR', error);
        });
    },

    logOut(context) {
      firebase
        .auth()
        .signOut()
        .then(context.commit('LOG_OUT'));
    },

    state_change(context, payload) {
      if (payload) {
        context.commit('SET_UID', payload.uid);
      } else {
        context.commit('UNSET_USER');
      }
    },
  },
  modules: {},
});
