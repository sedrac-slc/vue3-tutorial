import { defineStore } from "pinia";
import {ref, computed} from "vue";

export const useRoles = defineStore("roles",() => {
    const roles = ref([]);

    const addRole = (person) => {
        if(roles.value.filter(p => p.id == person.id).length == 0){
            roles.value.push(person);
        }
    }

    const totalRoles = computed(() => roles.value.length);

    return {
        addRole,
        totalRoles,
        roles
    }

})