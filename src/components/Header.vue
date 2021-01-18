<template>
  <div class="">
    <v-toolbar dark class="primary d-flex flex-sm-column">
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="isActive = !isActive"
      ></v-app-bar-nav-icon>
      <v-menu
        v-model="isActive"
        flat
        origin="center center"
        transition="scale-transition"
      >
        <v-list width="300px">
          <v-list-item v-for="(item, index) in isAuth" :key="index">
            <v-hover
              ><v-list-item-title class="header__item" @click="_item">
                <router-link :to="item.path">{{ item.title }}</router-link>
              </v-list-item-title>
            </v-hover>
          </v-list-item>
        </v-list>
      </v-menu>
      <router-link to="/" tag="span" style="cursor:pointer">
        <v-toolbar-title>Bobcat </v-toolbar-title></router-link
      >
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <!--       :to="{ name: 'Modal', params: { i: button } }"
 -->
        <!--           :to="'/Modal/' + index"
 -->
        <v-btn
          v-for="(button, index) in isAuth"
          :key="index"
          depressed
          color="primary"
          :to="button.path"
        >
          <v-icon dark left> {{ button.icon }}</v-icon>
          {{ button.title }}
        </v-btn>

        <v-btn v-if="uid" color="primary" depressed @click="logOut">
          <v-icon>exit_to_app</v-icon>
          Выход</v-btn
        >
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Header',

  data() {
    return {
      isActive: false,
      buttons: [
        {
          id: 2,
          icon: 'login',
          title: 'Войти',
          path: '/SignIn/',
        },
        {
          id: 4,
          icon: 'account_circle',
          title: 'Регистрация',
          path: '/SignUp/',
        },
      ],
      buttonsAuth: [
        {
          id: 0,
          icon: 'local_library',
          title: 'Читать',
          path: '/Books/',
        },
        {
          id: 1,
          icon: 'school',
          title: 'Учить',
        },
        {
          id: 3,
          icon: 'person',
          title: 'Личный кабинет',
          path: '/PersonalArea/',
        },
      ],
    };
  },
  methods: {
    _item(item) {
      console.log(item.title);
    },

    logOut() {
      this.$confirm('Решили выйти?').then((res) => {
        console.log(res);
        if (res === true) {
          this.$store.dispatch('logOut');
        }
      });
    },

    openMenu() {
      console.log('click');
    },
  },
  computed: {
    ...mapState({
      uid: (state) => state.uid,
    }),

    isAuth() {
      return this.uid ? this.buttonsAuth : this.buttons;
    },
  },
};
</script>

<style lang="scss" scoped>
.header__item {
  cursor: pointer;
}
</style>
