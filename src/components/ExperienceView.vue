<script setup lang="ts">
import { defineProps } from 'vue';
import { Technology } from './ProjectView.vue';
import { IconFileTypePdf } from '@tabler/icons-vue';

const getIconUrl = (path: string) => {
    const m = new URL(`${path}`, import.meta.url).href;
    return m;
};

export interface Certificate {
    name: string;
    src: string;
}

export interface Experience {
    dateExperience: string;
    companyExperience: string;
    descExperience: string;
    certificates: Certificate[];
    technologiesUseExperience: Technology[];
}

defineProps<{
    experiences?: Experience[],
    iconSection: string

}>()


</script>
<template>
    <ol class="relative border-s border-gray-500 dark:border-gray-700">

        <div v-for="(exp, index) in experiences" :key="index">
            <li class="mb-10 ms-10">
                <span
                    class="absolute flex items-center mt-2 justify-center w-12 h-12 -start-6 bg-gray-600 rounded-full   dark:ring-gray-900 dark:bg-blue-900">
                    <img class="w-6" :src="getIconUrl(iconSection)" :alt="`${iconSection}`">

                </span>

                <div>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-300 ">{{
                        exp.dateExperience
                    }}</time>
                    <h3 class="text-lg font-semibold text-gray-300 dark:text-white uppercase">{{ exp.companyExperience }}
                    </h3>
                    <p class="text-base text-justify font-normal text-personal-white dark:text-gray-400">
                        {{ exp.descExperience }}
                    </p>
                    <div v-if="exp.certificates.length > 0" class="flex flow-row justify-start items-center mt-3">
                        CERTIFICATES:
                        <div class="flex flex-row gap-3 ml-2 ">
                            <div v-for="(certificate, index) in exp.certificates" :key="index">
                                <a target="_blank" :href="getIconUrl(certificate.src)"
                                    class="inline-flex gap-3 items-center px-4 py-2 text-sm font-medium text-white bg-transparent border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                                    <IconFileTypePdf />
                                    {{ certificate.name }}
                                </a>
                            </div>

                        </div>
                    </div>

                    <ul class="flex flex-wrap gap-3 md:w-2/5 md:mt-1 justify-center p-2 md:justify-start md:pl-0">
                        <div v-for="(technology, index) in exp.technologiesUseExperience" :key="index">
                            <!-- Puedes personalizar el renderizado según tus necesidades -->
                            <div :class="`border-b-${technology.color}-500`"
                                class="w-28 h-14 text-sm flex flex-row justify-between items-center rounded-md  bg-opacity-20 backdrop-blur-md border-b-2 "
                                style="background-image: linear-gradient(to top, rgba(255, 255, 255, 0.11), rgba(255,255,255,0) 50%); backdrop-filter: blur(10px);">

                                <span>{{ technology.name }}</span>
                                <img class="w-7" :src="getIconUrl(technology.icon)" :alt="`${technology.icon}`">

                            </div>
                        </div>
                    </ul>
                </div>
            </li>
        </div>
    </ol>
</template>
