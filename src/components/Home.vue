<script setup lang="ts">
import { AutoTyperVue } from "auto-typer-vue3";
import SocialNetworks from "./SocialNetworks.vue";
import { Vue3Lottie } from 'vue3-lottie'
import AnimDev from '../assets/an_dev_1.json'

let text = [
    'Welcome to my portfolio as a developer.',
];
const getImageUrl = (path: string) => {
    const m = new URL(`${path}`, import.meta.url).href;
    return m;
};
const cvAsset = "../assets/docs/Curriculum-Jhoel_Puetate.pdf";
const openPDF = () => {
    // Reemplaza 'ruta-al-archivo.pdf' con la ruta real de tu PDF
    const pdfUrl = getImageUrl(cvAsset)
    window.open(pdfUrl, '_blank')
}
</script>

<template>
    <section class="w-full my-9 flex flex-row justify-around items-center text-text_withe" id="home">
        <div class="flex flex-col justify-start gap-8 mt-6">
            <div class="">
                <p class="font-bold text-2xl">
                    I'm Jhoel Puetate a
                </p>
                <div class="h-auto w-2/3 text-7xl font-extrabold">
                    <span class="text-white " id="name">FULL STACK SOFTWARE DEVELOPER </span>
                </div>
                <!-- <span class="text-personal-white" id="surname">PUETATE</span> -->
            </div>
            <div class="text-personal-white">
                <AutoTyperVue class="font-semibold text-xl" componentTag="h1" :text="text" :typingDelay=50 :deletingDelay=75
                    :waitBeforeDeleteDelay=200 />
            </div>

            <div class="text-lg text-personal-white">
                If you wish to get in touch with me, write to me at:
                <a class="underline underline-offset-1 text-slate-300" rel="stylesheet"
                    href="mailto:jhoelpablo02@gmail.com">jhoelpablo02@gmail.com</a>.
            </div>
            <button class="w-36 p-1.5 rounded-md border-spacing-1 text-white" @click="openPDF"
                style="background: linear-gradient(to right, #6dc1f5, #0835b3);">Download CV</button>
            <SocialNetworks />
        </div>
        <div class="flex-1">
            <Vue3Lottie :animationData="AnimDev" :width="400" />
        </div>
    </section>
</template>

<style scoped>
@import "../../node_modules/auto-typer-vue3/dist/style.css";

#name {
    text-shadow: -1px 0 yellowgreen, 0 1px yellowgreen, 3px 0 yellowgreen, 0 -1px yellowgreen;
}

#surname {
    text-shadow: -1px 0 yellowgreen, 0 1px yellowgreen, 4px 0 yellowgreen, 0 -1px yellowgreen;
}
</style>