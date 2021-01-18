import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '@/views/MainPage';
import ModalSignUp from '@/views/ModalSignUp';
import ModalSignIn from '@/views/ModalSignIn';
import PersonalArea from '@/views/PersonalArea';
import Books from '@/views/Books';
import Book from '@/components/Book';
import Store from '@/store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
  },

  {
    path: '/SignUp/',
    name: 'ModalSignUp',
    component: ModalSignUp,
    props: true,
  },
  {
    path: '/SignIn/',
    name: 'ModalSignIn',
    component: ModalSignIn,
    props: true,
  },
  {
    path: '/Books/',
    name: 'Books',
    component: Books,
    props: true,
  },
  {
    path: '/Book/:id',
    name: 'Book',
    component: Book,
    props: true,
  },
  {
    path: '/PersonalArea/',
    name: 'PersonalArea',
    component: PersonalArea,
    props: true,
    // beforeEnter: guardUser,
    beforeEnter: function(to, from, next) {
      if (Store.state.uid) {
        next();
      } else {
        next('/SignIn/');
      }
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

//function guardUser(to, from, next) {}

export default router;
