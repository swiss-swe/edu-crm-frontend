<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">{{ t('admin.students.firstname') }}</th>
        <th class="text-left">{{ t('admin.students.lastname') }}</th>
        <th class="text-left">{{ t('admin.students.phonenumber') }}</th>
        <th class="text-left">{{ t('admin.action') }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.name">
        <td>{{ item.firstName }}</td>
        <td>{{ item.lastName }}</td>
        <td>{{ item.phone }}</td>
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
const props = defineProps({
  items: {
    type: Array,
    required: true
  }
});
</script>
