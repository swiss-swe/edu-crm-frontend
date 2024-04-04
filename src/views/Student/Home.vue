<template>
  <div class="pt-3" v-for="(item, index) in students" :key="index">
    <div class="flex items-center gap-10">
      <img class="w-[150px]" src="../../assets/profile.png" alt="" />
      <div>
        <p class="text-5xl font-semibold">{{ item.fullName }}</p>
        <p class="text-xl font-semibold">ID:{{ item.id }}</p>
      </div>
    </div>
    <div class="flex justify-around mt-5">
      <div class="personalInfo w-[49%] p-3 border-2 border-black rounded-sm">
        <h1 class="text-xl font-bold">{{ $t('student.personalDetails') }}</h1>
        <p class="text-[17px] font-medium mt-3">id:</p>
        <p class="text-[16px] font-normal mt-2">{{ item.id }}</p>
        <p class="text-[17px] font-medium mt-3">{{ $t('student.email') }}:</p>
        <p class="text-[16px] font-normal mt-2">{{ item.email }}</p>
        <p class="text-[17px] font-medium mt-3">{{ $t('student.phone1') }}:</p>
        <p class="text-[16px] font-normal mt-2">{{ item.phone1 }}</p>
        <p class="text-[17px] font-medium mt-3">{{ $t('student.phone2') }}:</p>
        <p class="text-[16px] font-normal mt-2">{{ item.phone2 }}</p>
      </div>

      <div class="classInfo w-[49%] p-3 border-2 border-black rounded-sm">
        <h1 class="text-xl font-bold">{{ $t('student.classDetails') }}</h1>
        <p class="text-[17px] font-medium mt-3">{{ $t('student.group') }}:</p>
        <p class="text-[16px] font-normal mt-2">{{ item.group }}</p>
        <p class="text-[17px] font-medium mt-3">{{ $t('student.startTime') }}:</p>
        <p class="text-[16px] font-normal mt-2">{{ item.startTime }}</p>
        <p class="text-[17px] font-medium mt-3">{{ $t('student.status') }}:</p>
        <p class="text-[16px] font-medium mt-2">{{ item.status }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const students = ref([
  {
    id: 1233,
    fullName: 'Abdunazir Asqarov',
    group: 'Bootcamp FullStack N9',
    email: 'abdunazirasqarov@gmail.com',
    phone1: '+998902348821',
    phone2: '+998935664788',
    status: 'Active',
    startTime: '10-11-2023'
  }
]);
</script>

<style lang="scss" scoped></style>
