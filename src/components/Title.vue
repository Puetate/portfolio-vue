
<template>
    <div class="text-5xl font-extrabold text-text_orange">
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
  </style>
  