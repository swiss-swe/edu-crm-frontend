<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">{{ t('admin.teachers.image') }}</th>
        <th class="text-left">{{ t('admin.students.firstname') }}</th>
        <th class="text-left">{{ t('admin.students.lastname') }}</th>
        <th class="text-left">{{ t('admin.students.phonenumber') }}</th>
        <th class="text-left">{{ t('admin.teachers.salary') }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.name">
        <td>{{ item.img }}</td>
        <td>{{ item.first_name }}</td>
        <td>{{ item.last_name }}</td>
        <td>{{ item.phone }}</td>
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
