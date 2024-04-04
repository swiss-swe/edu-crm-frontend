<template>
  <div v-if="loading" class="relative text-center">
    <Loading />
  </div>
  <div v-else>
    <div v-if="!staffList.length">
      <NotFound />
    </div>
    <div v-else>
      <VTable :items="staffList" />
      <div class="mt-6 flex mx-auto justify-center">
        <n-pagination
          v-model:page="pagination.page"
          v-model:page-size="pagination.pageSize"
          :page-count="Math.ceil(meta.total / pagination.pageSize)"
          size="large"
          show-quick-jumper
          show-size-picker
          :page-sizes="perPageSetting"
          :disabled="loading"
          @update:page-size="onPageSizeChange"
          @update-page="onPageChange"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import VTable from '@/components/staff-table.vue';
import Loading from '@/components/loading.vue';
import NotFound from '@/components/empty-list.vue';
import { NPagination } from 'naive-ui';

import { useDirector } from '@/composables/director';
const { staffList, loading, meta, pagination, onPageSizeChange, onPageChange } = useDirector();

const perPageSetting = [
  {
    label: '10 / page',
    value: 10
  },
  {
    label: '20 / page',
    value: 20
  },
  {
    label: '50 / page',
    value: 50
  },
  {
    label: '100 / page',
    value: 100
  }
];
</script>
