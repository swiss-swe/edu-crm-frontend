<template>
  <div class="w-full h-full bg-gradient-to-tr flex items-center justify-center">
    <div class="card w-[500px] bg-white rounded-lg p-2">
      <div class="flex justify-center mb-[43px]">
        <span class="me-2 w-[6px] bg-[#F8D442]" />
        <h2 class="uppercase text-[25px] font-[700]">{{ t('addStaff') }}</h2>
      </div>
      <div>
        <v-text-field
          type="text"
          :rules="[rules.required]"
          density="compact"
          label="First Name"
          variant="outlined"
          v-model="staff.first_name"
        />
        <v-text-field
          type="text"
          :rules="[rules.required]"
          density="compact"
          label="Last Name"
          variant="outlined"
          v-model="staff.last_name"
        />

        <v-text-field
          type="text"
          :rules="[rules.required]"
          density="compact"
          label="Phone Number"
          variant="outlined"
          v-model="staff.phone"
        />

        <v-text-field
          type="text"
          density="compact"
          label="Email"
          variant="outlined"
          :rules="[rules.required, rules.email]"
          v-model="staff.email"
        />

        <select
          v-model="staff.role"
          class="w-full p-2 border-[1px] border-solid rounded border-gray-400 mb-5"
          required
        >
          <option value="" disabled>Choose user type</option>
          <option value="teacher">Teacher</option>
          <option value="admin">Admin</option>
        </select>

        <v-text-field
          type="password"
          :rules="[rules.required]"
          density="compact"
          label="Password"
          variant="outlined"
          v-model="staff.password"
        />
      </div>
      <v-button @click="handleClick" class="uppercase w-100 my-[30px]">{{ t('add') }}</v-button>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { useDirector } from '@/composables/director';
import { reactive, ref } from 'vue';
import VButton from '@/components/button.vue';
import { errorToast } from '@/utils/toast';

const { t } = useI18n();
const { onSubmit } = useDirector();

const rules = reactive({
  required: (value) => !!value || 'Required.',
  email: (value) => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value) || 'Invalid e-mail.';
  }
});

const staff = reactive({
  first_name: '',
  last_name: '',
  phone: '',
  password: '',
  email: '',
  role: ''
});

const handleClick = () => {
  if (
    !staff.first_name.length &&
    !staff.last_name.length &&
    !staff.phone.length &&
    !staff.password.length &&
    !staff.email.length &&
    !staff.role.length
  ) {
    errorToast('The entered staff did not pass validation');
    return;
  }
  onSubmit(staff);

  staff.first_name = '';
  staff.last_name = '';
  staff.phone = '';
  staff.password = '';
  staff.email = '';
  staff.role = '';
};
</script>
