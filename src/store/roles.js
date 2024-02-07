import { defineStore } from "pinia";
import {ref, computed} from "vue";

export const useRoles = defineStore("roles",() => {
    const roles = ref([]);

    const addRole = (person) => {
        roles.value = roles.value.filter(p => p.id != person.id);
    }

    const totalRoles = computed(() => roles.value.length);

    return {
        addRole,
        totalRoles
    }

})