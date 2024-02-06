<template>
  <div class="grid grid-cols-3 gap-4 mt-4">
    <CardPerson
      v-for="person in persons"
      :key="person.id"
      :person="person"
      @selected="addInListSelected($event)"
      :selected="existInListSelected(person)"
      v-if="!error"
    />
    <div v-else>{{ error }}</div>
  </div>
</template>
<script setup>
import { ref, provide } from "vue";

import CardPerson from "./CardPerson.vue";
import { useFetch } from "@/composables/fetch.js";

const personsSelected = ref([]);

const { data: persons, error } = useFetch(`https://reqres.in/api/users?page=2`);

const existInListSelected = (person) =>
  personsSelected.value.filter((p) => p.id == person.id).length > 0;

const addInListSelected = (person) => {
  if (!existInListSelected(person)) {
    personsSelected.value.push(person);
  } else {
    personsSelected.value = personsSelected.value.filter((p) => p.id != person.id);
  }
};

provide("titulo", "Usuário");
</script>
