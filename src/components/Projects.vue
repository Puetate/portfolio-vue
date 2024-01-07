<script setup lang="ts">
import ProjectView, { Project } from './ProjectView.vue';
import Title from './Title.vue';

const title = "PROYECTOS";
const projects: Project[] = [
        {
                nameProject: "Vivo Vivo",
                descProject: "Vivo Vivo enables you to send alerts to your family group and share your real-time location in emergency situations, ensuring swift communication and enhanced safety measures.",
                linkGit: "",
                pictureProject: ["../assets/pr_vivovivo.webp"],
                technologies: [
                        { name: "Flutter", icon: "flutter", color: "blue" },
                        { name: "NestJS", icon: "nest", color: "red" },
                        { name: "MongoDB", icon: "mongo", color: "green" },
                        { name: "Google Maps API", icon: "google-maps", color: "red" },
                        { name: "Dart", icon: "Dart", color: "cyan" },
                        { name: "Typescript", icon: "typescript", color: "blue" },
                ]
        },
        {
                nameProject: "Capy Bills",
                descProject: "Electronic invoicing system with solid functionalities to manage suppliers, inventory, users, purchases and sales. This comprehensive platform empowers businesses by providing efficient control and oversight across key aspects of operations, ensuring a simplified and organized approach to billing and financial management.",
                linkGit: "",
                pictureProject: ["../assets/pr_capy_1.webp"],
                technologies: [
                        { name: "React", icon: "React", color: "cyan" },
                        { name: "Spring", icon: "spring", color: "green" },
                        { name: "PostgreSQL", icon: "postgresql", color: "fuchsia" },
                        { name: "Java", icon: "java", color: "teal" },
                        { name: "Typescript", icon: "typescript", color: "blue" },
                ]
        }, {
                nameProject: "Arte CCT",
                descProject: "Virtual gallery that shows the art collection of the Tungurahua Culture House. Immerse yourself in the rich history of each painting, accompanied by narrations that provide insight into the artistic journey. Using the QR scanner feature you can easily discover specific works of art, enhancing your overall gallery experience.",
                linkGit: "",
                pictureProject: ["../assets/pr_artecct.webp"],
                technologies: [
                        { name: "Flutter", icon: "flutter", color: "blue" },
                        { name: "Spring", icon: "spring", color: "green" },
                        { name: "Angular", icon: "angular", color: "red" },
                        { name: "MySQL", icon: "mysql", color: "cyan" },
                        { name: "Dart", icon: "dart", color: "blue" },
                        { name: "Java", icon: "java", color: "teal" },
                ]
        },
]

</script>

<template>
        <section class="flex flex-col gap-8 mb-10 text-text_withe" id="projects">
                <Title class="mt-8" :title=title></Title>
                <ProjectView :projects="projects"></ProjectView>
        </section>
</template>