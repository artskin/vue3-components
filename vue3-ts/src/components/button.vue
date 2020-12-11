<template>
  <button 
    type="button" 
    class="my-button"
    @click="handleClick"
    :class="[
      type ? 'my-btn--' + type : '',
      size ? 'my-btn--' + size : '',
      {
        'is-circle': circle
      }
    ]"
  >
    <i v-if="icon" :class="icon"></i>
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { toRefs , } from 'vue';
//console.log(Vue)
interface TProps {
  //data: typeof data;
  type: string;
  size: string;
  icon: string;
  circle: boolean;
  disabled: boolean;
}

@Options({
  name:'My-Button',
  emits: ['click'],
  props: {
    type: String,
    size: String,
    icon: String,
    circle: Boolean,
    disabled: Boolean,
  }
})
export default class MyButton extends Vue {
  type!: string;
  size!: string;
  icon!: string;
  circle!: boolean;
  disabled!: boolean;
  
  setup(props: TProps, ctx: any) {
    const { size, disabled } = toRefs(props)
    console.log(toRefs)

    // onMounted(()=>{
    //   console.log('onMounted==>')
    //   console.log(props, ctx)
    // })

    const handleClick = (evt: Event)=>{
      //console.log(size, disabled)
      ctx.emit('click',evt)
    }

    return {
      handleClick
    }
  }
}
//console.log(MyButton.prototype)

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
