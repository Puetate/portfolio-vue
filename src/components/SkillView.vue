<template>
    <div class="pr-4 text-slate-100">
        <div class="text-2xl text-center mb-2 font-extrabold  ">
            {{ title }}
        </div>
        <div class="flex flex-wrap justify-center items-center gap-16">
            <!-- Utiliza v-for para recorrer el array de skills y renderizar cada habilidad -->
            <div v-for="(skill, index) in skills" :key="index">
                <!-- Puedes personalizar el renderizado según tus necesidades -->
                <div :class="`border-b-${getColorSkill(skill.level)}-500`"
                    class="w-40 flex flex-col py-2 items-center rounded-md  bg-opacity-20 backdrop-blur-md border-b-2 "
                    style="background-image: linear-gradient(to top, rgba(255, 255, 255, 0.068), rgba(255,255,255,0) 50%); backdrop-filter: blur(10px);">
                    <img class="w-10 pb-3" :src="getImageUrl(skill.icon)" :alt="`${skill.icon}`">
                    <span>{{ skill.nameSkill }}</span>
                    <div class="flex" :class="getColorSkill(skill.level)">
                        <IconArrowBadgeUp color="white"></IconArrowBadgeUp>
                        {{ skill.level }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { IconArrowBadgeUp } from '@tabler/icons-vue';

export interface Skill {
    nameSkill: string;
    icon: string;
    color: string;
    level: string;
}

const ColorSkill: Record<string, string> = {
    beginner: 'green',
    intermediate: 'blue',
    advanced: 'yellow',
};

const getColorSkill = (level: string): string => {
    return `text-${ColorSkill[level]}-500`;
}

const getImageUrl = (path: string) => {
    const m = new URL(`${path}`, import.meta.url).href;
    console.log(m);

    return m;
};


defineProps<{
    title: string,
    skills: Skill[]
}>()
</script>
  
<style scoped>
/* Estilos opcionales para tu componente */
</style>
  