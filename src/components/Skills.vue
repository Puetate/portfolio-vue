<script setup lang="ts">
import SkillViewVue, { Skill } from './SkillView.vue';
import Title from './Title.vue';

const title = "SKILLS";

const titleLanguage = "LENGUAJES DE PROGRAMACIÓN";
const skillLanguages: Skill[] = [
    { nameSkill: "PHP", icon: "php", color: "cyan" , level:"beginner"},
    { nameSkill: "PYTHON", icon: "python", color: "yellow" , level:"beginner"},
    { nameSkill: "JAVA", icon: "java", color: "blue" , level:"intermediate"},
    { nameSkill: "JAVASCRIPT", icon: "javascript", color: "yellow" , level:"intermediate"},
    { nameSkill: "TYPESCRIPT", icon: "typescript", color: "#0077d8" , level:"intermediate"},
    { nameSkill: "DART", icon: "dart", color: "#26a5ff" , level:"advanced"},
];

const titleFramework = "FRAMEWORKS";
const skillFrameworks: Skill[] = [
    { nameSkill: "LARAVEL", icon: "laravel", color: "red" , level:"beginner"},
    { nameSkill: "ANGULAR", icon: "angular", color: "red" , level:"beginner"},
    { nameSkill: "VUE", icon: "vue", color: "green" , level:"beginner"},
    { nameSkill: "NESTJS", icon: "nest", color: "blue" , level:"intermediate"},
    { nameSkill: "REACT", icon: "react", color: "red" , level:"intermediate"},
    { nameSkill: "FLUTTER", icon: "flutter", color: "#12c4ff" , level:"advanced"},
];

const titleDatabase = "BASE DE DATOS";
const skillDatabases: Skill[] = [
    { nameSkill: "POSTGRESQL", icon: "postgresql", color: "blue" , level:"beginner"},
    { nameSkill: "SQL SERVER", icon: "sqlserver", color: "#1DA1F2" , level:"intermediate"},
    { nameSkill: "MONGOBD", icon: "mongo", color: "green" , level:"intermediate"},
    { nameSkill: "MYSQL", icon: "mysql", color: "#0096d1" , level:"advanced"},
];

const titleTool = "SOFTWARE Y HERRAMIENTAS";
const skillTools: Skill[] = [
    // { nameSkill: "a", icon: "", color:"blue" , level:"beginner"},
    { nameSkill: "GIT", icon: "git", color: "blue" , level:"intermediate"},
    { nameSkill: "JIRA", icon: "jira", color: "blue" , level:"intermediate"},
];


</script>

<template>
    <section class="relative flex flex-col justify-center gap-8 text-text_withe" id="skills">
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