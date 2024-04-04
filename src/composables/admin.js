import { useAdminStore } from '@/store/admin';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export const useAdmin = () => {
  const store = useAdminStore();
  const router = useRouter();
  const route = useRoute();

  const { loading, user, admins, students, teachers, singleTeacher, groups } = storeToRefs(store);
  const {
    login,
    getSingleStudent,
    getStudentList,
    getSingleTeacher,
    fetchTeacherList,
    getGroupList
  } = useAdminStore();

  onMounted(async () => {
    await getStudentList();
  });

  onMounted(async () => {
    await getGroupList();
  });

  return {
    login,
    loading,
    user,
    admins,
    teachers,
    singleTeacher,
    fetchTeacherList,
    getSingleStudent,
    getSingleTeacher,
    route,
    router,
    students,
    groups
  };
};
