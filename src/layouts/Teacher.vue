<template>
  <v-layout class="!h-screen">
    <sidebar :permanent="permanent" :routes="teacherRoutes" />

    <appbar @toggle-sidebar="toggleSidebar" />

    <v-main class="overflow-y-scroll">
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-layout>
</template>

<script setup>
import { ref } from 'vue';

import sidebar from '@/components/partials/sidebar.vue';
import appbar from '@/components/partials/appbar.vue';

const permanent = ref(true);

const teacherRoutes = ref([
  {
    id: 1,
    text: 'Get admin',
    name: 'find-one-admin',
    path: '/',
    icon: 'fa-user-tie'
  },
  {
    id: 2,
    text: 'Students',
    name: 'find-students',
    path: '/student',
    icon: 'fa-users'
  },
  {
    id: 3,
    text: 'Teachers',
    name: 'find-teachers',
    path: '/teacher',
    icon: 'fa-person-chalkboard'
  }
]);

const toggleSidebar = () => {
  permanent.value = !permanent.value;
};
</script>
