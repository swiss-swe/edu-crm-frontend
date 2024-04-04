<template>
  <v-table class="my-2">
    <thead style="background-color: #f2eae1">
      <tr>
        <th class="text-left">{{ t('admin.groups.name') }}</th>
        <th class="text-left">{{ t('admin.course.name') }}</th>
        <th class="text-left">{{ t('admin.groups.start_date') }}</th>
        <th class="text-left">{{ t('admin.groups.end_date') }}</th>
        <th class="text-left">{{ t('admin.groups.days') }}</th>
        <th class="text-left">{{ t('admin.groups.start_time') }}</th>
        <th class="text-left">{{ t('admin.groups.end_time') }}</th>
        <th class="text-left">{{ t('admin.groups.status') }}</th>
        <th class="text-left">{{ t('admin.rooms.name') }}</th>

        <th class="text-left">{{ t('admin.action') }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.name">
        <td>{{ item.name }}</td>
        <td>{{ item.course_id }}</td>
        <td>{{ item.start_date }}</td>
        <td>{{ item.end_date }}</td>
        <td>{{ item.days }}</td>
        <td>{{ item.start_time }}</td>
        <td>{{ item.end_time }}</td>
        <td>{{ item.status }}</td>
        <td>{{ item.room }}</td>
        <td>
          <v-icon class="my-2 mx-2" :icon="'mdi-pencil'"> </v-icon>
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
