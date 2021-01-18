import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import firebase from 'firebase';
import firebaseConfig from './config/fb';
import vuetifyConfirm from 'vuetify-confirm';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.use(vuetify, {
  iconfont: 'mdi',
});

Vue.use(vuetifyConfirm, {
  vuetify,
  buttonTrueText: 'Да',
  buttonFalseText: 'Нет',
  color: 'warning',
  icon: 'warning',
  title: 'Собираетесь выйти?',
  width: 450,
  property: '$confirm',
});

Vue.config.productionTip = false;
firebase.initializeApp(firebaseConfig);
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
