
<template>
    <div class="flex flex-col justify-center gap-10">
  <div class="border-t-2 border-personal-ternary"></div>

        <p class=" md:text-white font-bold text-center md:w-full md:text-4xl md:pb-2 subtileExperience">
            Thank you for visiting my website!
        </p>
        <div class="flex flex-col justify-center items-center gap-10">

            <button class="px-20 py-7 rounded-md font-medium bg-text_orange border-spacing-1 text-black"
                style="background: linear-gradient(to right, #6dc1f5, #0835b3);">CONTACT ME</button>
            <p class="flex flex-col items-center gap-2">
                Or you can also contact me through:
                <SocialNetworks />
            </p>

        </div>
        <p class="flex flex-row gap-5 py-7 justify-end items-center">
            Made with
            <IconHeartFilled :color="`red`" :size="20" />
            by Jhoel Puetate
        </p>
    </div>
</template>

<script setup lang="ts">
import SocialNetworks from './SocialNetworks.vue';
import { IconHeartFilled } from '@tabler/icons-vue';

</script>

<style scoped>
/* Estilos opcionales para tu componente */
.subtileExperience {
    text-shadow: -1px 0 yellowgreen, 0 1px yellowgreen, 2px 0 yellowgreen, 0 -1px yellowgreen;
}
</style>