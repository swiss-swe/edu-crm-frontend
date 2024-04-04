<template>
  <v-layout class="!h-screen">
    <sidebar :permanent="permanent" :routes="studentRoutes" />

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

import { RT_LESSONS, RT_PROFILE, MT_LESSONS, MT_PROFILE } from '@/constants/routes/student';

const permanent = ref(true);

const studentRoutes = ref([
  {
    id: 1,
    text: MT_LESSONS,
    name: RT_LESSONS,
    icon: 'fa-person-chalkboard'
  },
  {
    id: 2,
    text: MT_PROFILE,
    name: RT_PROFILE,
    icon: 'fa-user'
  }
]);

const toggleSidebar = () => {
  permanent.value = !permanent.value;
};
</script>
