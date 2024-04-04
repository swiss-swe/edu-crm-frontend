<template>
  <div class="mt-5">
    <div class="flex justify-between items-center">
      <h3 class="font-bold text-[25px]">{{ t('admin.teacher') }}</h3>
      <v-button> {{ t('admin.addTeacher') }} </v-button>
    </div>
    <div v-if="loading" class="relative text-center">
      <Loading />
    </div>
    <VTable v-else :items="teachers" />
  </div>
  <VTable :items="[]" />
</template>

<script setup>
import VButton from '@/components/button.vue';
import Loading from '@/components/loading.vue';
import VTable from '@/components/Admin/teacherTable.vue';
import { useI18n } from 'vue-i18n';

import { useAdmin } from '@/composables/admin';
const { teachers, loading } = useAdmin();

const { t } = useI18n();
</script>
