<template>
  <div class="card p-5 rounded-lg cursor-pointer" :class="`bg-[${bgColor}]`">
    <div class="mb-4">
      <span class="fa-solid" :class="icon" />
      <p>{{ iconText }}</p>
    </div>
    <div class="text-right">
      <slot name="text" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string;
  bgColor?: string;
  iconText: string;
}>();
</script>
