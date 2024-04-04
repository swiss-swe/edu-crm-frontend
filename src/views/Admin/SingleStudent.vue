<template>
  <div>
    <div v-if="loading"><Loading /></div>
    <div v-else>{{ user }}</div>
  </div>
</template>

<script setup>
import { useAdmin } from '@/composables/admin';
import Loading from '@/components/loading.vue';
import { onMounted } from 'vue';

const { user, loading, getSingleStudent, route } = useAdmin();

onMounted(async () => {
  await getSingleStudent(route.params.id);
});
</script>

<style scoped></style>
