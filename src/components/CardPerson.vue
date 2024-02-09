<template>
  <div
    class="m-auto w-full text-center max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="flex flex-col items-center p-2">
      <p class="dark:text-white" v-if="titulo != null">{{ titulo }}</p>
      <img
        class="w-24 h-24 rounded-full shadow-lg"
        :src="person.avatar"
        alt="Bonnie image"
      />
      <h6 class="mb-1 text-sm font-medium text-gray-800 dark:text-white">
        {{ person.email }}
      </h6>
      <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
        {{ person.first_name }} {{ person.last_name }}
      </h5>
      <div class="flex gap-1">
        <button
          type="button"
          :class="{
            'focus:outline-none text-white focus:ring-4  font-medium rounded-lg text-sm px-2 py-1 me-2 mb-2': true,
            'bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800': !selected,
            'bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800': selected,
          }"
          @click="$emit('selected', person)"
        >
          {{ !selected ? "Selecionar" : "Desmarcar" }}
        </button>
        <router-link
          class="focus:outline-none text-white focus:ring-4 font-medium rounded-lg text-sm px-2 py-1 me-2 mb-2 bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          :to="{ name: RouterName.PERSON, params: { id: person.id } }"
          v-if="open"
          >Abrir</router-link
        >
      </div>
      <div class="mt-2" v-if="isRole">
        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seleciona cargos</label>
        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        v-model="roleSelected">
          <option value="" selected>Seleciona o cargo</option>
          <option value="ADMIN">Administrador</option>
          <option value="USER">User</option>
        </select>          
      </div>      
    </div>
  </div>
</template>
<script setup>
import { inject, watch, ref } from "vue";
import { useRoles } from '@/store/roles';

import RouterName from "@/router-names";

const props = defineProps({
  person: {
      role: "USER",
      avatar: "",
      email: "",
      first_name: "",
      last_name: "",
      id: 0,
  },
  selected: false,
  open: true,
  isRole: false,
});

defineEmits(["selected"]);

const titulo = inject("titulo", "Usuário") || "";
const roleStore = useRoles();

const {addRole} = roleStore;

const roleSelected = ref('');

watch(roleSelected, (newValue) => {
  const user = props.person;
  user.role = newValue;
  addRole(user)
})

</script>
