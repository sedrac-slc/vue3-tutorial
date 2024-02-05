<template>
        <CardPerson :person="person"/>
        <form class="mt-8">
            <div class="mb-6">
                <label for="number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">number</label>
                <input type="number" id="number" name="number" v-model="number"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="" min="0" required>
            </div>
            <!--
            <button type="button" :disabled="!active_button" @click="searchUserById()"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            -->
        </form>
    
</template>
<script setup>

import { ref, computed, watch,watchEffect } from 'vue';
import CardPerson from './CardPerson.vue';

const number = ref(0);
const person = ref({});

const searchUserInApiReqres = async (id) => {
    const req = await fetch(`https://reqres.in/api/users/${id}`);
    const json = await req.json();
    return json.data;
}

//const active_button = computed(() => number.value > 0)
const full_name = computed(() => `${person.value.first_name} ${person.value.last_name}`)

//const searchUserById = async () => {  person.value = await searchUserInApiReqres(number.value); }
/*
onMounted(async () => {
    person.value = await searchUserInApiReqres(1);
});
*/
watch(number, (fiild_new, fiild_old) => {
    if(fiild_new <= 0){
        alert("Código inválido")
    }
})

watchEffect(async () => {
    person.value = await searchUserInApiReqres(number.value || 1)
})

</script>