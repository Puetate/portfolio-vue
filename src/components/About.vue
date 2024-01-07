<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SocialNetworks from './SocialNetworks.vue';
import Title from './Title.vue';
import Carousel from './Carousel.vue';

const title = "ABOUT ME";
let isInViewport = ref(false);
const sectionAbout = ref<HTMLElement | null>(null);

// const handleScroll = () => {
//     // Verifica si el componente está en el viewport

//     if (el.value) {
//         console.log("aaaaa");
//     const boundingBox = el.value.getBoundingClientRect();
//     isInViewport.value = boundingBox.top >= 0 && boundingBox.bottom < window.innerHeight;
//     }
// }
const images: string[] = [
  "../assets/ab_1.webp",
  "../assets/ab_2.webp",
]
onMounted(() => {
  const options = {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin
    threshold: 0.1, // Trigger when 50% of the element is visible
  };

  const observer = new IntersectionObserver((entries) => {
    // entries is an array of observed elements
    const entry = entries[0];

    if (entry.isIntersecting) {

      isInViewport.value = true;
      // Detach the observer after the first intersection if you only want it to trigger once
    } else {
      isInViewport.value = false;
    }
  }, options);

  // Start observing the target element
  if (sectionAbout.value) {
    observer.observe(sectionAbout.value);
  }
});

</script>


<template>
  <section ref="sectionAbout"
    :class="{ 'animate-fade-left animate-once animate-delay-[600ms] animate-duration-1000': isInViewport }"
    class="flex flex-col justify-center gap-1 text-text_withe" id="about">
    <div class="">

      <Title :title=title></Title>
    </div>
    <div class="flex flex-row justify-center items-center gap-10">
      <div class="flex-1 text-justify text-lg ">
        <div class="mb-2">
          Hi there!
        </div>
        <div>
          I am a passionate frontend and backend developer with a special love for mobile development. Among my
          hobbies are skateboarding, playing the guitar, and basketball. I enjoy taking on challenges and diving
          into the world of programming.
        </div>
        <div class="mt-5 text-orange-300 font-medium uppercase">
          I am currently a Software Engineer and I am looking to expand my work field in mobile development.
        </div>
      </div>
      <div class="flex-1">
        <Carousel :images="images"></Carousel>
      </div>

    </div>
    <SocialNetworks />
  </section>
</template>