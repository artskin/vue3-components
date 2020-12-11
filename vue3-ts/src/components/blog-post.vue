<template>
  <blog-post>
    <template v-slot:header>
      <h1>About Me</h1>
    </template>

    <template v-slot:default>
      <p>
        Here's some page content, which will be included in $slots.default.
      </p>
    </template>

    <template v-slot:footer>
      <p>Copyright 2020 Evan You</p>
    </template>
  </blog-post>
</template>

<script lang="ts">
//import { Options, Vue } from 'vue-class-component';
import 'vue';
//console.log('sss',Vue)
// const app = Vue.createApp({})
// app.component('blog-post', {
//   render() {
//     return Vue.h('div', [
//       Vue.h('header', this.$slots.header()),
//       Vue.h('main', this.$slots.default()),
//       Vue.h('footer', this.$slots.footer())
//     ])
//   }
// })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my-button{
  background: #ccc;
  border-width: 1px;
  padding: 4px 10px;
}
.my-btn--info{
  background: rgb(30, 99, 177);
}
.my-btn--danger{
  background:#c00;
}
.is-circle{
  border-radius: 2em;
}
</style>
