<template>
  <div class="mt-5">
    <!-- <div v-if="loading" class="relative text-center">
      <loading />
    </div> -->
    <div class="flex justify-between items-center">
      <h3 class="font-bold">Student list</h3>
      <v-button> Add new student </v-button>
    </div>
  </div>
  <VTable :items="students" />
</template>

<script setup>
import VButton from '@/components/button.vue';
import VTable from '@/components/table.vue';
import loading from '../components/loading.vue';

// import { useStudent } from '@/composables/students';
// const { students, loading } = useStudent();
</script>

<style lang="scss" scoped></style>
