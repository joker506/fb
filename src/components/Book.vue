<template>
  <v-main>
    <v-container grid-list-xs primary class="white--text">
      <v-card>
        <v-card-title depressed>
          {{ book[id].title }}
        </v-card-title>
      </v-card>
      <div>
        <h1>{{ $route.params.id }}</h1>
      </div>
    </v-container>
  </v-main>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Book',
  data() {
    return {
      id: this.$router.currentRoute.params['id'],
    };
  },
  computed: {
    ...mapState({
      book: (state) => state.books,
    }),
  },
};
</script>

<style lang="scss" scoped></style>
