<template>
  <div class="items-center justify-center flex">Profile page</div>
</template>

<script setup>
import decodeJwt from '@/functions/tokenParser';

const UserInfo = () => {
  const retoken = localStorage.getItem('refreshToken');

  const ProfielInfo = decodeJwt(retoken);
};
UserInfo();
</script>
