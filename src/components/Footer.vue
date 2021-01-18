<template>
  <v-footer class="indigo">
    <v-card class="d-flex flex-lg-row flex-column mx-auto">
      <v-col sm="12" md="6">
        <v-card-text class="text-left "
          >Bobcat lms is an open source project. Web application to create
          online coursess
        </v-card-text>
      </v-col>

      <v-col sm="12" md="6" class="text-center mt-md-5 mt-0">
        <v-btn
          class="mx-lg-5 mr-3"
          v-for="(button, index) in buttons"
          :key="index"
          depressed
          text
          color="indigo"
        >
          <v-icon size="32px"> {{ button.icon }}</v-icon>
        </v-btn>
      </v-col>
    </v-card>
    <v-card-text class="white--text text-center">
      {{ new Date().getFullYear() }} — <strong>J</strong>
    </v-card-text>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      buttons: [
        {
          icon: 'login',
          title: 'Войти',
        },
        {
          icon: 'exit_to_app',
          title: 'Выход',
        },
        {
          icon: 'account_circle',
          title: 'Регистрация',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
