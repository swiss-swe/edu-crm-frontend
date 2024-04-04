<template>
  <div v-if="loading">Loading</div>
  <div class="w-full border-2 border-btnBg mt-[20px] p-5 flex justify-between">
    <div class="w-[70%]">
      <h2 class="font-bold">{{ singleStaff.first_name }} {{ singleStaff.last_name }}</h2>
      <p>
        <span class="font-bold">{{ t('SingleStaff.email') }} :</span> {{ singleStaff.email }}
      </p>
      <p>
        <span class="font-bold">{{ t('SingleStaff.phone') }} :</span> {{ singleStaff.phone }}
      </p>
      <p v-if="singleStaff.is_admin">
        <span class="font-bold">role:</span>{{ t('SingleStaff.admin') }}
      </p>
      <p v-if="singleStaff.is_teacher">
        <span class="font-bold">role:</span>{{ t('SingleStaff.teacher') }}
      </p>
      <div class="w-full border-2 text-center mt-10">
        <button @click="onShowStaffUpdateModal()">{{ t('SingleStaff.edit') }}</button>
      </div>
    </div>
    <div class="w-[30%]">
      <img
        class="w-[200px] rounded-md mx-auto"
        src="../../assets/images/Unknown_person.jpg"
        alt=""
      />
    </div>
  </div>

  <section
    v-if="showStaffUpdateModal"
    class="modal w-full h-screen fixed z-50 flex items-center justify-center top-0 left-0"
  >
    <div class="w-[35%] bg-white rounded-xl px-7 py-2 mt-[80px] ml-[230px]">
      <div class="text-right mb-2">
        <button
          class="py-1 px-2.5 bg-gray-500 font-bold rounded-full text-gray-900"
          @click="showStaffUpdateModal = false"
        >
          X
        </button>
      </div>

      <form @submit.prevent="onSubmitStaffUpdateModal">
        <div class="mb-2 border-2 p-1">
          <label class="block mb-1 font-bold" for="title">{{
            t('staffUpdateModal.firstname')
          }}</label>
          <input
            v-model="singleStaff.first_name"
            class="w-full border-2"
            type="text"
            id="first_name"
          />
        </div>
        <div class="mb-2 border-2 p-1">
          <label class="block mb-1 font-bold" for="desc">{{
            t('staffUpdateModal.lastname')
          }}</label>
          <input v-model="singleStaff.last_name" class="w-full" type="text" id="last-name" />
        </div>
        <div class="mb-2 border-2 p-1">
          <label class="block mb-1 font-bold" for="image">{{ t('staffUpdateModal.phone') }}</label>
          <input v-model="singleStaff.phone" class="w-full" type="text" id="phone" />
        </div>
        <div class="mb-2 border-2 p-1">
          <label class="block mb-1 font-bold" for="price">{{ t('staffUpdateModal.email') }}</label>
          <input v-model="singleStaff.email" class="w-full" type="text" id="email" />
        </div>

        <select class="w-full p-2 border-[1px] border-solid rounded border-gray-400 mb-5" required>
          <option value="default" selected disabled>
            {{ t('staffUpdateModal.change_user_role') }}
          </option>
          <option value="admin">{{ t('staffUpdateModal.admin') }}</option>
          <option value="teacher">{{ t('staffUpdateModal.teacher') }}</option>
        </select>

        <button class="block w-full bg-gray-500 rounded-xl p-3 font-bold">
          {{ t('staffUpdateModal.update') }}
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { useDirector } from '@/composables/director';
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const {
  loading,
  singleStaff,
  fetchStaff,
  route,
  showStaffUpdateModal,
  onShowStaffUpdateModal,
  onSubmitStaffUpdateModal
} = useDirector();
const { t } = useI18n();

onMounted(async () => {
  await fetchStaff(route.params.id);
});
</script>

<style scoped>
.modal {
  background-color: rgba(0, 0, 0, 0.6);
}
</style>
