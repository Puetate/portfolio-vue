<script setup lang="ts">
import ProjectView, { Project } from './ProjectView.vue';
import Title from './Title.vue';

const title = "PROYECTOS";
const projects: Project[] = [
        {
                nameProject: "Vivo Vivo",
                descProject: "Vivo Vivo enables you to send alerts to your family group and share your real-time location in emergency situations, ensuring swift communication and enhanced safety measures.",
                linkGit: "https://github.com/Puetate/vivo-vivo-app",
                linkWeb: "https://vivo-vivo-app-production.up.railway.app/login",
                pictureProject: ["../assets/pr_vivovivo.webp"],
                technologies: [
                        { name: "Flutter", icon: "../assets/flutter.svg", color: "blue" },
                        { name: "NestJS", icon: "../assets/nest.svg", color: "red" },
                        { name: "MongoDB", icon: "../assets/mongo.svg", color: "green" },
                        { name: "Google Maps API", icon: "../assets/google-maps.svg", color: "red" },
                        { name: "Dart", icon: "../assets/dart.svg", color: "cyan" },
                        { name: "TypeScript", icon: "../assets/typescript.svg", color: "blue" },
                ]
        },
        {
                nameProject: "Capy Bills",
                descProject: "Electronic invoicing system with solid functionalities to manage suppliers, inventory, users, purchases and sales. This comprehensive platform empowers businesses by providing efficient control and oversight across key aspects of operations, ensuring a simplified and organized approach to billing and financial management.",
                linkGit: "https://github.com/Puetate/facturacion-electronica-app",
                linkWeb: "#",
                pictureProject: ["../assets/pr_capy_1.webp"],
                technologies: [
                        { name: "React", icon: "../assets/react.svg", color: "cyan" },
                        { name: "Spring", icon: "../assets/spring.svg", color: "green" },
                        { name: "PostgreSQL", icon: "../assets/postgresql.svg", color: "fuchsia" },
                        { name: "Java", icon: "../assets/java.svg", color: "teal" },
                        { name: "TypeScript", icon: "../assets/typescript.svg", color: "blue" },
                ]
        }, {
                nameProject: "Arte CCT",
                descProject: "Virtual gallery that shows the art collection of the Tungurahua Culture House. Immerse yourself in the rich history of each painting, accompanied by narrations that provide insight into the artistic journey. Using the QR scanner feature you can easily discover specific works of art, enhancing your overall gallery experience.",
                linkGit: "https://github.com/Puetate/arteCCT-app",
                linkWeb: "#",
                pictureProject: ["../assets/pr_artecct.webp"],
                technologies: [
                        { name: "Flutter", icon: "../assets/flutter.svg", color: "blue" },
                        { name: "Spring", icon: "../assets/spring.svg", color: "green" },
                        { name: "Angular", icon: "../assets/angular.svg", color: "red" },
                        { name: "MySQL", icon: "../assets/mysql.svg", color: "cyan" },
                        { name: "Dart", icon: "../assets/dart.svg", color: "blue" },
                        { name: "Java", icon: "../assets/java.svg", color: "teal" },
                ]
        }, {
                nameProject: "Travesía Financiera",
                descProject: "Web application for the management of the game 'Financial Journey' by the cooperative Pablo Muñoz Vega, a game similar to Pokémon GO.",
                linkGit: "https://github.com/Puetate/arteCCT-app",
                linkWeb: "#",
                pictureProject: ["../assets/pmv.webp"],
                technologies: [
                        { name: "React", icon: "../assets/react.svg", color: "blue" },
                        { name: "NestJS", icon: "../assets/nest.svg", color: "teal" },
                        { name: "MongoDB", icon: "../assets/mongo.svg", color: "teal" },
                        { name: "TypeScript", icon: "../assets/typescript.svg", color: "teal" },
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