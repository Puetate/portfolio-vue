<template>
    <div>
        <div class="text-5xl font-extrabold  text-text_withe">
            {{ title }}
        </div>
        <div class="flex flex-col justify-center items-center">
            <!-- Utiliza v-for para recorrer el array de skills y renderizar cada habilidad -->
            <div v-for="(skill, index) in skills" :key="index">
                <!-- Puedes personalizar el renderizado según tus necesidades -->
                <component :is="skill.icon" :size="40" color="blue" />
                <span>{{ skill.nameSkill }}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

export interface Skill {
    nameSkill: string;
    icon: any
}
import { defineComponent, PropType } from 'vue';

export default defineComponent({
    props: {
        title: {
            type: String as PropType<string>,
            required: true,
        },
        skills: {
            type: [] as PropType<Skill[]>,
            required: true
        }

    },
});
</script>
  
<style scoped>
/* Estilos opcionales para tu componente */
</style>
  