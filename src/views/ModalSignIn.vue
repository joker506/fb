<template>
  <div class="form__modal">
    <v-form v-model="valid" class="pb-3 indigo lighten-5">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="user.firstname"
              :rules="nameRules"
              label="Имя"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="user.password"
              type="password"
              :rules="nameRules"
              :counter="6"
              label="Password"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="user.email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <p v-if="errors.length" style="color:red">{{ errors }}</p>

        <v-btn
          :disabled="!valid"
          color="success"
          class="col"
          @click="userSingIn(user)"
        >
          Войти
        </v-btn>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      //id: this.$router.currentRoute.params['id'],

      switch1: false,
      valid: false,
      user: {
        firstname: '',
        password: '',
        email: '',
      },

      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 6 || 'Name must be less ',
      ],

      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    };
  },
  props: ['i'],

  methods: {
    ...mapActions({
      sendInfoSingIn: 'setSignIn',
    }),
    userSingIn(user) {
      this.sendInfoSingIn(user);
      console.log(user);
    },
  },
  computed: {
    ...mapState({
      errors: 'errorRegistr',
      isAuth: state => state.uid,
    }),
  },
  watch: {
    isAuth(uid) {
      if (uid) {
        this.$router.push('/');
      }
    },
  },
};
</script>

<style lang="scss">
.form__modal {
  position: absolute;
  top: 10%;
  left: 50%;
  margin-left: -25%;
  margin-bottom: 15%;
  border-radius: 1%;
}
</style>
