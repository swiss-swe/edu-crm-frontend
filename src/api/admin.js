import api from '@/plugins/axios';

const url = import.meta.env.VITE_BASE_URL;

function apifetchAdmins() {
  return api.get('/admins/all');
}

function apifetchStudent(id) {
  return api.get(`/users/${id}`);
}

function apifetchStudents() {
  return api.get('/users');
}

function apifetchGroups() {
  return api.get(url + '/group/find');
}

function apifetchTeachers() {
  return api.get('/teachers');
}

function apifetchSingleTeacher(id) {
  return api.get(`/teachers/${id}`);
}

export {
  apifetchAdmins,
  apifetchStudents,
  apifetchStudent,
  apifetchTeachers,
  apifetchSingleTeacher,
  apifetchGroups
};
