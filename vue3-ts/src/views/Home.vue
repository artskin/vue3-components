<template>
  <div class="home">
    <my-button type="info">确定</my-button>
    <MyButton circle>警告</MyButton>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <el-button type="warning">警告</el-button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import MyButton from '@/components/button.vue'; 

@Options({
  components: {
    HelloWorld,
    MyButton
  },
})
export default class Home extends Vue {
  
}
</script>
