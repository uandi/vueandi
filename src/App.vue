<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
@import '../node_modules/html5-boilerplate/dist/css/normalize.css';

@import './styles/h5bp/main.css';
@import './styles/h5bp/base.css';
@import './styles/h5bp/browserupgrade.css';
@import './styles/h5bp/authors-custom.css';

/*
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*/

@import './styles/h5bp/helper.css';
@import './styles/h5bp/example-mq-rwd.css';
@import './styles/h5bp/print.css';
</style>
