<script setup lang="ts">
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Experiences from './components/Experiences.vue';
import Home from './components/Home.vue';
import Projects from './components/Projects.vue';
import SideBar from './components/SideBar.vue';
import Skills from './components/Skills.vue';


</script>

<template>
  <main class="flex h-screen">
    <SideBar class="w-1/6 bg-bg_main text-white p-4 flex flex-col justify-center items-center" />
    <div class="w-5/6  bg-gray-800 content overflow-y-auto max-h-screen pl-14" id="content">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experiences />
      <Contact />
    </div>
  </main>
</template>
<style scoped></style>
