<template>
  <div class="items-center flex justify-center">
    <h1>Lesson page</h1>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const lessons = ref([]);
const fetchLesson = async () => {
  try {
    const res = await fetch('');
    lessons.value = await res.json();
  } catch (error) {
    console.log(error);
  }
};
fetchLesson();
</script>
