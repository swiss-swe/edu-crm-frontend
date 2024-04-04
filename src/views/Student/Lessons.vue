<template>
  <div class="container mt-5">
    <table class="min-w-full border border-gray-300">
      <thead>
        <tr>
          <th class="p-3 bg-gray-100">{{ $t('student.lesson') }}</th>
          <th class="p-3 bg-gray-100">{{ $t('student.video') }}</th>
          <th class="p-3 bg-gray-100">{{ $t('student.homework') }}</th>
          <th class="p-3 bg-gray-100">{{ $t('student.deadline') }}</th>
          <th class="p-3 bg-gray-100">{{ $t('student.date') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td class="p-3 border">{{ item.mavzu }}</td>
          <td class="p-3 border">{{ item.video }}</td>
          <td class="p-3 border">{{ item.hometask }}</td>
          <td class="p-3 border">{{ item.deadline }}</td>
          <td class="p-3 border">{{ item.date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const items = [
  {
    mavzu: 'Media query, css animations, offline fonts, icons',
    video: 'No',
    hometask: 'Yes',
    deadline: '22-12-2023 11:30',
    date: '21-12-2023'
  },
  {
    mavzu: 'Mikroservislar (1-qism)',
    video: 'No',
    hometask: 'Yes',
    deadline: '22-12-2023 11:30',
    date: '21-12-2023'
  },
  {
    mavzu: 'Mikroservislar (2-qism)',
    video: 'No',
    hometask: 'Yes',
    deadline: '22-12-2023 11:30',
    date: '21-12-2023'
  },
  {
    mavzu: 'GraphQL-1',
    video: 'No',
    hometask: 'Yes',
    deadline: '22-12-2023 11:30',
    date: '21-12-2023'
  },
  {
    mavzu: 'GraphQL-2',
    video: 'No',
    hometask: 'Yes',
    deadline: '22-12-2023 11:30',
    date: '21-12-2023'
  },
  {
    mavzu: 'Vue cli vite webpack',
    video: 'No',
    hometask: 'Yes',
    deadline: '22-12-2023 11:30',
    date: '21-12-2023'
  },
  {
    mavzu: 'vue event handling, binding',
    video: 'No',
    hometask: 'Yes',
    deadline: '22-12-2023 11:30',
    date: '21-12-2023'
  },
  {
    mavzu: 'css (flexbox, animations)',
    video: 'No',
    hometask: 'Yes',
    deadline: '22-12-2023 11:30',
    date: '21-12-2023'
  },
  {
    mavzu: 'JS asoslari takrorlash',
    video: 'No',
    hometask: 'Yes',
    deadline: '22-12-2023 11:30',
    date: '21-12-2023'
  },
  {
    mavzu: 'Media query, css animations, offline fonts, icons',
    video: 'No',
    hometask: 'Yes',
    deadline: '22-12-2023 11:30',
    date: '21-12-2023'
  }
];
</script>
