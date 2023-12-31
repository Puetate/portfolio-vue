<script setup lang="ts">
import { IconBrandLinkedin, IconDatabase } from '@tabler/icons-vue';
import SkillViewVue, { Skill } from './SkillView.vue';
import Title from './Title.vue';
import { IconBrandJavascript } from '@tabler/icons-vue';
import { IconBrandTypescript } from '@tabler/icons-vue';
import { IconBrandPhp } from '@tabler/icons-vue';
import { IconBrandReact } from '@tabler/icons-vue';
import { IconBrandNodejs } from '@tabler/icons-vue';
import { IconBrandLaravel } from '@tabler/icons-vue';
import { IconBrandAngular } from '@tabler/icons-vue';
import { IconBrandVue } from '@tabler/icons-vue';
import { IconBrandMongodb } from '@tabler/icons-vue';
import { IconBrandMysql } from '@tabler/icons-vue';
import { IconBrandFlutter } from '@tabler/icons-vue';
import { IconBrandPython } from '@tabler/icons-vue';
import { IconBrandGit } from '@tabler/icons-vue';
import { IconServer } from '@tabler/icons-vue';
import { IconCodeCircle2 } from '@tabler/icons-vue';
import { IconSquareRotated } from '@tabler/icons-vue';

const title = "SKILLS";

const titleLanguage = "LENGUAJES DE PROGRAMACIÓN";
const skillLanguages: Skill[] = [
    { nameSkill: "DART", icon: IconCodeCircle2, color: "#26a5ff" },
    { nameSkill: "JAVASCRIPT", icon: IconBrandJavascript, color: "yellow" },
    { nameSkill: "TYPESCRIPT", icon: IconBrandTypescript, color: "#0077d8" },
    { nameSkill: "JAVA", icon: IconBrandLinkedin, color: "blue" },
    { nameSkill: "PHP", icon: IconBrandPhp, color: "cyan" },
    { nameSkill: "PYTHON", icon: IconBrandPython, color: "yellow" },
];

const titleFramework = "FRAMEWORKS";
const skillFrameworks: Skill[] = [
    { nameSkill: "FLUTTER", icon: IconBrandFlutter, color: "#12c4ff" },
    { nameSkill: "REACT", icon: IconBrandReact, color: "red" },
    { nameSkill: "NESTJS", icon: IconBrandNodejs, color: "blue" },
    { nameSkill: "LARAVEL", icon: IconBrandLaravel, color: "red" },
    { nameSkill: "ANGULAR", icon: IconBrandAngular, color: "red" },
    { nameSkill: "VUE", icon: IconBrandVue, color: "green" },

];

const titleDatabase = "BASE DE DATOS";
const skillDatabases: Skill[] = [
    { nameSkill: "MONGOBD", icon: IconBrandMongodb, color: "green" },
    { nameSkill: "MYSQL", icon: IconBrandMysql, color: "#0096d1" },
    { nameSkill: "SQL SERVER", icon: IconDatabase, color: "#1DA1F2" },
    { nameSkill: "POSTGRESQL", icon: IconServer, color: "blue" },

];

const titleTool = "SOFTWARE Y HERRAMIENTAS";
const skillTools: Skill[] = [
    // { nameSkill: "a", icon: "", color:"blue" },
    { nameSkill: "GIT", icon: IconBrandGit, color: "blue" },
    { nameSkill: "JIRA", icon: IconSquareRotated, color: "blue" },

];

</script>

<template>
    <section class="h-screen relative flex flex-col justify-center gap-8 text-text_withe" id="skills">
        <Title :title=title></Title>
        <!-- <div class="text-5xl font-extrabold  text-text_withe">
            {{ title }}
        </div> -->
        <!-- <div v-for="(skill, index) in skillLanguages" :key="index"> -->
        <SkillViewVue :title=titleLanguage :skills=skillLanguages></SkillViewVue>
        <SkillViewVue :title=titleFramework :skills=skillFrameworks></SkillViewVue>
        <SkillViewVue :title=titleDatabase :skills=skillDatabases></SkillViewVue>
        <SkillViewVue :title=titleTool :skills=skillTools></SkillViewVue>

        <i class='bx bx-user'></i>
        <!-- </div> -->
    </section>
</template>