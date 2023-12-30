<script setup lang="ts">
import { AutoTyperVue } from "auto-typer-vue3";
import SocialNetworks from "./SocialNetworks.vue";
let text = [
    'Bienvenido a mi portafolio como desarrollador FullStack.',
];
</script>

<template>
    <section class="h-screen relative flex flex-col justify-center gap-8 text-text_withe" id="home">

        <div class="text-7xl font-extrabold">
            <span class="text-text_orange" id="name">JHOEL </span>
            <span class="text-text_orange" id="surname">PUETATE</span>
        </div>
        <div>
            <AutoTyperVue class="font-semibold text-xl" componentTag="h1" :text="text" :typingDelay=50 :deletingDelay=75
                :waitBeforeDeleteDelay=200 />
        </div>

        <div class="text-lg">
            Si Deseas ponerte en contacto conmigo escríbeme a
            <a class="underline underline-offset-1 text-slate-300" rel="stylesheet"
                href="mailto:jhoelpablo02@gmail.com">jhoelpablo02@gmail.com</a>.
        </div>
        <button class="w-36 p-1.5 rounded-md  bg-text_orange border-spacing-1 text-black">Descarga mi CV</button>
        <SocialNetworks />
    </section>
</template>

<style scoped>
@import "../../node_modules/auto-typer-vue3/dist/style.css";

#name {
    text-shadow: -1px 0 black, 0 1px black, 5px 0 black, 0 -1px black;
}

#surname {
    text-shadow: -1px 0 black, 0 1px black, 4px 0 black, 0 -1px black;
}
</style>