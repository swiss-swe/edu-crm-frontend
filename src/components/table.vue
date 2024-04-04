<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Fullname</th>
        <th class="text-left">Email</th>
        <th class="text-left">Phone</th>
        <th class="text-left">Username</th>
        <th class="text-left">Social number</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.name">
        <td>{{ item.firstName }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.phone }}</td>
        <td>{{ item.username }}</td>
        <td>{{ item.ssn }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup lang="ts">
type itemObj = {
  name: string;
  firstName: string;
  email: string;
  phone: string;
  username: string;
  ssn: string;
};

defineProps<{ items: itemObj[] }>();
</script>
