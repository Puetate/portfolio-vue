<template>
    <div>

    </div>
</template>

<script lang="ts">

export interface Project {
    nameSkill: string;
    icon: any,
    color: string
}
import { defineComponent, PropType } from 'vue';

export default defineComponent({
    props: {
        title: {
            type: String as PropType<string>,
            required: true,
        },
        skills: {
            type: [] as PropType<Project[]>,
            required: true
        }

    },
});
</script>