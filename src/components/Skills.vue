<script setup lang="ts">
import SkillViewVue, { Skill } from './SkillView.vue';
import Title from './Title.vue';

const title = "SKILLS";

const titleLanguage = "PROGRAMMING LANGUAGES";
const skillLanguages: Skill[] = [
    { nameSkill: "PHP", icon: "../assets/php.svg", color: "cyan", level: "beginner" },
    { nameSkill: "PYTHON", icon: "../assets/python.svg", color: "yellow", level: "beginner" },
    { nameSkill: "JAVA", icon: "../assets/java.svg", color: "blue", level: "intermediate" },
    { nameSkill: "JAVASCRIPT", icon: "../assets/javascript.svg", color: "yellow", level: "intermediate" },
    { nameSkill: "TYPESCRIPT", icon: "../assets/typescript.svg", color: "#0077d8", level: "intermediate" },
    { nameSkill: "DART", icon: "../assets/dart.svg", color: "#26a5ff", level: "advanced" },
];

const titleFramework = "FRAMEWORKS";
const skillFrameworks: Skill[] = [
    { nameSkill: "LARAVEL", icon: "../assets/laravel.svg", color: "red", level: "beginner" },
    { nameSkill: "ANGULAR", icon: "../assets/angular.svg", color: "red", level: "beginner" },
    { nameSkill: "VUE", icon: "../assets/vue.svg", color: "green", level: "beginner" },
    { nameSkill: "NESTJS", icon: "../assets/nest.svg", color: "blue", level: "intermediate" },
    { nameSkill: "REACT", icon: "../assets/react.svg", color: "red", level: "intermediate" },
    { nameSkill: "FLUTTER", icon: "../assets/flutter.svg", color: "#12c4ff", level: "advanced" },
];

const titleDatabase = "DATABASE";
const skillDatabases: Skill[] = [
    { nameSkill: "POSTGRESQL", icon: "../assets/postgresql.svg", color: "blue", level: "beginner" },
    { nameSkill: "SQL SERVER", icon: "../assets/sqlserver.svg", color: "#1DA1F2", level: "intermediate" },
    { nameSkill: "MONGOBD", icon: "../assets/mongo.svg", color: "green", level: "intermediate" },
    { nameSkill: "MYSQL", icon: "../assets/mysql.svg", color: "#0096d1", level: "advanced" },
];

const titleTool = "SOFTWARE AND TOOLS";
const skillTools: Skill[] = [
    // { nameSkill: "a", icon: "../assets/.svg", color:"blue" , level:"beginner"},
    { nameSkill: "GIT", icon: "../assets/git.svg", color: "blue", level: "intermediate" },
    { nameSkill: "JIRA", icon: "../assets/jira.svg", color: "blue", level: "intermediate" },
];


</script>

<template>
    <section class="relative flex flex-col justify-center gap-8 text-text_withe" id="skills">
        <Title :title=title></Title>
        <SkillViewVue :title=titleLanguage :skills=skillLanguages></SkillViewVue>
        <SkillViewVue :title=titleFramework :skills=skillFrameworks></SkillViewVue>
        <SkillViewVue :title=titleDatabase :skills=skillDatabases></SkillViewVue>
        <SkillViewVue :title=titleTool :skills=skillTools></SkillViewVue>
    </section>
</template>