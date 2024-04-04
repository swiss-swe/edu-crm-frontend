<template>
  <v-layout class="overflow-hidden">
    <sidebar :permanent="permanent" :routes="directorRoutes" />

    <appbar @toggle-sidebar="permanent = !permanent" />

    <v-main class="!h-screen overflow-y-scroll">
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-layout>
</template>

<script setup>
import { ref } from 'vue';

import {
  RT_DASHBOARD,
  RT_ADD_STAFF,
  RT_PROFILE,
  RT_STAFF_LIST,
  MT_DASHBOARD,
  MT_ADD_STAFF,
  MT_PROFILE,
  MT_STAFF_LIST
} from '@/constants/routes/director';

import sidebar from '@/components/partials/sidebar.vue';
import appbar from '@/components/partials/appbar.vue';

const permanent = ref(true);

const directorRoutes = ref([
  {
    text: MT_DASHBOARD,
    name: RT_DASHBOARD,
    icon: 'fa-list'
  },
  {
    text: MT_STAFF_LIST,
    name: RT_STAFF_LIST,
    icon: 'fa-list'
  },
  {
    text: MT_ADD_STAFF,
    name: RT_ADD_STAFF,
    icon: 'fa-user-plus'
  }
  // {
  //   text: MT_PROFILE,
  //   name: RT_PROFILE,
  //   icon: 'fa-graduation-cap'
  // }
]);
</script>
