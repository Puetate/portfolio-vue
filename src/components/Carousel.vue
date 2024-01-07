<template>
    <div class="abs">
        <div id="default-carousel" class="relative w-full" data-carousel="slide">
            <!-- Carousel wrapper -->
            <div class="relative h-56 rounded-lg overflow-hidden  md:h-96">
                <!-- Item 1 -->
                <div v-for="(image, index) in images" :key="index">
                    <div class="hidden duration-700 ease-in-out " data-carousel-item>
                        <img :src="getImageUrl(image)"
                            class="absolute  block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" :alt="image" />
                    </div>
                </div>
            </div>
            <!-- Slider indicators -->
            <div class="absolute z-30 flex -translate-x-1/2 bottom-7 left-1/2 space-x-3 rtl:space-x-reverse">
                <div v-for="(image, index) in images" :key="index">
                    <button type="button" class="w-3 h-3 border-2  rounded-full" aria-current="false" :aria-label="image"
                        :data-carousel-slide-to="index"></button>
                </div>
            </div>
            <!-- Slider controls -->
            <button type="button"
                class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev>
                <span
                    class="inline-flex w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white/65 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <div class="text-black dark:text-gray-800 rtl:rotate-180" aria-hidden="true">
                        <IconChevronLeft  :size="40"/>
                    </div>
                </span>
            </button>
            <button type="button"
                class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next>
                <span
                    class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white/65 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <div class="text-black dark:text-gray-800 rtl:rotate-180" aria-hidden="true">
                        <IconChevronRight :size="40"/>
                    </div>
                </span>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IconChevronLeft } from "@tabler/icons-vue";
import { IconChevronRight } from "@tabler/icons-vue";

defineProps<{
    images?: string[];
}>();

const getImageUrl = (path: string) => {
    const m = new URL(`${path}`, import.meta.url).href;
    console.log(m);

    return m;
};
</script>
