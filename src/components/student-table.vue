<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Image</th>
        <th class="text-left">First name</th>
        <th class="text-left">Last name</th>
        <th class="text-left">Phone</th>
        <th class="text-left">Salary</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.name">
        <td>{{ item.img }}</td>
        <td>{{ item.first_name }}</td>
        <td>{{ item.last_name }}</td>
        <td>{{ item.phone }}</td>
        <td>{{ item.salary }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true
  }
});
</script>
