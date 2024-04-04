<template>
  <div v-if="loading"><Loading /></div>

  <div v-else>
    <div v-if="students.length == 0"><emptyList /></div>

    <div v-else>
      <div class="mt-5">
        <div class="flex justify-between items-center">
          <h3 class="font-bold text-[25px]">{{ t('admin.student') }}</h3>
          <v-button> {{ t('admin.addStudent') }} </v-button>
        </div>
      </div>
      <VTable :items="[]" />
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

import VButton from '@/components/button.vue';
import VTable from '@/components/Admin/studentTable.vue';

import emptyList from '@/components/empty-list.vue';
import Loading from '@/components/loading.vue';
import { useAdmin } from '@/composables/admin';
const { loading, students } = useAdmin();

const { t } = useI18n();
</script>
