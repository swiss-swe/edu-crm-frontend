<template>
  <div class="mt-5">
    <div class="flex justify-between items-center">
      <h3 class="font-bold text-[25px]">{{ t('admin.cours') }}</h3>
      <div class="mx-2"><courseModal /></div>
    </div>
    <VTable :items="courses" />
  </div>
</template>
<script setup>
import VButton from '@/components/button.vue';
import VTable from '@/components/Admin/courseTable.vue';
import courseModal from '@/views/Admin/Modals/coursModal.vue';

import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const courses = [
  {
    cours_name: 'full stack',
    cours_coast: '200000',
    course_period: 'fvf'
  }
];
</script>
<style scoped></style>
