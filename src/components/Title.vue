
<template>
  <div class="border-t-2 border-personal-ternary">

  </div>
  <div class="text-5xl font-extrabold text-white title">
    {{ title }}
  </div>
</template>
  
<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String as PropType<string>,
      required: true,
    },
  },
});
</script>
  
<style scoped>
/* Estilos opcionales para tu componente */
.title {
  text-shadow: -1px 0 yellowgreen, 0 1px yellowgreen, 2.5px 0 yellowgreen, 0 -1px yellowgreen;
}
</style>
  