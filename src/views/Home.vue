<template>
  <div class="flex items-center justify-between mt-5 !bg-white">
    <DashboardCard
      v-for="card in cards"
      :key="card.iconText"
      :icon="card.icon"
      :iconText="card.iconText"
      :bgColor="card.bgColor"
      class="w-1/4"
    >
      <template #text>
        <strong>{{ card.text }}</strong>
      </template>
    </DashboardCard>
  </div>
</template>

<script setup>
import DashboardCard from '@/components/cards/dashboard-card.vue';

const cards = [
  { icon: 'fa-graduation-cap', iconText: 'Students', bgColor: '#FEFFFD', text: '243' },
  { icon: 'fa-bookmark', iconText: 'Course', bgColor: 'red-400', text: '13' },
  { icon: 'fa-dollar-sign', iconText: 'Payments', bgColor: '#FBFEEC', text: "2 000 000 so'm" },
  { icon: 'fa-user', iconText: 'User', bgColor: '#F8D442', text: '3' }
];
</script>
