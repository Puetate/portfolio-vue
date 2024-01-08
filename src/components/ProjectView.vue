
<script setup lang="ts">
export interface Technology {
    name: string,
    icon: string,
    color?: string
}
export interface Project {
    nameProject: string;
    pictureProject: string[];
    descProject: string;
    linkGit: string;
    linkWeb: string;
    technologies: Technology[];
}
import { IconBrandGithubFilled } from '@tabler/icons-vue';
import { defineProps } from 'vue';
import { IconWorld } from '@tabler/icons-vue';
import Carousel from './Carousel.vue';


defineProps<{
    projects?: Project[]
}>()

const getImageUrl = (path: string) => {
    const m = new URL(`${path}`, import.meta.url).href;
    return m;
};

const getClassForImage = (index: number) => {
    const md = index % 2 === 0 ? "md:right-0" : "md:left-0";
    return `rounded-t md:w-3/5 w-auto object-cover md:absolute ${md} md:rounded`

}

const getClassForCard = (index: number) => {
    return `flex flex-col items-center mt-2 md:absolute md:left-0 md:w-full ${index % 2 === 0
        ? "md:items-start md:text-start"
        : "md:items-end md:text-end"
        } last:border-red-500`
}

const getClassForTitle = (index: number) => {
    const md = index % 2 === 0 ? "md:text-start" : "md:text-end";
    return `text-3xl md:text-white font-bold text-start md:w-2/3 md:text-4xl ${md} titleProject`
}

const getClassForDescription = (index: number) => {
    return `p-4 md:bg-personal-ternary md:rounded-lg md:text-md md:w-1/2 md:mt-3 font-bold md:text-white md:shadow-xl md:shadow-slate-900
             ${index % 2 === 0 ? "md:text-justify" : "md:text-justify"}`;
}

const getClassForTechnologies = (index: number) => {
    return `flex flex-wrap gap-3 mt-3 md:w-2/5 md:mt-3 justify-center p-2
            ${index % 2 === 0 ? "md:justify-start md:pl-0" : "md:justify-end md:pr-0"}
            `;
}

const getClassForLinks = (index: number) => {
    return `flex justify-center gap-5 pt-4  md:w-2/5  mb-5 md:mb-0
            ${index % 2 === 0
            ? "md:justify-start md:pr-5"
            : "md:justify-end md:pl-5"
        }
            `;
}

</script>

<template>
    <div v-for="(project, index) in projects" :key="index">
        <div class="flex flex-col items-center  justify-center my-10  border-2 border-x-zinc-100
          rounded-lg shadow-lg md:flex-row md:border-none md:shadow-none md:relative md:h-96">

            <div v-if="project.pictureProject.length > 1">
                <Carousel :images="project.pictureProject"></Carousel>
            </div>
            <img v-else :src="getImageUrl(project.pictureProject[0])" alt="" :class="getClassForImage(index)">


            <div :class="getClassForCard(index)">
                <div :class="getClassForTitle(index)">
                    {{ project.nameProject }}
                </div>

                <div :class="getClassForDescription(index)">
                    {{ project.descProject }}
                </div>

                <ul :class="getClassForTechnologies(index)">
                    <!-- <div v-for="(technology, index) in project.technologies" :key="index">
                        <li class="bg-gray-500 p-1 rounded font-bold text-white text-sm ">
                            {{ technology }}
                        </li>
                    </div> -->

                    <div v-for="(technology, index) in project.technologies" :key="index">
                        <!-- Puedes personalizar el renderizado según tus necesidades -->
                        <div :class="`border-b-${technology.color}-500`"
                            class="w-28 h-14 text-sm flex flex-row justify-around items-center rounded-md  bg-opacity-20 backdrop-blur-md border-b-2 "
                            style="background-image: linear-gradient(to top, rgba(255, 255, 255, 0.11), rgba(255,255,255,0) 50%); backdrop-filter: blur(10px);">

                            <span>{{ technology.name }}</span>
                            <img class="w-7" :src="getImageUrl(technology.icon)" :alt="`${technology.icon}`">

                        </div>
                    </div>
                </ul>
                <div :class="getClassForLinks(index)">
                    <a :href="project.linkGit">
                        <IconBrandGithubFilled :size="40" color="white" stroke-width="1" />
                    </a>

                    <a v-if="project.linkWeb != '#'" target="_blank" :href="project.linkWeb">
                        <IconWorld :size="40" color="white" stroke-width="1" />
                    </a>
                </div>

            </div>
        </div>
    </div>
</template>

  
<style scoped>
/* Estilos opcionales para tu componente */
.titleProject {
    text-shadow: -1px 0 yellowgreen, 0 1px yellowgreen, 2.5px 0 yellowgreen, 0 -1px yellowgreen;
}
</style>
  