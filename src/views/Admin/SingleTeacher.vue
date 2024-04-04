<template>
  <div v-if="loading">Loading</div>
  <div v-else class="w-full border-2 border-btnBg mt-[20px] p-5 flex justify-between">
    <div class="w-[70%]">
      {{ singleTeacher }}
    </div>
  </div>
</template>

<script setup>
import { useAdmin } from '@/composables/admin';

import { onMounted } from 'vue';
const { loading, singleTeacher, getSingleTeacher, route } = useAdmin();
onMounted(async () => {
  await getSingleTeacher(route.params.id);
});
</script>
