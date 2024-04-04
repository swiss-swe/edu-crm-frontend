<template>
  <v-layout class="!h-screen">
    <sidebar :permanent="permanent" :routes="adminRoutes" />

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
import {
  RT_ADMIN,
  MT_ADMIN,
  MT_ROOM,
  MT_STUDENT,
  MT_TEACHER,
  MT_GROUP,
  MT_COURSE,
  RT_ROOM,
  RT_STUDENT,
  RT_TEACHER,
  RT_COURSE,
  RT_GROUP
} from '@/constants/routes/admin';

import Sidebar from '@/components/partials/sidebar.vue';
import Appbar from '@/components/partials/appbar.vue';

const permanent = ref(true);

const adminRoutes = ref([
  {
    text: MT_COURSE,
    name: RT_COURSE,
    icon: 'fa-person-chalkboard'
  },
  {
    text: MT_GROUP,
    name: RT_GROUP,
    icon: 'fa-users'
  },
  {
    text: MT_STUDENT,
    name: RT_STUDENT,
    icon: 'fa-users'
  },
  {
    text: MT_ROOM,
    name: RT_ROOM,
    icon: 'fa-book'
  },
  {
    text: MT_TEACHER,
    name: RT_TEACHER,
    icon: 'fa-person-chalkboard'
  },
  {
    text: MT_ADMIN,
    name: RT_ADMIN,
    icon: 'fa-user-tie'
  }
]);

const toggleSidebar = () => {
  permanent.value = !permanent.value;
};
</script>
