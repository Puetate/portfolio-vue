<template>
    <div class="pr-16 text-slate-100">
        <div class="text-2xl text-center mb-2 font-extrabold  ">
            {{ title }}
        </div>
        <div class="flex flex-row justify-center items-center gap-16">
            <!-- Utiliza v-for para recorrer el array de skills y renderizar cada habilidad -->
            <div class="" v-for="(skill, index) in skills" :key="index">
                <!-- Puedes personalizar el renderizado según tus necesidades -->
                <div class="flex flex-col gap-2  items-center">
                    <component :is="skill.icon" :size="40" :color="skill.color" />
                    <span>{{ skill.nameSkill }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

export interface Skill {
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
            type: [] as PropType<Skill[]>,
            required: true
        }

    },
});
</script>
  
<style scoped>
/* Estilos opcionales para tu componente */
</style>
  