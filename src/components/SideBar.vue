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
    <aside>
        <!-- Centrar la imagen -->
        <div class="flex items-center justify-center mb-6">
            <img src="../assets/jhoel_pixel.png" alt="jhoel_puetate_pixel" class="rounded-full w-3/4">
        </div>

        <!-- Opciones del Sidebar -->
        <nav class="">
            <ul class="flex flex-col justify-center items-center gap-y-3 font-semibold">
                <li class=" hover:text-neutral-50">
                    <a @click="scrollToSection('home')">Jhoel</a>
                </li>
                <li class=" hover:text-neutral-50">
                    <a @click="scrollToSection('about')">About</a>
                </li>
                <li class=" hover:text-neutral-50">
                    <a @click="scrollToSection('skills')">Skills</a>
                </li>
                <li class=" hover:text-neutral-50">
                    <a @click="scrollToSection('projects')">Projects</a>
                </li>
                <li class=" hover:text-neutral-50">
                    <a @click="scrollToSection('experiences')">Experience</a>
                </li>
                <li class=" hover:text-neutral-50">
                    <a @click="scrollToSection('contact')">Contact</a>
                </li>
            </ul>
        </nav>
    </aside>
</template>
  
  
<style scoped>
/* Puedes agregar estilos específicos para tu componente aquí si es necesario */
</style>
  