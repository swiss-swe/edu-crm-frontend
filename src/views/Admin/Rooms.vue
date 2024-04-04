<template>
  <div class="mt-5">
    <div class="flex justify-between items-center">
      <h3 class="font-bold text-[25px]">{{ t('admin.room') }}</h3>
      <v-button>{{ t('admin.addRoom') }}</v-button>
    </div>
    <div>
      <VTable :items="room" />
    </div>
  </div>
</template>
<script setup>
import VButton from '@/components/button.vue';
import VTable from '@/components/Admin/roomTable.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const room = [
  {
    room_name: 'Abu tech',
    room_size: 23
  }
];
</script>
