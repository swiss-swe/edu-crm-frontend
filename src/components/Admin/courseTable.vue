<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">{{ t('admin.course.name') }}</th>
        <th class="text-left">{{ t('admin.course.coast') }}</th>
        <th class="text-left">{{ t('admin.course.period') }}</th>
        <th class="text-left">{{ t('admin.action') }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.name">
        <td>{{ item.cours_name }}</td>
        <td>{{ item.cours_coast }}</td>
        <td>{{ item.course_period }}</td>
        <td>
          <v-icon @click="openEdit" class="my-2 mx-4" :icon="'mdi-pencil'"> </v-icon>
          <v-icon @click="openDelete" :icon="'mdi-delete'"> </v-icon>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const openEdit = () => {
  console.log('Edit');
};

const openDelete = () => {
  console.log('Delete');
};

defineProps({
  items: {
    type: Array,
    required: true
  }
});
</script>
