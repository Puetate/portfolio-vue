<script setup lang="ts">
import SocialNetworks from './SocialNetworks.vue';

</script>

<template>
    <section class="h-screen relative flex flex-col justify-center gap-8 text-text_withe" id="about">

        <div class="text-5xl font-extrabold text-text_orange">SOBRE MI</div>

        <div class="flex flex-row h-max">
            <div class="flex-auto w-72 text-justify text-xl">
                <div class="mb-2">
                    ¡Hola!
                </div>
                <div>
                    Soy un desarrollador Full Stack con experiencia en NestJS para el backend, React para el frontend y
                    Flutter
                    para aplicaciones móviles. Mi enfoque se centra en la construcción de sistemas escalables y experiencias
                    de
                    usuario intuitivas. Apasionado por la innovación tecnológica, busco oportunidades para aplicar mis
                    habilidades y crear soluciones impactantes.
                </div>
                <div class="mt-4 text-text_orange font-medium uppercase">
                    Actualmente soy Ingeniero en Software y busco ampliar mi campo laboral en el desarrollo móvil.
                </div>
            </div>
            <div class="flex flex-auto w-2 items-center justify-center">
                <img src="../assets/jhoel_pixel.png" alt="jhoel_puetate_pixel" class="rounded-full w-36">
            </div>

        </div>
        <SocialNetworks />
    </section>
</template>