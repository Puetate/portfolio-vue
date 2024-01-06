<script setup lang="ts">
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Experiences from './components/Experiences.vue';
import Home from './components/Home.vue';
import Leave from './components/Leave.vue';
import Projects from './components/Projects.vue';
import SideBar from './components/SideBar.vue';
import Skills from './components/Skills.vue';


</script>

<template>
  <SideBar class="" />
  <main class="text-personal-white flex h-full flex-col overflow-y-auto overflow-x-hidden scroll-smooth">
    <div class="px-24" id="content">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experiences />
      <Contact />
      <Leave/>
    </div>
  </main>
</template>
<style scoped></style>
