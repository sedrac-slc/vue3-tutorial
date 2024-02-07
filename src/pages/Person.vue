<template>
    <CardPerson :person="person" v-if="person != null" :open="false" class="mt-5"/>
</template>
<script setup>

import CardPerson from '@/components/CardPerson.vue';
import { useFetch } from '@/composables/fetch';
import { useRoute } from 'vue-router';

const route = useRoute();
const { data: person } = useFetch(`https://reqres.in/api/users/${route.params.id}`);

</script>