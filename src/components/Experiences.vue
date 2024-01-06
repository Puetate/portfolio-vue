<script setup lang="ts">
import { IconBriefcase } from '@tabler/icons-vue';
import ExperienceViewVue, { Experience } from './ExperienceView.vue';

import Title from './Title.vue';
import { IconClick } from '@tabler/icons-vue';
import { IconSchool } from '@tabler/icons-vue';
import { IconTrophy } from '@tabler/icons-vue';

const title = "EXPERIENCES";

const experiences: Experience[] = [
    {
        companyExperience: "Encuba's Company intern",
        dateExperience: "2023",
        descExperience: "Development of a scholastic system for the 'Instituto Superior Universitario ITCA'.",
        technologiesUseExperience: [

            { name: "Laravel", icon: "laravel", color: "red" },
            { name: "NestJS", icon: "nest", color: "red" },
            { name: "MySQL", icon: "mysql", color: "cyan" }
        ],
    },
    {
        companyExperience: "Liaison Intern",
        dateExperience: "2023",
        descExperience: "Development of a mobile application for the cultural center of Tungurahua to visualize the most outstanding paintings and the cultural agenda of events.",
        technologiesUseExperience: [
            { name: "Flutter", icon: "flutter", color: "blue" },
            { name: "Spring", icon: "spring", color: "green" },
            { name: "MySQL", icon: "mysql", color: "cyan" },
        ]
    }
]

const education: Experience[] = [
    {
        companyExperience: "CSEI23",
        dateExperience: "2023",
        descExperience: "CSEI23 V Conference on computer science, electronics and industrial engineering",
        technologiesUseExperience: []
    },
    {
        companyExperience: "UNIVERSIDAD TÉCNICA DE AMBATO",
        dateExperience: "2024",
        descExperience: "Third level degree in software engineering",
        technologiesUseExperience: []
    },
]

const awards: Experience[] = [
    {
        companyExperience: "interuniversity competition for innovative technological projects",
        dateExperience: "DECEMBER 16-17, 2022",
        descExperience: "For having participated and obtaining second place in the multi-academic interuniversity competition (CIMA), carried out by the company ENCUBA S.C., in the month of December 2022.",
        technologiesUseExperience: []
    },
    {
        companyExperience: "ministry of labor",
        dateExperience: "MARCH 03, 2023",
        descExperience: "Certificate of labor competencies OFFICE: ADMINISTRATIVE ASSISTANCE WITH OFFICE MANAGEMENT.",
        technologiesUseExperience: []
    },
    {
        companyExperience: "academic recognition from the UNIVERSIDAD TÉCNICA DE AMBATO",
        dateExperience: "JULY 21, 2023",
        descExperience: "The faculty of systems, electronic and industrial engineering and the faculty of accounting and auditing confer recognition for their outstanding participation and having obtained second place in the interuniversity competition for technological and innovative projects, organized by the company ENCUBA S.C. from December 16 to 17, 2022 in the city of Ibarra, as a student.",
        technologiesUseExperience: []
    },
    {
        companyExperience: "Tuapp.org 2023",
        dateExperience: "NOVEMBER 15-17, 2023",
        descExperience: "Certificate to the 'Vivo Vivo' team as FINALIST in the University Apps Tournament - TuApp 2023, held from November 15 to 17, 2023 in the province of Imbabura, Ecuador.",
        technologiesUseExperience: []
    },
]

</script>

<template>
    <section class="flex flex-col justify-center gap-8 text-text_withe" id="experiences">
        <Title :title=title></Title>
        <div class=" flex flex-col items-center">

            <div class="mb-4  border-gray-200 dark:border-gray-700 ">
                <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab"
                    data-tabs-toggle="#default-tab-content" role="tablist">
                    <li class="me-2" role="presentation">
                        <button class="inline-block p-4 border-b-2 rounded-t-lg" id="work-experiences-tab"
                            data-tabs-target="#work_exp" type="button" role="tab" aria-controls="work_exp"
                            aria-selected="false">
                            <div class="flex flex-row gap-4 items-center">
                                <IconBriefcase :size="35" />
                                <p class="text-lg font-bold">WORK</p>
                                <IconClick :size="20" />
                            </div>
                        </button>
                    </li>
                    <li class="me-2" role="presentation">
                        <button
                            class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                            id="education-tab" data-tabs-target="#education" type="button" role="tab"
                            aria-controls="education" aria-selected="false">
                            <div class="flex flex-row gap-4 items-center">
                                <IconSchool :size="35" />
                                <p class="text-lg font-bold">EDUCATION</p>
                                <IconClick :size="20" />
                            </div>
                        </button>
                    </li>
                    <li class="" role="presentation">
                        <button
                            class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                            id="award-rec-tab" data-tabs-target="#awards" type="button" role="tab" aria-controls="awards"
                            aria-selected="false">
                            <div class="flex flex-row gap-4 items-center">
                                <IconTrophy :size="35" />
                                <p class="text-lg font-bold">AWARDS</p>
                                <IconClick :size="20" />
                            </div>
                        </button>
                    </li>

                </ul>
            </div>
        </div>
        <div id="default-tab-content" class="px-6">
            <div class="hidden  rounded-lg " id="work_exp" role="tabpanel" aria-labelledby="work-experiences-tab">
                <!-- <p class=" md:text-white font-bold text-start md:w-2/3 md:text-3xl md:pb-2 subtileExperience">
                    WORK EXPERIENCES
                </p> -->
                <ExperienceViewVue :icon-section="`briefcase`" :experiences="experiences"></ExperienceViewVue>
            </div>
            <div class="hidden rounded-lg" id="education" role="tabpanel" aria-labelledby="education-tab">
                <!-- <p class="text-2xl md:text-white font-bold text-start md:w-2/3 md:text-3xl subtileExperience">
                    Other Experiences
                </p> -->
                <ExperienceViewVue :icon-section="`cap`" :experiences="education"></ExperienceViewVue>
            </div>
            <div class="hidden rounded-lg" id="awards" role="tabpanel" aria-labelledby="award-rec-tab">
                <!-- <p class="text-2xl md:text-white font-bold text-start md:w-2/3 md:text-3xl subtileExperience">
                    Other Experiences
                </p> -->
                <ExperienceViewVue :icon-section="`trophy`" :experiences="awards"></ExperienceViewVue>
            </div>
        </div>

    </section>
</template>


<style scoped>
/* Estilos opcionales para tu componente */
.subtileExperience {
    text-shadow: -1px 0 yellowgreen, 0 1px yellowgreen, 2.5px 0 yellowgreen, 0 -1px yellowgreen;
}
</style>