<script setup lang="ts">

const scrollToSection = (section: string): void => {
    const el = document.getElementById(section);
    if (el) {
        const offsetTop = el.offsetTop;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });

        const contentElement = document.getElementById('content');
        if (contentElement) {
            contentElement.scrollTo({ top: offsetTop, behavior: "smooth" });
        } else {
            console.error("El elemento con ID 'content' no existe o es nulo.");
        }
    }
}
</script>
<template>
    <!-- Sidebar -->
    <header class="text-slate-300 rounded-b-3xl sticky top-0 z-10 flex py-1 sm:items-center px-14 sm:justify-center md:justify-between md:items-center" id="head" style="background-image: linear-gradient(to top, rgba(255, 255, 255, 0.068), rgba(255,255,255,0) 50%); backdrop-filter: blur(10px);">

        <!-- Centrar la imagen -->
        <div class="">
            <img src="../assets/jhoel_pixel.png" alt="jhoel_puetate_pixel" class="rounded-full h-14 py-1">
        </div>

        <!-- Opciones del Sidebar -->
        <nav class="">
            <ul class="relative h-max flex flex-row justify-center items-center gap-x-16 font-semibold">
                <li class="hover:text-neutral-50 cursor-pointer">
                    <a @click="scrollToSection('home')">Home</a>
                </li>
                <li class=" hover:text-neutral-50 cursor-pointer">
                    <a @click="scrollToSection('about')">About</a>
                </li>
                <li class=" hover:text-neutral-50 cursor-pointer">
                    <a @click="scrollToSection('skills')">Skills</a>
                </li>
                <li class=" hover:text-neutral-50 cursor-pointer">
                    <a @click="scrollToSection('projects')">Projects</a>
                </li>
                <li class=" hover:text-neutral-50 cursor-pointer">
                    <a @click="scrollToSection('experiences')">Experience</a>
                </li>
                <li class=" hover:text-neutral-50 cursor-pointer">
                    <a @click="scrollToSection('contact')">Contact</a>
                </li>
            </ul>
        </nav>
    </header>
</template>
  
  
<style scoped>
/* Puedes agregar estilos específicos para tu componente aquí si es necesario */
</style>
  