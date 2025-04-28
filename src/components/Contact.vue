<script setup lang="ts">
import { AutoTyperVue } from 'auto-typer-vue3';
import Title from './Title.vue';
import { ref } from 'vue';

const name = ref("");
const mail = ref("");
const message = ref("");

const title = "CONTACT";
let text = [
    'Get in Touch',
    'Send me a message!'
];

const sendContact = () => {
    name.value = "";
    mail.value = "";
    message.value = "";
}

</script>

<template>
    <section class="h-screen flex flex-col justify-center gap-8 text-teal-300" id="contact">
        <Title :title=title></Title>

        <div class="">
            <AutoTyperVue class="font-semibold text-xl text-orange-300" componentTag="h1" :text="text" :typingDelay=150
                :deletingDelay=100 :startDelay=600 :repeat="true" :waitBeforeDeleteDelay=200 />
        </div>
        <div class="w-2/3 text-justify text-personal-white">
            Connect with me to discuss exciting opportunities, collaborations, and projects. I can be reached via <a
                class="underline underline-offset-1 text-slate-300" rel="stylesheet"
                href="mailto:pablojpm.dev@gmail.com">pablojpm.dev@gmail.com</a>. and my <a
                class="underline underline-offset-1 text-slate-300" rel="stylesheet"
                href="www.linkedin.com/in/jhoel-puetate">LinkedIn</a>. Looking forward to hearing from
            you and
            exploring new possibilities together
        </div>
        <div class="flex flex-col gap-6 w-2/3">
            <div class="flex flex-row justify-between gap-8">
                <div class="w-1/2">
                    <label for="nombre" class="block text-gray-300 text-sm font-bold mb-2">Name:</label>
                    <input type="text" id="nombre" name="nombre" v-model="name"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline-blue placeholder-gray-300 focus:border-blue-300 bg-personal-ternary"
                        placeholder="Your Name">
                </div>
                <div class="w-1/2">

                    <label for="correo" class="block text-gray-300 text-sm font-bold mb-2">Email:</label>
                    <input type="email" id="correo" name="correo" v-model="mail"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline-blue placeholder-gray-300 focus:border-blue-300 bg-personal-ternary"
                        placeholder="Your Email">
                </div>
            </div>
            <div>
                <label for="asunto" class="block text-gray-300 text-sm font-bold mb-2">Message:</label>
                <input type="text" id="asunto" name="asunto" v-model="message"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline-blue placeholder-gray-300 focus:border-blue-300 bg-personal-ternary"
                    placeholder="Your Message">

            </div>
            <button class="w-full p-1.5 rounded-md font-medium bg-text_orange border-spacing-1 text-black" :onClick="sendContact"
                style="background: linear-gradient(to right, #6dc1f5, #0835b3);">SEND</button>

        </div>

        <div class="">

            <div class="mb-4">

            </div>
        </div>
    </section>
</template>

<style scoped>
@import "../../node_modules/auto-typer-vue3/dist/style.css";
</style>