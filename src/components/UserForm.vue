<template>
  <div class="form">
    <h3 class="form__title">Рассчитать и купить полис</h3>
    <p class="form__content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
      dignissimos eveniet, illum incidunt libero illo cupiditate maiores quas
      quam pariatur delectus laborum obcaecati et facere itaque ipsum amet
      beatae impedit.
    </p>

    <input
      id="phone"
      type="text"
      v-model="user.phone"
      placeholder="Login"
      required
    />
    <input
      id="password"
      type="password"
      v-model="user.email"
      placeholder="Password"
      required
    />

    <button
      v-if="this.user.phone.length > 3"
      @click="sendForm(user)"
      type="submit"
    >
      АВТОРИЗОВАТЬСЯ
    </button>

    <div class="user__resp" v-if="respUser.status == 'success'">
      <p>ID: {{ respUser.result.id }}</p>
      <p>VSK_IDs: {{ respUser.result.vsk_id }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'UserForm',
  data() {
    return {
      baseURL: 'https://terr.artsp.ru/local/api/vsk_insurance/eOSAGO',
      errorStatus: 0,
      user: {
        phone: '',
        email: '',
      },
      respUser: {},
      result: 'null',
    };
  },
  methods: {
    sendForm(par) {
      async function signIn() {
        return await axios
          .post(
            'https://terr.artsp.ru/local/api/vsk_insurance/eOSAGO' +
              '/auth/phone/',
            par
          )
          .then(function (response) {
            if (response.data.status == 'success') {
              let param = response.data;
              console.log(param);
              sign(param);
            } else {
              console.log(response.data.status);
            }
          });
      }
      async function sign(param) {
        return await axios
          .post(
            'https://terr.artsp.ru/local/api/vsk_insurance/eOSAGO' +
              '/auth/check/',
            param
          )

          .then(response => console.log(response.data));
      }
      setTimeout(signIn, 3000);
      /*   setTimeout(function() {
        console.log('send');
        return axios.post(this.baseURL + 'auth/phone/', this.user);
      }, 3000);
       .then(response => {
          this.respUser = response.data;
          console.log(this.respUser);
        })
        .catch(function() {
          console.log('ERROR!');
        }); */
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  border: 3px solid lightgray;
}
.form__content {
  width: 400px;
}
.form > input {
  width: 400px;
  height: 48px;
  margin-bottom: 30px;
  border: 1px solid #d3dce6;
  border-radius: 12px;
  padding: 5px 16px 0;
  font-weight: 700;
  cursor: pointer;
  &:focus {
    outline: none;
  }
}
.form > button {
  width: 400px;
  height: 48px;
  background-color: #e1f01e;
  border-radius: 20px;
  margin-bottom: 30px;
  &:hover {
    background-color: #fff;
    cursor: pointer;
  }
}
.user__resp {
  margin-top: 30px;
  width: 100vh;
  height: 30vh;
  padding: 30px;
  text-align: left;
  color: #fff;
  background-color: grey;
  border-radius: 15px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
