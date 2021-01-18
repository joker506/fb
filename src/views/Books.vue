<template>
  <v-container grid-list-md
    ><v-card-title primary-title class="headline text-h2 ">
      Books
    </v-card-title>
    <v-layout row wrap>
      <v-flex
        v-for="(book, index) in books"
        :key="index"
        xs12
        sm10
        md8
        offset-sm1
        offset-md2
        red
      >
        <v-card color="info" class="white--text">
          <v-container grid-list-xs>
            <v-layout row>
              <v-flex xs4 md3>
                <!-- <v-card-media :src="require('@/assets' + book.img)">
                </v-card-media> -->
                <v-img
                  :src="require('@/assets' + book.img)"
                  aspect-ratio="1.4"
                  contain
                />
              </v-flex>
              <v-flex>
                <v-card-title primary-title>
                  <div class="">
                    <div class="headline ">{{ book.title }}</div>
                    <div class="">{{ book.authtor }}</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-hover v-slot="{ hover }">
                    <v-btn
                      :to="'/Book/' + index"
                      :elevation="hover ? 10 : 1"
                      :class="hover ? 'green' : 'grey'"
                      depressed
                      >Read more...
                    </v-btn>
                  </v-hover>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
      <!--   <v-layout row wrap primary>
   <v-card class="yellow">
        <v-container
          v-for="item in books"
          :key="item.id"
          grid-list-xs
          class="d-flex flex-column flex-md-row justify-between"
        >
          <v-container grid-list-xs>
            <v-img
              :src="require('@/assets' + item.img)"
              class="col-md-3 col-12"
            >
            </v-img>
          </v-container>
          <v-container grid-list-xs>
            <v-card-text class="pl-5 ">
              {{ item.authtor }}
            </v-card-text>
            <v-card-text class="pl-5 ">
              {{ item.title }}
            </v-card-text>
          </v-container>
          <v-card-actions class="align-end">
            <v-hover v-slot="{ hover }">
              <v-btn
                :elevation="hover ? 10 : 2"
                :class="hover ? 'green' : 'grey'"
                >Read more...</v-btn
              >
            </v-hover>
          </v-card-actions>
        </v-container>
      </v-card> -->
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Books',
  data() {
    return {};
  },
  computed: {
    ...mapState({
      books: (state) => state.books,
    }),
  },
};
</script>

<style lang="scss" scoped></style>
