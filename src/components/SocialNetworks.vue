<script setup lang="ts">
import { IconBrandGithubFilled } from '@tabler/icons-vue';
import { IconBrandLinkedin } from '@tabler/icons-vue';
</script>

<template>
    <div class="flex gap-4">

        <a href="https://github.com/Puetate">
            <IconBrandGithubFilled :size="40" color="white" stroke-width="1" />
        </a>

        <a href="https://www.linkedin.com/in/jhoel-puetate-915056127/">
            <IconBrandLinkedin :size="40" color="blue" />
        </a>
    </div>
</template>