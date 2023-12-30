<script setup lang="ts">
import { IconBrandLinkedin } from '@tabler/icons-vue';
import SkillViewVue, { Skill } from './SkillView.vue';
import Title from './Title.vue';



const title = "SKILLS";
const language = "LENGUAJES DE PROGRAMACIÓN";
const skillLanguages: Skill[] = [
    // { nameSkill: "a", icon: "" },
    { nameSkill: "JAVA", icon: IconBrandLinkedin  },
    { nameSkill: "JAVA", icon: IconBrandLinkedin  },
]

</script>

<template>
    <section class="h-screen relative flex flex-col justify-center gap-8 text-text_withe" id="skills">
        <Title :title=title></Title>
        <SkillViewVue :title=language :skills=skillLanguages></SkillViewVue>
    </section>
</template>