<template>
  <v-table class="my-2">
    <thead style="background-color: #f2eae1">
      <tr>
        <th class="text-left">{{ t('admin.rooms.name') }}</th>
        <th class="text-left">{{ t('admin.rooms.size') }}</th>
        <th class="text-left">{{ t('admin.action') }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.name">
        <td>{{ item.room_name }}</td>
        <td>{{ item.room_size }}</td>
        <td>
          <v-icon class="my-2 mx-4" :icon="'mdi-pencil'"> </v-icon>
          <v-icon :icon="'mdi-delete'"> </v-icon>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>
<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

defineProps({
  items: {
    type: Array,
    required: true
  }
});
</script>
