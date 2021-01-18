<template>
  <div>
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Main from '@/components/Main';
import firebase from 'firebase';
export default {
  name: 'MainPage',
  components: {
    Header,
    Footer,
    Main,
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      // console.log(user.uid);
      this.$store.dispatch('state_change', user);
    });
  },
};
</script>

<style lang="scss" scoped></style>
