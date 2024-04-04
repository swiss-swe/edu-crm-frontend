<template>
  <div class="mt-5">
    <div v-if="loading"><Loading /></div>
    <div v-else>
      <div v-if="!groups.length"><emptyList /></div>
      <div v-else>
        <div class="flex justify-between items-center">
          <h3 class="font-bold text-[25px]">{{ t('admin.group') }}</h3>
          <v-button> {{ t('admin.addGroup') }}</v-button>
        </div>
        <VTable :items="groups" />
      </div>
    </div>
  </div>
</template>
<script setup>
import VButton from '@/components/button.vue';
import VTable from '@/components/Admin/groupTable.vue';
import Loading from '@/components/loading.vue';
import emptyList from '../../components/empty-list.vue';

import { useI18n } from 'vue-i18n';

import { useAdmin } from '@/composables/admin';
const { groups, loading } = useAdmin();

const { t } = useI18n();
</script>
