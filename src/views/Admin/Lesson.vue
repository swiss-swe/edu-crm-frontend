<template>
  <div class="mt-5">
    <div class="flex justify-between items-center">
      <h3 class="font-bold">{{ t('admin.lesson.lessonList') }}</h3>
      <v-button> {{ t('admin.lesson.addLesson') }}</v-button>
    </div>
  </div>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">{{ t('admin.lesson.theme') }}</th>
        <th class="text-left">{{ t('admin.lesson.homeWork') }}</th>
        <th class="text-left">{{ t('admin.lesson.file') }}</th>
      </tr>
    </thead>
    <tbody>
      <!-- <tr v-for="item of lesson.products" :key="item.name">
        <td>{{ item.title }}</td>
        <td>{{ item.category }}</td>
        <td>{{ item.brand }}</td>
      </tr> -->
    </tbody>
  </v-table>
</template>

<script setup>
import VButton from '@/components/button.vue';

import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>
