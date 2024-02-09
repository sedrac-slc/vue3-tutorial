<template>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="@/assets/img/logo.svg" class="h-8" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{{ title }}</span>
            </a>
            <button data-collapse-toggle="navbar-default" type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only"></span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
            <div class="flex md:order-2 space-x-3 md:space-x-2 rtl:space-x-reverse">
                <button type="button" @click="toggleDark()" class="dark:text-white dark:before:bg-white">
                    <box-icon name='sun' type='solid'  v-if="isDark"></box-icon>
                    <box-icon name='moon' type='solid' v-else></box-icon>
                </button>
                <button type="button" @click="toggle()" class="dark:text-white dark:before:bg-white">
                    <box-icon name='exit-fullscreen' v-if="isFullscreen"></box-icon>
                    <box-icon name='fullscreen' v-else></box-icon>
                </button>
            </div>

            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul
                    class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li v-for="menu in menus" :key="menu.id">
                        <router-link :to="{ name: menu.routeName }" v-if="menu.active"
                            class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                            aria-current="page"> {{ menu.name }} 
                        </router-link>
                        <router-link :to="{ name: menu.routeName }" v-else
                            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">{{
                                menu.name }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script setup>

import { useDark, useToggle } from "@vueuse/core";
import { useFullscreen } from '@vueuse/core'
import RouterName from '@/router-names';

defineProps({ title: String })

const isDark = useDark();
const toggleDark = useToggle(isDark);
const { isFullscreen, toggle } = useFullscreen();

const menus = [
    { id: 1, name: "Home", active: true, routeName: RouterName.HOME },
    { id: 2, name: "About", active: false, routeName: RouterName.ABOUT },
    { id: 3, name: "Services", active: false, routeName: RouterName.SERVICE },
]

</script>