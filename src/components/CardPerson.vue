<template>
    <div
        class="m-auto w-full text-center max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="flex flex-col items-center p-2">
            <p class="dark:text-white" v-if="titulo != null">{{ titulo }}</p>
            <img class="w-24 h-24  rounded-full shadow-lg" :src="person.avatar" alt="Bonnie image" />
            <h6 class="mb-1 text-sm font-medium text-gray-800 dark:text-white"> {{ person.email }}</h6>
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{{ person.first_name }} {{ person.last_name }}</h5>
            <button type="button" :class="{ 
                'focus:outline-none text-white focus:ring-4  font-medium rounded-lg text-sm px-2 py-1 me-2 mb-2': true,  
                'bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800': !selected,
                'bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800': selected,
            }"
            @click="$emit('selected',person)">
                {{ !selected ? "Selecionar" : "Desmarcar" }}
            </button>
            <router-link :to="{name: RouterName.PERSON, params: { id: person.id }}" v-if="open">Abrir</router-link>
        </div>
    </div>
</template>
<script setup>
import { inject } from 'vue';
import RouterName from '@/router-names';

defineProps({
    person: {
        type: Object,
        required: true,
        default: () => ({
            avatar: "",
            email: "",
            first_name: "",
            last_name: "",
            id: 0
        }),
    },
    selected: false,
    open: true,
})

defineEmits(["selected"]);

const titulo = inject("titulo", "Usuário") || "";

</script>