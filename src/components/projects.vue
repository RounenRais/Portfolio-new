<script>
import { onMounted } from 'vue';

export default {

    props:["deger"],
  data() {
    return {};
  },
  setup() {
    onMounted(() => {
      
    });
  },
};
</script>

<template>
  <div class="mainDShadow projects " :class=deger>
    <h1>Work</h1>

    <div class="project shadow"></div>
  </div>
</template>
