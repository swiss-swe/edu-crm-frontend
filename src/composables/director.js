import { useDirectorStore } from '@/store/director';
import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref, reactive } from 'vue';

export const useDirector = () => {
  const showStaffUpdateModal = ref(false);
  const editingItemId = ref(null);

  const pagination = reactive({
    page: 1,
    pageSize: 10,
    skip: 0
  });
  const store = useDirectorStore();
  const router = useRouter();
  const route = useRoute();
  const { staffList, singleStaff, loading, meta } = storeToRefs(store);
  const { fetchStaffList, fetchStaff, addStaff, updateStaffModal } = useDirectorStore();

  async function onPageSizeChange(pageSize) {
    pagination.pageSize = pageSize;
    pagination.skip = 0;
    await fetchStaffList(pagination);
  }

  async function onPageChange(newPage) {
    pagination.page = newPage;
    pagination.skip = pagination.pageSize * (newPage - 1);
    await fetchStaffList(pagination);
  }

  function onShowStaffUpdateModal() {
    showStaffUpdateModal.value = true;
    editingItemId.value = item.id;
  }

  onMounted(async () => {
    await fetchStaffList(pagination);
  });

  const onSubmit = async (staff) => {
    try {
      await addStaff(staff);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    router,
    route,
    staffList,
    singleStaff,
    loading,
    fetchStaff,
    fetchStaffList,
    onSubmit,
    pagination,
    meta,
    onPageSizeChange,
    onPageChange,
    showStaffUpdateModal,
    onShowStaffUpdateModal,
    updateStaffModal
  };
};
